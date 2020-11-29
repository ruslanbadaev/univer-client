export default {
  state: {
    directions: [
      { name: 'ИТСС', direction: 'itss' },
      { name: 'ИВТ', direction: 'ivt' }
    ],
    groups: [
      { name: 'ДИ', direction: 'itss', group: 'di' },
      { name: 'ДВ', direction: 'ivt', group: 'dv' }
    ],
    disciplines: [
      { name: 'Название дисциплины для ИТСС', direction: 'itss' },
      { name: 'Название дисциплины для ИВТ', direction: 'ivt' }
    ],
    students: [
      { name: 'Студент ИТСС', theory1: 30, practice1: 20, theory2: 30, practice2: 20, exame: 0, isExame: false, CountRate: 100, rate: 5, direction: 'itss', group: 'di' },
      { name: 'Студент ИВТ', theory1: 30, practice1: 20, theory2: 30, practice2: 20, exame: 0, isExame: false, CountRate: 100, rate: 5, direction: 'ivt', group: 'dv' }
    ],
    _students: []
  },
  mutations: {
    setStudentsByData (state, { direction, group }) {
      state._students = state.students.filter(s => s.direction === direction && s.group === group)
    }
  },
  actions: {
    setStudentsByData ({ commit }, payload) {
      commit('setLoading', true)
      commit('setStudentsByData', payload)
      commit('setLoading', false)
    }
  },
  getters: {
    directions: state => state.directions,
    groups: state => state.groups,
    disciplines: state => state.disciplines,
    students: state => state._students
  }
}
