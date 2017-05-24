<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import firebase, { getMails, getTags } from '../firebase'
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'setMails',
        'setLoading',
        'setTags',
      ]),
    },
    mounted () {
      getMails((mails) => {
        this.setMails(mails.reverse())
        this.setLoading(false)
      })
      getTags((tags) => {
        this.setTags(tags.sort())
      })
    },
  }
</script>

<style>
::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}
  .btn {
    cursor: pointer;
  }
</style>
