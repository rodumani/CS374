<template>
	<Layout>
		<div v-if="mailitem">
			<div> 제목: {{mailitem.title}} </div>
			<div> 보낸사람: {{mailitem.from.name}} [{{mailitem.from.address}}] </div>
			<div> 받는사람: {{mailitem.to.address}} </div>
			<div> 본문: {{mailitem.content}} </div>
			<div v-show="mailitem.attachments && mailitem.attachments.length > 0"> 첨부파일:
				<div v-for="file in mailitem.attachments">
					<a v-bind:href="file.link" target="_blank"> {{file.filename}} </a>
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
  }
</script>