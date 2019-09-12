import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const baseServerUrl = 'http://localhost:3001/';

export default new Vuex.Store({
  state: {
    contacts: []
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    asyncGetContacts(context, url) {
      fetch(url)
        .then(data => data.json())
        .then(data => context.commit('changeName', data[0].name));

    }
  }
})
