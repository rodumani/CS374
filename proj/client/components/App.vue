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
        'setLoading',
      ]),
    },
    mounted () {
      getMails((mails) => {
        this.setMails(mails.reverse())
        this.setLoading(false)
      })
    },
  }
</script>

<style>
::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}
</style>
