import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const account = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : {
  address: 'changjej@kaist.ac.kr',
  name: 'Changje Jeong',
};

const store = {
  state: {
    showNewMail: false,
    showNewTag: false,
    loading: true,
    mails: [],
    tags: [],
    account,
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

      localStorage.setItem('account', JSON.stringify(account))
    },
    setLoading (state, loading) {
      state.loading = loading
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
    setLoading ({ commit }, loading) {
      commit('setLoading', loading)
    },
  },
}

export default new Vuex.Store(store)
