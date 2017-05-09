<template>
  <Layout>
    <div class="col-md-2 no-padding tags">
      <ul>
        <li class="active">All</li>
        <li>Unclassified</li>
        <li v-for="tag in tags">
          {{tag}}
        </li>
      </ul>
    </div>
    <div class="col-md-10 no-padding files">
      <table class="table">
        <thead>
        <tr>
          <th>File</th>
          <th>Sender</th>
          <th>Title</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="file in files">
          <td>{{file.name}}</td>
          <td>{{file.mail.from.name}}</td>
          <td>{{file.mail.title}}</td>
          <td>{{file.mail.sent}}</td>
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
        files: state => {
          const files = []
          console.log (state.mails)
          state.mails.forEach((mail) => {
            if (!mail.attachments) return
            for (const attachment of mail.attachments) {
              files.push({
                name: attachment.filename,
                link: attachment.link,
                tags: attachment.tags,
                mail: mail,
              })
            }
          })
          return files
        },
        tags: state => {
          const tags = new Set();
          state.mails.forEach((mail) => {
            if (!mail.attachments) return
            for (const attachment of mail.attachments) {
              if (!attachment.tags) continue
              for (const tag of attachment.tags) {
                tags.add(tag)
              }
            }
          })
          return Array.from(tags)
        }
      }),
    },
  }
</script>

<style scoped>
  .no-padding {
    padding: 0;
  }
  .tags {
    overflow-y: scroll;
    height: calc(100vh - 74px);
    border-right: 1px solid lightgray;
  }
  .files {
    overflow-y: scroll;
    height: calc(100vh - 74px);
  }
  li {
    list-style-type: none;
    width: 100%;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    padding-left: 10px;
  }
  li a {
    text-decoration: none;
    color: black;
  }
  li:hover {
    background-color: #eee;
  }
  li.active {
    border-right: 5px solid #337ab7;
    background-color: #eee;
  }
  ul {
    width: 100%;
    padding: 0;
  }
</style>
