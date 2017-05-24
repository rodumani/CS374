<template>
  <div class="new-mail">
    <div class="modal fade show" tabindex="-1" role="dialog" style="display: block;" @click.self="onClickClose" @keydown.esc="onClickClose">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Mail</h5>
            <button type="button" class="close" @click.prevent.stop="onClickClose">
              <span>×</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="to">To</label> <span v-show="errors.has('to')" class="pull-right is-danger">The email address is invaild. Please enter a valid address.</span>
                <input type="email" ref="inputTo" id="to" name="to" :class="['form-control', {'has-error': errors.has('to')}]" placeholder="To" v-model="to" v-validate="'required|email'" autofocus/>
              </div>
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control" placeholder="Title" v-model="title" />
              </div>
              <div class="form-group">
                <textarea type="text" id="body" class="form-control" placeholder="다음과 같이 적어보세요) 첨부된 파일을 확인해 주세요" v-model="body"></textarea>
              </div>
              <div class="form-group">
                <input type="file" class="form-control" @change="onFileChange"/>
              </div>
            </form>
          </div>
          <div class="alert alert-warning" v-if="alert">
            <h5 class="alert-heading">Warning! No file is attached</h5>
            {{ alertMessage }}
          </div>
          <div class="modal-footer">
            <button type="button" id="sendButton"
                    :class="[ 'btn', { 'btn-primary': !errors.any(), 'btn-danger': errors.any() }]"
                    :disabled="errors.any()"
                    @click.prevent.stop="onClickSend">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import firebase, { pushMail } from '../firebase'
  export default {
    components: {
    },
    data () {
      return {
        body: '',
        alert: false,
        alertMessage: '',
        to: '',
        title: '',
        file: null,
      }
    },
    mounted () {
      this.$refs.inputTo.select()
    },
    computed: {
      ...mapState({
        account: 'account',
      }),
    },
    methods: {
      onClickClose () {
        this.closeNewMail()
      },
      onFileChange (e) {
        this.file = e.target.files[0]
      },
      async onClickSend () {
        // Check Attachment
        const bannedWords = ['첨부', 'attachment', 'attach']
        if (!this.file) {
          for (let i = 0; i < bannedWords.length; i++) {
            if (this.body.includes(bannedWords[i])) {
              this.alert = true
              this.alertMessage = 'The word "' + bannedWords[i] + "\" included on your text, but you didn't attached any file."
              return
            }
          }
        }
        this.closeNewMail()

        await pushMail(this.body, this.account, this.to, this.title, this.file)

        this.$message({
          message: 'Your mail has been sent',
          type: 'success',
          duration: 5 * 1000,
        })
      },
      ...mapActions([
        'closeNewMail',
        'setMails',
      ]),
    },

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
    overflow-y: scroll;
  }
  textarea {
    height: 200px;
    overflow-y: scroll;
  }

  input.has-error {
    border-color: red;
  }
  .is-danger {
    color: red;
  }
  .pull-right {
    float: right;
  }
</style>
