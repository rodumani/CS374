<template>
  <div class="new-mail">
    <div class="modal fade in" role="dialog" id="myModal" tabindex="-1" style="display: block; padding-left: 0px;" @click.self="onClickClose">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click.prevent.stop="onClickClose">
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">New Mail</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-md-2" for="to">To</label>
                <div class="col-md-10">
                  <input type="text" id="to" class="form-control" placeholder="to" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-2" for="title">Title</label>
                <div class="col-md-10">
                  <input type="text" id="title" class="form-control" placeholder="title" />
                </div>
              </div>
              <textarea type="text" class="form-control" placeholder="Type here..."></textarea>
              <input type="file" class="form-control" />
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    components: {
    },
    methods: {
      onClickClose () {
        this.closeNewMail ();
      },
      ...mapActions ([
        'closeNewMail',
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
