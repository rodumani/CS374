import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
    showNewMail: false,
    showNewTag: false,
    mails: [],
    tags: [],
    account: 'changjej@kaist.ac.kr',
  },
  mutations: {
    showNewMail (state) {
      state.showNewMail = true
    },
    closeNewMail (state) {
      state.showNewMail = false
    },
    showNewTag (state) {
      state.showNewTag = true
    },
    closeNewTag (state) {
      state.showNewTag = false
    },
    setMails (state, mails) {
      state.mails = mails
    },
    setTags (state, tags) {
      state.tags = tags
    },
    changeAccount (state, account) {
      state.account = account
    },
  },
  actions: {
    showNewMail ({ commit }) {
      commit('showNewMail')
    },
    closeNewMail ({ commit }) {
      commit('closeNewMail')
    },
    showNewTag ({ commit }) {
      commit('showNewTag')
    },
    closeNewTag ({ commit }) {
      commit('closeNewTag')
    },
    setMails ({ commit }, mails) {
      commit('setMails', mails)
    },
    setTags ({ commit }, tags) {
      commit('setTags', tags)
    },
    changeAccount ({ commit }, account) {
      commit('changeAccount', account)
    },
  },
}

export default new Vuex.Store(store)
