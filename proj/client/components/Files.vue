<template>
  <Layout>
    <div class="row">
      <div class="col-md-3 col-sm-2 no-padding tags">
        <ul>
          <li :class="{active: currentTag == 'all'}" @click="!tagStateRemove&&updateCurrentTag('all')">All</li>
          <li :class="{active: currentTag == 'unclassified'}" @click="!tagStateRemove&&updateCurrentTag('unclassified')">Unclassified</li>
          <li :class="{active: currentTag == 'hidden'}" @click="updateCurrentTag('hidden')">Hidden</li>
          <template v-for="tag in tags">
            <li v-if="!tagStateRemove" :class="{active: currentTag == tag.tag}" @click="updateCurrentTag(tag.tag)">
              {{tag.tag}}
            </li>
            <li v-else :class="{active: false}" class="text-danger" @click="_removeTag(tag)">
              {{tag.tag}} <i class="fa fa-minus text-danger"></i>
            </li>
          </template>
          <li class="add-new-tag">
            <button class="btn btn-outline-primary btn-new-mail" @click="onClickNewTag"><i class="fa fa-plus"></i> Add new tag</button>
          </li>
          <li class="add-new-tag">
            <button v-if="tagStateRemove" class="btn btn-outline-danger btn-new-mail" @click="onClickRemoveTag"><i class="fa fa-minus"></i> Done </button>
            <button class="btn btn-outline-danger btn-new-mail" @click="onClickRemoveTag" v-else><i class="fa fa-minus"></i> Remove tags</button>
          </li>
        </ul>
      </div>
      <div class="col-md-9 col-sm-10 files">
        <div class="row">
          <div class="col-6 col-xl-6" v-for="file in filteredFiles">
            <div class="card">
              <div class="card-block">
                <h5 class="card-title">
                  <a :href="file.link" target="_blank">
                    {{file.name}}
                    <small><i class="fa fa-download hover fa-sm"></i></small>
                  </a>
                </h5>
                <div class="card-actions">
                  <button v-if="!isHidden(file)" class="btn btn-link btn-sm btn-hide" @click.prevent.stop="hideFile(file.mail.key, 0, file.fileType)">
                    hide
                  </button>
                  <button class="btn btn-link btn-sm btn-hide" @click.prevent.stop="unhideFile(file.mail.key, 0, file.fileType)" v-else >
                    unhide
                  </button>
                </div>
                <p class="card-text">
                  <i class="fa fa-envelope-o"></i> {{file.mail.title}}<br/>
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
          </div>
        </div>
      </div>
     <NewTag  v-if="showingNewTag" :tags="tags"></NewTag>
    </div>
  </Layout>
</template>

<script>
  import Layout from './Layout'
  import { unhideFile, hideFile, removeTag, removeMailTag } from '../firebase'
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
          const isHidden = this.isHidden(file)
          if (this.currentTag === 'all') {
            return !isHidden
          } else if (this.currentTag === 'unclassified') {
            return !isHidden && (!file.tags || file.tags.length === 0)
          } else if (this.currentTag === 'hidden') {
            return isHidden
          } else if (!file.tags) {
            return false
          }
          for (const tag of Object.values(file.tags)) {
            console.log(this.currentTag)
            console.log('isHidden: ', isHidden)
            return !isHidden && (tag.name === this.currentTag)
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
          .sort((a, b) => a.tag.localeCompare(b.tag)),
      }),
    },
    data () {
      return {
        currentTag: 'all',
        tagStateRemove: false,
      }
    },
    methods: {
      updateCurrentTag (tag) {
        this.currentTag = tag
      },
      async _removeTag (tag) {
        await removeTag(tag)
        const removeTarget = []
        // remove all the file tag from the files
        this.filteredFiles.forEach((file) => {
          for (const tagObj of Object.values(file.tags)) {
            if (tagObj.name === tag.tag) {
              const obj = {}
              obj.mailKey = file.mail.key
              obj.attachmentIdx = 0
              const keys = Object.keys(file.tags)
              obj.tag = { key : keys[0] }
              removeTarget.push(obj)
            }
          }
        })
        removeTarget.forEach((target) => {
          removeMailTag(target.mailKey, target.attachmentIdx, target.tag)
        })
      },
      onClickNewTag () {
        this.showNewTag()
      },
      fDate (date) {
        return moment(date).calendar()
      },
      ignoreClick ()
      {
        return
      },
      onClickRemoveTag () {
        console.log(this.tagStateRemove)
        this.tagStateRemove = !this.tagStateRemove
        this.updateCurrentTag("all")
      },
      ...mapActions([
        'showNewTag',
        'setTags',
      ]),
      fDate (date) {
        return moment(date).calendar()
      },
      isHidden: function (file) {
        if (file.fileType === 'fromFile') {
          return file.fromHide
        } else {
          return file.toHide
        }
      },
      async hideFile (mailKey, idx, fileType) {
        await hideFile(mailKey, idx, fileType)
      },
      async unhideFile (mailKey, idx, fileType) {
        await unhideFile(mailKey, idx, fileType)
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
    height: calc(100vh - 80px);
    border-right: 1px solid lightgray;
  }
  .files {
    overflow-y: scroll;
    height: calc(100vh - 80px);
    padding-bottom: 40px;
  }
  @media (max-width: 640px) {
    .tags {
      height: auto;
    }
    .files {
      height: auto;
    }
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
    border-color: #337ab7;
  }
  .card:hover a {
    color: #337ab7;
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
  .fa-download.hover {
    display: none;
  }
  .card:hover .fa-download.hover {
    display: inline-block;
  }
</style>
