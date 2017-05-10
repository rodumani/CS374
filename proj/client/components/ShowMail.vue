<template>
	<Layout>
		<div v-if="mailitem">
			<div class="showmail" id="title"> {{mailitem.title}} </div>
      <hr align="left">
			<div class="row showmail" id="from">
        <span class="col-md-1"><b>From</b></span><span class="col-md-7">{{mailitem.from.name}} <{{mailitem.from.address}}></span>
      </div>
			<div class="row showmail" id="to">
        <span class="col-md-1"><b>To</b></span><span class="col-md-7">{{mailitem.to.address}}</span>
      </div>
      <div class="row showmail" id="sent">
        <span class="col-md-1"><b>Date</b></span><span class="col-md-7">{{mailitem.sent}}</span>
      </div>
      <hr align="left">
			<div class="showmail" id="content"> {{mailitem.content}} </div>
      <hr align="left">
			<div class="showmail" id="attach" v-show="mailitem.attachments && mailitem.attachments.length > 0">
        <div><b>Attachments</b></div>
				<div class="filelist" v-for="file in mailitem.attachments">
          <button type="button" class="btn btn-outline-primary files" @click="downfile(file)">{{file.filename}}</button>
				</div>
			</div>
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
        mails: 'mails',
      }),
      mailitem () {
      	const answerid = this.$route.params.mailid
        for (const m of this.mails) {
          if (m.mailid == answerid) {
          	return m
          }
        }
      },
    },
    methods: {
      downfile: function(file){
        window.open(file.link, '_blank');
      }
    }
  }
</script>

<style scoped>
  span {
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
</style>