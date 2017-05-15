<template>
  <div class="new-tag">
    <div class="modal fade show" role="dialog" id="myModal" tabindex="-1" style="display: block; padding-left: 0px;" @click.self="onClickClose">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">New Tag</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click.prevent.stop="onClickClose">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <div class="col-md-10">
                  <input type="text" id="new-tag" class="form-control" placeholder="New tag" maxlength="20" v-model="newTagName"/>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="onClickAdd">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { addTags } from '../firebase'
  import { getTags } from '../firebase'

  export default {
    components: {
    },
    data() {
      return {
          newTagName: ""
      }
    },
    methods: {
      async updateNewTags() {
        var tags = await getTags();
        tags.sort()
        console.log(tags);
        this.setTags(tags)
      },
      async onClickAdd() {
        await addTags(this.newTagName)
        this.closeNewTag()
        await this.updateNewTags()
      },
      onClickClose () {
        this.closeNewTag ()
      },
      ...mapActions ([
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
