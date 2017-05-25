import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const account = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : null

const initialMail = function () {
  return {
    attachments: [
      {
        filename: '18118488_1217847961661143_7078247831526052389_n.jpg',
        fromHide: false,
        link: 'https://firebasestorage.googleapis.com/v0/b/cs374-32b99.appspot.com/o/1495623685684?alt=media&token=33e57b1e-ef2a-4f29-b651-1427fd4983d3',
        tags: {
          // '-Kku8WEAxX-jIFfEsU9S' : {
          //   'name' : 'Fun'
          // }
        },
        toHide: false,
      },
    ],
    content: '하이',
    from: {
      address: 'no-reply@nanomario.com',
      name: 'Team NanoMario',
    },
    sent: '2017-05-01T11:01:25.684Z',
    title: 'Welcome to NanoMario Mail',
    to: account.address,
  }
}

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
