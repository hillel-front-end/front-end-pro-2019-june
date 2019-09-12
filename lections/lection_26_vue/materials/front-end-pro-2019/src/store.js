import Vue from 'vue'
import Vuex from 'vuex'
const ulr = ''
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Valera',
    lastName: 'Ternavskiy',
    persons: []
  },
  getters: {
    "GET_FULL_NAME"(state) {
      return `${state.name} ${state.lastName}`
    },
    getName(state) {
      return state.name;
    },
    getPersonsList(state)  {
      return state.persons;
    }
  }, 
  mutations: {
    setPersons(state, data) {
      state.persons = data.slice();
    }
  },
  actions: {
    asycnGetProducts ({ commit }) {
      return window.fetch('http://localhost:3000/person')
          .then(resp => resp.json())
          .then(resp =>  commit('setPersons', resp));

    }
  }
})
