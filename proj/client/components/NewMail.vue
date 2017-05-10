<template>
  <div class="new-mail">
    <div class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style="display: block;">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Mail</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click.prevent.stop="onClickClose">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-md-2" for="to">To</label>
                <div class="col-md-10">
                  <input type="text" id="to" class="form-control" placeholder="To" v-model="to"/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-2" for="title">Title</label>
                <div class="col-md-10">
                  <input type="text" id="title" class="form-control" placeholder="Title" v-model="title"/>
                </div>
              </div>
              <textarea type="text" id="body" class="form-control" placeholder="Type Here" v-model="body"></textarea>
              <input type="file" class="form-control" @change="onFileChange"/>
            </form>
          </div>
          <div class="alert alert-danger alert-dismissable fade show" v-if="alert">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Danger! </strong> {{ alertMessage }}
          </div>
          <div class="modal-footer">
            <button type="button" id="sendButton" class="btn btn-primary" aria-label="Close" data-dismiss="alert" @click.prevent.stop="checkAttached">Send</button>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import firebase, { getMails } from '../firebase'
  export default {
    components: {
    },
    data () {
      return {
        body: '',
        alert: false,
        alertMessage: '',
        attached: false,
        from: '',
        to: '',
        title: '',
        // attachment
      }
    },
    methods: {
      onClickClose () {
        this.closeNewMail ();
      },
      onFileChange (e) {
        this.attached = true;
      },
      checkAttached (e) {
        const bannedWords = ["첨부", "attachment", "attach"]
        if (!this.attached){
          for (let i=0;i<bannedWords.length;i++){
            if (this.body.includes(bannedWords[i])) {          
              this.alert=true;
              this.alertMessage="The word \""+bannedWords[i]+"\" included on your text, but you didn't attached any file."
              console.log("WOrdked")
              break
            }        
          }
        }
      },
      ...mapActions ([
        'closeNewMail',
        'setMails',
      ]),
    },
//     async pushMails () {
//       const mails = await getMails()
//       var newKey = mails.length
//       var newMail = {}
//       newMail["mailId"] = "random"
//       newMail["from"] = 
// /*
//     {
//       "mailid": 12,
//       "from": {
//         "name": "Juho Kim",
//         "address": "juho.kim@kaist.ac.kr"
//       },
//       "to": {
//         "address": "changjej@kaist.ac.kr"
//       },
//       "title": "[DP2] Notice on DP2 presentation",
//       "content": "Blah",
//       "sent": "2017-05-09 19:20:51",
//       "attachments": {
//         0:{
//           "filename": "notice.pdf",
//           "link": "https://firebasestorage.googleapis.com/v0/b/cs374-32b99.appspot.com/o/pintos.pdf?alt=media&token=c9a185e4-d1bd-4f62-ae4b-75bdb52c01d7",
          
//         },
//        1: {
//           "filename": "report.pdf",
//           "link": "https://firebasestorage.googleapis.com/v0/b/cs374-32b99.appspot.com/o/pintos.pdf?alt=media&token=c9a185e4-d1bd-4f62-ae4b-75bdb52c01d7",
          
//         }
//         }
//     },
//     */

//       let mailsRef = firebase.database().ref('/mails/')
//       mailsRef.update({newKey:newMail});

//     },
  }
</script>

<style scoped>
  .modal {
    background-color: rgba(20, 20, 20, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
  }
</style>
