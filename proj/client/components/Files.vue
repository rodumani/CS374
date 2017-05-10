<template>
  <Layout>
    <div class="row">
      <div class="col-md-3 no-padding tags">
        <ul>
          <li :class="{active: currentTag == 'all'}" @click="updateCurrentTag('all')">All</li>
          <li :class="{active: currentTag == 'unclassified'}" @click="updateCurrentTag('unclassified')">Unclassified</li>
          <li :class="{active: currentTag == tag}" v-for="tag in tags" @click="updateCurrentTag(tag)">
            {{tag}}
          </li>
          <li class="add-new-tag">
          <button class="btn btn-outline-primary btn-new-mail" @click="onClickNewTag"><i class="fa fa-plus"></i> Add new tag</button>
          </li>
        </ul>
      </div>
      <div class="col-md-9 no-padding files">
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
          <template v-for="(file, index) in filteredFiles">
            <tr class="row-file">
              <td><a :href=file.link target="_blank">{{file.name}}</a></td>
              <td>{{file.mail.from.name}}</td>
              <td>{{file.mail.title}}</td>
              <td>{{file.mail.sent}}</td>
            </tr>
            <files-tag-row :file="file" :tags="tags" :mailKey="file.mail.key" :idx="index"></files-tag-row>
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
  import { mapState, mapActions } from 'vuex'
  import FilesTagRow from './FilesTagRow'

  export default {
    components: {
      Layout,
      FilesTagRow,
    },
    computed: {
      filteredFiles () {
        return this.files.filter((file)=>{
          if (this.currentTag === "all")
              return true

          if (this.currentTag === "unclassified")
              return !file.tags || file.tags.length === 0

          for (const tag of Object.values(file.tags)) {
              if (tag
                  .name === this.currentTag)
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
  li.add-new-tag:hover {
    background-color: inherit;
  }
  li.add-new-tag {
    cursor: default;
    margin-top: 10px;
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
