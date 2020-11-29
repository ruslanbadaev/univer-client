import axios from 'axios'
const instance = axios.create({ baseURL: process.env.VUE_APP_SERVER })
/*eslint-disable */
class Lecturer {
  constructor (aDegree, aRank, rank, educations, desciplines, fullName, worksOf, totalWorksOf, photo, intersts, specialty, trainings, _id ) {
    this.aDegree = aDegree
    this.aRank = aRank
    this.rank = rank
    this.educations = educations
    this.desciplines = desciplines
    this.fullName = fullName
    this.worksOf = worksOf
    this.totalWorksOf = totalWorksOf
    this.photo = photo
    this.intersts = intersts
    this.specialty = specialty
    this.trainings = trainings
    this._id = _id
  }
}

export default {
  state: {
    teacher: []
  },
  mutations: {
    setTeacher (state, payload) {
      state.teacher = payload
    }
  },
  actions: {
    async loadTeacher ({ commit }) {
      const arr = []
      commit('setLoading', true)
      await instance('/lecturers')
        .then(data => {
          data.data.docs.forEach(teacher => {
            const { academic_degree, academic_rank, disciplines_taught, education, full_name, length_work_of_speciality, photo, qualification, rank,
            scientific_interests, specialty, total_length_of_service, _id } = teacher
            arr.push(new Lecturer(academic_degree, academic_rank, rank, education, disciplines_taught, full_name, length_work_of_speciality, total_length_of_service, photo, scientific_interests, specialty, qualification, _id))
          })
          commit('setTeacher', arr)
          commit('setLoading', false)
        })
        .catch(e => {
          commit('setLoading', false)
        })
    }
  },
  getters: {
    teacher: state => state.teacher,
    teacherById: state => id => {
      return state.teacher.find(a => a.id === id)
    }
  }
}
