<template>
  <Layout>
    <div class="inbox">
      <div class="center">
        <i class="fa fa-circle-o-notch fa-spin fa-3x" v-show="mails.length === 0"></i>
      </div>
      <table class="table">
        <tr v-for="mail in mails">
          <td class="author">{{mail.from.name}}</td>
          <td class="title">{{mail.title}}</td>
          <td class="attachment">
            <i class="fa fa-paperclip" v-show="mail.attachments && mail.attachments.length > 0"></i>
          </td>
        </tr>
      </table>
    </div>
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
  .inbox {
    position: relative;
    height: calc(100vh - 74px);
  }
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
