<template>
	<Layout>
		<div v-if="mailitem">
			<div class="showmail" id="title"> {{mailitem.title}} </div>
      <hr align="left">
      <div class="mail-info">
        <div class="row showmail" id="from">
          <span class="col-md-1"><b>From</b></span><span class="col-md-7">{{mailitem.from.name}} <{{mailitem.from.address}}></span>
        </div>
        <div class="row showmail" id="to">
          <span class="col-md-1"><b>To</b></span><span class="col-md-7">{{mailitem.to}}</span>
        </div>
        <div class="row showmail" id="sent">
          <span class="col-md-1"><b>Date</b></span><span class="col-md-7">{{time}}</span>
        </div>
        <hr align="left">
        <div class="showmail" id="content"> {{mailitem.content}} </div>
      </div>
      <hr align="left">
			<div class="showmail" id="attach" v-show="mailitem.attachments && mailitem.attachments.length > 0">
        <div><b>Attachments</b></div>
				<div class="filelist" v-for="file in mailitem.attachments">
          <button class="btn btn-outline-primary files" @click="downfile(file)">{{file.filename}}</button>
				  <!--<div v-show="mailitem.attachments[0].tags">-->
            <!--<div class="attachmentTags" v-for="tag in mailitem.attachments[0].tags">-->
              <!--<el-tag :closable="true" @close="removeTag(tag)" color="#999999"> {{tag.name}}</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <files-tag-row :file="file" :tags="tags" :mailKey="mailitem.key" :idx="0"></files-tag-row>
        </div>
			</div>
		</div>
	</Layout>
</template>

<script>
	import Layout from '../views/Layout'
	import { mapState } from 'vuex'
import moment from 'moment'
import { removeTag } from '../firebase'
  import FilesTagRow from './FilesTagRow'

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
      tags: state => state.tags
        .filter((t) => t.account === state.account.address)
        .map(t => t.tag)
        .sort((a, b) => a.localeCompare(b)),
    }),
  },
  methods: {
    downfile: function (file) {
      window.open(file.link, '_blank')
    },
    async removeTag (tag) {
      const key = this.$route.params.mailid
      await removeTag(key, '0', tag) // cannot remove yet. tag don't have its keys
    },
  },
}
</script>

<style scoped>
  .mail-info span {
    padding: 0;
  }
  hr {
    border-color: lightgray;
    border-width: 2px;
    width: 75%;
  }
  .showmail {
    margin-left: 10px;
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
</style>
