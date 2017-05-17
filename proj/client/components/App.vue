<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import firebase, { getMails } from '../firebase'
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'setMails',
      ]),
    },
    mounted () {
      getMails((mails) => {
        this.setMails(mails.reverse())
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
