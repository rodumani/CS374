<template>
  <Layout>
    <div class="inbox">
      <div class="center">
        <i class="fa fa-circle-o-notch fa-spin fa-3x" v-show="mails.length === 0"></i>
      </div>
      <table class="table">
        <thead>
        <tr>
          <th>From</th>
          <th>Title</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="mail in mails" @click="movelink(mail)">
          <td class="author">{{mail.from.name}}</td>
          <td class="title">
            <template v-if="mail.title.length > 40">
              {{mail.title.substring(0, 40)}}...
            </template>
            <template v-else>
              {{mail.title}}
            </template>
          </td>
          <td class="attachment">
            <i class="fa fa-paperclip" v-show="mail.attachments && mail.attachments.length > 0"></i>
          </td>
        </tr>
        </tbody>
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
        mails: (state) => {
          return state.mails.filter((mail) => {
            return mail.to === state.account
          })
        }
      }),
    },
    methods: {
      movelink: function(mail) {
        this.$router.push(`/inbox/${mail.key}`)
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
  tbody tr:hover {
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
    word-break: break-all;
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
