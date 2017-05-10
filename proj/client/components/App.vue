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
    async mounted () {
      const mails = await getMails()
      this.setMails(mails)
    },
  }
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
}
</style>
