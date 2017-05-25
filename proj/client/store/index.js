import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const account = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : null

const store = {
  state: {
    showNewMail: false,
    newAddress: '',
    showingNewTag: false,
    loading: true,
    mails: [],
    tags: [],
    account,
  },
  mutations: {
    showNewMail (state, newAddress) {
      state.showNewMail = true
      state.newAddress = newAddress
    },
    closeNewMail (state) {
      state.showNewMail = false
      state.newAddress = ''
    },
    showNewTag (state) {
      state.showingNewTag = true
    },
    closeNewTag (state) {
      state.showingNewTag = false
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
    showNewMail ({ commit }, newAddress) {
      commit('showNewMail', newAddress)
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
