import axios from 'axios'
// const server = axios.create({ baseURL: process.env.VUE_APP_SERVER })

const loadChair = async (chair) => {
  try {
    const req = await axios.get(`/data/chair/parsed_${chair}.json`)
    const resp = await req.data
    return resp
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  state: {
    itss: [],
    ivt: [],
    dsr: [],
    gse: []
  },
  mutations: {
    setChair (state, { chair, data }) {
      state[chair] = data
    }
  },
  actions: {
    loadChairAll ({ commit }) {
      loadChair('itss').then(resp => commit('setChair', { chair: 'itss', data: resp }))
      loadChair('ivt').then(resp => commit('setChair', { chair: 'ivt', data: resp }))
      loadChair('gse').then(resp => commit('setChair', { chair: 'gse', data: resp }))
      loadChair('dsr').then(resp => commit('setChair', { chair: 'dsr', data: resp }))
    }
  },
  getters: {
    itss: state => state.itss,
    ivt: state => state.ivt,
    dsr: state => state.dsr,
    gse: state => state.gse
  }
}
