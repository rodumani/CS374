<template>
  <Layout>
    <div class="row">
      <div class="col-md-2 no-padding tags">
        <ul>
          <li :class="{active: currentTag == 'all'}" @click="updateCurrentTag('all')">All</li>
          <li :class="{active: currentTag == 'unclassified'}" @click="updateCurrentTag('unclassified')">Unclassified</li>
          <li :class="{active: currentTag == tag}" v-for="tag in tags" @click="updateCurrentTag(tag)">
            {{tag}}
          </li>
          <li>
          <button class="btn btn-primary btn-new-mail" @click="onClickNewTag"><i class="fa fa-plus"></i> Add new tag</button>
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
          <template v-for="file in filteredFiles">
            <tr class="row-file">
              <td><a :href=file.link>{{file.name}}</a></td>
              <td>{{file.mail.from.name}}</td>
              <td>{{file.mail.title}}</td>
              <td>{{file.mail.sent}}</td>
            </tr>
            <tr class="row-tags">
              <td colspan="4">
                <span class="badge badge-default" v-for="tag in file.tags">{{tag}}</span>
              </td>
            </tr>
          </template>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
</template>

<script>
  import Layout from '../views/Layout'
  import { getTags } from '../firebase'
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    components: {
      Layout,
    },
    computed: {
      filteredFiles() {
        return this.files.filter((file)=>{
          if (this.currentTag === "all")
              return true

          if (this.currentTag === "unclassified")
              return file.tags.length === 0

          for (const tag of file.tags) {
              if (tag === this.currentTag)
                  return true
          }

          return false;
        });
      },
      ...mapState({
        files: state => {
          const files = []
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
        tags: state => state.tags
      }),
    },
    data () {
      return {
        currentTag: 'all',
      }
    },
    methods: {
      updateCurrentTag (tag) {
        this.currentTag = tag
      },
      onClickNewTag() {
          this.showNewTag()
      },
      ...mapActions([
        'showNewTag',
        'setTags',
      ]),
    },
    async mounted () {
      var tags = await getTags();
      tags.sort();
      this.setTags(tags)
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
  .row-file td {
    border-top: none;
  }
  .row-file {
    border-top: 1px solid #eee;
  }
  .row-tags,
  .row-tags td {
    border-top: none;
  }
  .badge+.badge {
    margin-left: 10px;
  }
</style>
