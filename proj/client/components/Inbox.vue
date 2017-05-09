<template>
  <Layout>
    <table class="table">
      <tr v-for="mail in mails" @click="movelink">
        <td class="author">{{mail.from.name}}</td>
        <td class="title">{{mail.title}}</td>
        <td class="attachment">
          <i class="fa fa-paperclip" v-show="mail.attachments && mail.attachments.length > 0"></i>
        </td>
      </tr>
    </table>
  </Layout>
</template>

<script>
  import Layout from '../views/Layout'
  import { mapState } from 'vuex'

  export default {
    components: {
      Layout,
    },
    computed: {
      ...mapState({
        mails: 'mails',
      }),
    },
    methods: {
      movelink: function(){
        
        location.replace("/showmail/");
      }

    }
  }
</script>

<style scoped>
  tr {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    cursor: pointer;
  }
  tr:hover {
    background-color: #eeeeee;
  }
  td {
    padding: 7px 10px;
  }
  table {
    border-collapse: collapse;
  }

  .author {
    width: 20%;
    min-width: 150px;
  }
  .title {

  }
  .attachment {
    width: 20px;
  }
</style>
