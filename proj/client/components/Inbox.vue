<template>
  <Layout>
    <div class="inbox">
      <div class="center" v-if="loading && mails.length === 0">
        <i class="fa fa-circle-o-notch fa-spin fa-3x"></i>
      </div>
      <div class="center" v-else-if="mails.length === 0">
        <h1>No mails in {{type}}</h1>
      </div>
      <table class="table" v-else>
        <thead>
        <tr>
          <th v-if="type === 'Inbox'">From</th>
          <th v-else-if="type === 'Sent'">To</th>
          <th>Title</th>
          <th></th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="mail in mails" @click="movelink(mail)">
          <td class="author">
            <template v-if="type === 'Inbox'">
              {{mail.from.name}}
            </template>
            <template v-if="type === 'Sent'">
              {{mail.to}}
            </template>
          </td>
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
          <td>
            {{formatDate(mail.sent)}}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script>
  import Layout from '../views/Layout'
  import moment from 'moment'
  import { mapState } from 'vuex'

  export default {
    components: {
      Layout,
    },
    props: ['type'],
    computed: {
      ...mapState({
        loading: 'loading',
        mails (state) {
          return state.mails.filter(function (mail) {
            if (this.type === 'Inbox') {
              return mail.to === state.account.address
            } else if (this.type === 'Sent') {
              return mail.from.address === state.account.address
            }
            return false
          }.bind(this))
        },
      }),
    },
    methods: {
      formatDate (date) {
        return moment(date).calendar()
      },
      movelink: function (mail) {
        this.$router.push(`/${this.type.toLowerCase()}/${mail.key}`)
      },
    },
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
