<template>
	<Layout>
		<div class="showmail" v-if="mailitem">
			<div id="title"> {{mailitem.title}} </div>
      <hr align="left">
      <div class="mail-info">
        <div class="row" id="from">
          <span class="col-md-1"><b>From</b></span><span class="col-md-7 newMail" @click="onClickNewMail(mailitem.from.address)">{{mailitem.from.name}} <{{mailitem.from.address}}></span>
        </div>
        <div class="row" id="to">
          <span class="col-md-1"><b>To</b></span><span class="col-md-7 newMail" @click="onClickNewMail(mailitem.to)">{{mailitem.to}}</span>
        </div>
        <div class="row" id="sent">
          <span class="col-md-1"><b>Date</b></span><span class="col-md-7">{{time}}</span>
        </div>
        <hr align="left">
        <div id="content"> {{mailitem.content}} </div>
      </div>
      <hr align="left">
			<div id="attach" v-show="mailitem.attachments && mailitem.attachments.length > 0">
        <div><b>Attachments</b></div>
				<div class="filelist" v-for="file in mailitem.attachments">
          <a :href="file.link" download>
            <button class="btn btn-outline-primary files">{{file.filename}}</button>
          </a>
          <files-tag-row :file="file" :tags="tags" :mailKey="mailitem.key" :idx="0"></files-tag-row>
        </div>
			</div>
		</div>
	</Layout>
</template>

<script>
	import Layout from './Layout'
	import { mapState, mapActions } from 'vuex'
  import moment from 'moment'
  import FilesTagRow from './FilesTagRow'
  import { removeMailTag } from '../firebase'

  export default {
    components: {
      Layout,
      FilesTagRow,
    },
    computed: {
      time () {
        return moment(this.mailitem.sent).format('YYYY-MM-DD A h:mm:ss')
      },
      mailitem () {
        const key = this.$route.params.mailid
        for (const m of this.mails) {
          if (m.key === key) {
            return m
          }
        }
      },
      ...mapState({
        mails: 'mails',
        tags: state => state.tags.sort()
      }),
    },
    methods: {
      onClickNewMail (newAddress) {
        this.showNewMail(newAddress)
      },
      ...mapActions([
        'showNewMail',
      ]),
      downfile: function (file) {
        window.open(file.link, '_blank')
      },
      async removeMailTag (tag) {
        const key = this.$route.params.mailid
        await removeMailTag(key, '0', tag) // cannot remove yet. tag don't have its keys
      },
    }
  }
</script>

<style scoped>
  .mail-info span {
    padding: 0;
  }
  .mail-info div {
    margin-left: 10px;
  }
  hr {
    border: 1px solid lightgray;
    width: 100%;
  }
  .showmail {
    margin-left: 10px;
    width: 90%;
  }
  #title {
    font-size: 20px;
  }
  #to {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  #content {
    font-size: 17px;
    margin-top: 20px;
    white-space: pre-line;
    word-break: break-all;
    width: 100%;
  }
  .filelist {
    display: inline-block;
  }
  .files {
    margin-top: 10px;
    margin-right: 10px;
  }
  .btn {
    cursor: pointer;
  }
  .attachmentTags {
    margin: 3px;

    display: inline-block;
    padding: 0 5px 0 0;
  }
  .row-tags {
    padding: 0;
  }
  .newMail {
    cursor: pointer;
  }
</style>
