import cookie from '@/cookie'
import axios from 'axios'

const instance = axios.create({ baseURL: process.env.VUE_APP_SERVER })

class User {
  constructor (refresh_token, token, email, name, role, verification, verified, _id) {
    this.token = token
    this.email = email
    this.name = name
    this.role = role
    this.id = _id
    this.verified = verified
    this.verification = verification
    this.refresh_token = refresh_token
  }
}

export default {
  state: {
    user: null,
    schedule: []
  },
  mutations: {
    authUser (state, payload) {
      state.user = payload
    },
    setSchedule (state, payload) {
      state.schedule = payload
    }
  },
  actions: {
    isUserAuth ({ commit }) {
      if (cookie.getCookie('user') !== undefined) {
        const { refresh_token, token, email, name, role, verification, verified, _id } = cookie.getCookie('user')
        commit('authUser', new User(refresh_token, token, email, name, role, verification, verified, _id))
      }
    },
    async authUser ({ commit }, payload) {
      // делаем запрос к бд с login/password
      commit('setLoading', true)
      try {
        const request = await instance({
          method: 'post',
          url: '/login',
          data: { email: payload.login, password: payload.password }
        })
        const response = await request.data.result
        const { email, name, role, verified, verification, _id } = response.user
        const value = new User(response.refresh_token, response.token, email, name, role, verification, verified, _id)
        cookie.setCookie('user', JSON.stringify(value))
        commit('setLoading', false)
        commit('authUser', value)
        return role
      } catch (e) {
        commit('setLoading', false)
        throw new Error(e)
      }
    },
    async getSchedule ({ commit }) {
      await axios('/data/schedule.json', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(result => {
        result.data.forEach((element, index) => {
          result.data[index].date = new Date(element.date).toLocaleString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' })
        })
        commit('setSchedule', result.data.filter(a => a.room !== '+'))
      })
    },
    logout ({ commit }) {
      return new Promise(resolve => {
        cookie.deleteCookie('user')
        commit('authUser', null)
        resolve()
      })
    }
  },
  getters: {
    user: state => state.user,
    sh: state => state.schedule
  }
}
