<template>
  <div class="new-tag">
    <div class="modal fade show" role="dialog" id="myModal" tabindex="-1" style="display: block; padding-left: 0px;" @click.self="onClickClose" @keydown.esc="onClickClose">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">New Tag</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click.prevent.stop="onClickClose">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <input type="text" ref="inputNewTag" class="form-control" placeholder="New tag (Max 20 characters)" maxlength="20" v-model="newTagName" @keydown.enter="onClickAdd" autofocus/>
              </div>
          </div>
          <div class="alert alert-warning" v-if="alert">
            <h5 class="alert-heading">Oops, Try it AGAIN!</h5>
            {{ alertMessage }}
          </div>
          <div class="modal-footer">
            <button type="button" id="newTag" class="btn btn-primary" @click="onClickAdd" :disabled="(newTagName.length === 0) || loading">
              <template v-if="loading"><i class="fa fa-spin fa-spinner"></i></template>
              <template v-else>Add</template>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import { addTags } from '../firebase'

  export default {
    props: ['tags'],
    components: {
    },
    computed: {
      ...mapState({
        account: 'account',
      }),
    },
    data () {
      return {
        alert: false,
        alertMessage: '',
        newTagName: '',
        loading: false,
      }
    },
    mounted () {
      this.$refs.inputNewTag.select()
    },
    methods: {
      async onClickAdd () {
        var tagAlready = this.tags.filter((item)=> item.tag == this.newTagName)
        if (tagAlready.length > 0) {
          this.alert = true
          this.alertMessage = 'The tag "' + this.newTagName + '" already exists!'
        } else {
          this.loading = true
          await addTags(this.account.address, this.newTagName)
          this.closeNewTag()
        }
      },
      onClickClose () {
        this.closeNewTag()
      },
      ...mapActions([
        'closeNewTag',
        'setTags',
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
  }
</style>
