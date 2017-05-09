import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
    showNewMail: false,
    mails: [],
  },
  mutations: {
    showNewMail (state) {
      state.showNewMail = true
    },
    closeNewMail (state) {
      state.showNewMail = false
    },
    setMails (state, mails) {
      state.mails = mails
    },
  },
  actions: {
    showNewMail ({ commit }) {
      commit('showNewMail')
    },
    closeNewMail ({ commit }) {
      commit('closeNewMail')
    },
    setMails ({ commit }, mails) {
      commit('setMails', mails)
    },
  },
}

export default new Vuex.Store(store)
