<template>
  <Layout>
    <table class="table">
      <tr v-for="mail in mails">
        <td class="author">{{mail.from.name}}</td>
        <td class="title">{{mail.title}}</td>
        <td class="attachment" v-if="mail.attachments.length > 0">
          <i class="fa fa-paperclip"></i>
        </td>
      </tr>
    </table>
  </Layout>
</template>

<script>
  import Layout from '../views/Layout'

  export default {
    components: {
      Layout,
    },
    data () {
      return {
        mails: [
          {
            from: {
              name: 'Juho Kim',
              address: 'juho.kim@kaist.ac.kr',
            },
            to: {
              address: 'changjej@kaist.ac.kr',
            },
            title: "[DP2] Notice on DP2 presentation",
            content: "Blah",
            sent: '2017-05-09 19:20:51',
            attachments: [
              {filename: 'notice.pdf', link: 'some address',},
            ],
          },
          {
            from: {
              name: 'Juho Kim',
              address: 'juho.kim@kaist.ac.kr',
            },
            to: {
              address: 'changjej@kaist.ac.kr',
            },
            title: "[DP2] Notice on DP2 presentation",
            content: "Blah",
            sent: '2017-05-09 19:20:51',
            attachments: [
              {filename: 'notice.pdf', link: 'some address',},
            ],
          },
        ]
      };
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
</style>
