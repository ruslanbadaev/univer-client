import axios from 'axios'
const server = axios.create({ baseURL: process.env.VUE_APP_SERVER })

class Feed {
  constructor ({ _id, title, date, introText, fullText, images }) {
    this._id = _id
    this.title = title
    this.date = date
    this.introText = introText
    this.fullText = fullText
    this.images = []
    images.forEach(image => {
      //console.log(image);
      this.images.push(`${process.env.VUE_APP_SERVER}/uploads/${image.filename}`)
    })
  }
}

export default {
  state: {
    feed: [],
    _feed: []
  },
  mutations: {
    setFeed (state, payload) {
      [...payload.sort((a, b) => b.date - a.date)].forEach(feed => state._feed.push(new Feed(feed)))
    },
    sharedFeed (state) {
      state.feed.push(...state._feed.splice(0, 5))
    }
  },
  actions: {
    async loadFeed ({ commit }) {
      commit('setLoading', true)
      try {
        const response = await server.get('news/all')
        //console.log(response.data.result);
        commit('setFeed', response.data.result)
        commit('sharedFeed')
        commit('setLoading', false)
        return response.data.result.length
      } catch (error) {
        commit('setLoading', false)
        throw new Error(error)
      }
    },
    async sendFeed ({ dispatch, commit, getters }, { title, introText, fullText, images, time }) {
      commit('setLoading', true)
      const formData = new FormData()
      formData.append('title', title)
      formData.append('introText', introText)
      formData.append('fullText', fullText)
      formData.append('views', 0)
      formData.append('date', time)
      if (images !== null) {
        images.forEach(image => {
          formData.append('image', image)
        })
      }
      try {
        await server({
          method: 'POST',
          headers: { Authorization: `Bearer ${getters.user.token}` },
          data: formData,
          url: '/news'
        })
        dispatch('loadFeed')
        commit('setLoading', false)
        return true
      } catch (error) {
        commit('setLoading', false)
        throw new Error(error)
      }
    },
    async editFeed ({ dispatch, commit, getters }, { title, introText, fullText, images, id, time }) {
      commit('setLoading', true)
      const formData = new FormData()
      formData.append('title', title)
      formData.append('introText', introText)
      formData.append('fullText', fullText)
      formData.append('views', 0)
      formData.append('date', time)
      if (images !== null) {
        images.forEach(image => {
          formData.append('image', image)
        })
      }
      await server({
        method: 'PATCH',
        headers: { Authorization: `Bearer ${getters.user.token}` },
        data: formData,
        url: `/news/${id}`
      })
        .then(() => {
          dispatch('loadFeed')
          commit('setLoading', false)
        })
        .catch(e => {
          commit('setLoading', false)
        })
    },
    deleteFeed ({ dispatch, commit, getters }, id) {
      commit('setLoading', true)
      server.delete(`/news/${id}`, {
        headers: {
          Authorization: `Bearer ${getters.user.token}`
        }
      })
        .then(() => {
          dispatch('loadFeed')
          commit('setLoading', false)
        })
        .catch(e => {
          commit('setLoading', false)
          console.error(e)
        })
    }
  },
  getters: {
    feed: state => state.feed
  }
}
