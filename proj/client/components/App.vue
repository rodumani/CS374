<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import firebase from '../firebase'
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'setMails',
      ]),
    },
    mounted () {
      firebase.database().ref('/mails/').once('value').then((snapshot) => {
        this.setMails(snapshot.val())
      })
    },
  }
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
}
</style>
