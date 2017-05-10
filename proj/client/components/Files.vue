<template>
  <Layout>
    <div class="col-md-2 no-padding tags">
      <ul>
        <li :class="{active: currentTag == 'all'}" @click="updateCurrentTag('all')">All</li>
        <li :class="{active: currentTag == 'unclassified'}" @click="updateCurrentTag('unclassified')">Unclassified</li>
        <li :class="{active: currentTag == tag}" v-for="tag in tags" @click="updateCurrentTag(tag)">
          {{tag}}
        </li>
        <li>
          <i class="fa fa-plus"></i> Add new tag
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
        <template v-for="file in files">
          <tr class="row-file">
            <td><a href="{{file.link}}">{{file.name}}</a></td>
            <td>{{file.mail.from.name}}</td>
            <td>{{file.mail.title}}</td>
            <td>{{file.mail.sent}}</td>
          </tr>
          <tr class="row-tags">
            <td colspan="4">
              <span class="label label-primary" v-for="tag in file.tags">{{tag}}</span>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script>
  import Layout from '../views/Layout'
  import { getTags } from '../firebase'
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
      }),
    },
    data () {
      return {
        currentTag: 'all',
        tags: [],
      }
    },
    methods: {
      updateCurrentTag (tag) {
        this.currentTag = tag
      },
    },
    async mounted () {
      this.tags = await getTags();
      this.tags.sort();
    }
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
  .row-file,
  .row-file td {
    border-bottom: none transparent;
    border-top: 1px solid #808080;
  }
  .row-tags, .row-tags td {
    border: none;
  }
  .label+.label {
    margin-left: 10px;
  }
</style>
