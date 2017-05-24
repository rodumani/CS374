<template>
  <Layout>
    <div class="row">
      <div class="col-md-3 col-sm-2 no-padding tags">
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
      <div class="col-md-9 col-sm-10 files">
        <div class="row">
          <div class="col-6 col-xl-6" v-for="file in filteredFiles" v-if="typeCheck(file)">
            <a :href="file.link" target="_blank">
              <div class="card">
                <div class="card-block">
                  <h5 class="card-title">
                    {{file.name}}
                  </h5>
                  <div class="card-actions">
                    <button class="btn btn-link btn-sm btn-hide" @click.prevent.stop="hideFile(file.mail.key, 0, file.fileType)">
                      hide
                    </button>
                  </div>
                  <p class="card-text">{{file.mail.title}}</p>
                  <p class="card-text">
                    <small>
                      {{file.mail.from.name}}<br/>
                      {{fDate(file.mail.sent)}}
                    </small>
                  </p>
                  <div class="tags-row" @click.prevent="ignoreClick">
                    <files-tag-row :file="file" :tags="tags" :mailKey="file.mail.key" :idx="0"></files-tag-row>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
     <NewTag  v-if="showingNewTag" :tags="tags"></NewTag>
    </div>
  </Layout>
</template>

<script>
  import Layout from '../views/Layout'
  import { hideFile } from '../firebase'
  import { mapState, mapActions } from 'vuex'
  import FilesTagRow from './FilesTagRow'
  import NewTag from 'components/NewTag'
  import moment from 'moment'

  export default {
    components: {
      Layout,
      FilesTagRow,
      NewTag,
    },
    computed: {
      filteredFiles () {
        return this.files.filter((file) => {
          if (this.currentTag === 'all') { return true }

          if (this.currentTag === 'unclassified') { return !file.tags || file.tags.length === 0 }

          if (!file.tags) {
            return false
          }
          for (const tag of Object.values(file.tags)) {
            if (tag.name === this.currentTag) { return true }
          }

          return false
        })
      },
      ...mapState({
        files: state => {
          const files = []
          state.mails
            .filter((mail) => mail.to === state.account.address || mail.from.address === state.account.address)
            .forEach((mail) => {
              if (!mail.attachments) return
              for (const attachment of mail.attachments) {
                if (mail.to === state.account.address) {
                  files.push({
                    name: attachment.filename,
                    link: attachment.link,
                    toHide: attachment.toHide,
                    fromHide: attachment.fromHide,
                    tags: attachment.tags,
                    mail: mail,
                    fileType: 'toFile',
                  })
                } else {
                  files.push({
                    name: attachment.filename,
                    link: attachment.link,
                    toHide: attachment.toHide,
                    fromHide: attachment.fromHide,
                    tags: attachment.tags,
                    mail: mail,
                    fileType: 'fromFile',
                  })
                }
              }
            })
          return files
        },
        showingNewTag: state => state.showingNewTag,
        tags: state => state.tags
          .filter((t) => t.account === state.account.address)
          .map(t => t.tag)
          .sort((a, b) => a.localeCompare(b)),
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
      onClickNewTag () {
        this.showNewTag()
      },
      fDate (date) {
        return moment(date).calendar()
      },
      ignoreClick () {
        return
      },
      ...mapActions([
        'showNewTag',
        'setTags',
      ]),
      fDate (date) {
        return moment(date).calendar()
      },
      typeCheck: function (file) {
        if (file.fileType === 'fromFile') {
          return !file.fromHide
        } else {
          return !file.toHide
        }
      },
      async hideFile (mailKey, idx, fileType) {
        await hideFile(mailKey, idx, fileType)
      },
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
    padding-bottom: 40px;
  }
  li {
    list-style-type: none;
    width: 100%;
    min-height: 35px;
    line-height: 25px;
    cursor: pointer;
    padding: 7px 5px 7px 10px;
    word-break: break-all;
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

  .files .row {
    margin-top: -20px;
  }
  .card {
    margin-top: 20px;
    transition: border-color 0.3s, color 0.3s;
  }
  .card:hover {
    --card-color: #337ab7;
    border-color: var(--card-color);
    color: var(--card-color);
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #292b2c;
  }
  .card-title {
    word-break: break-all;
    max-width: calc(100% - 45px);
    min-height: 70px;
  }

  .card-actions {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .btn {
    cursor: pointer;
  }
  .btn-hide {
    display: none;
    text-decoration: none;
    margin-top: 7px;
    color: gray;
  }
  .card:hover .btn-hide {
    display: block;
  }
</style>
