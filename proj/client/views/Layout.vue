<template>
  <div class="page container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-3 col-xs-12">
        <Sidebar></Sidebar>
      </div>
      <div class="col-md-9 col-sm-9 col-xs-12">
        <div class="row">
          <div class="col-md-8 search">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search" />
              <span class="input-group-btn">
              <button class="btn btn-secondary" type="button"><i class="fa fa-search"></i></button>
            </span>
            </div>
          </div>
          <div class="col-md-4 account">
            <span @click="onClickAccount">{{account}}</span>
          </div>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
      <NewMail v-if="showNewMail"></NewMail>
      <NewTag  v-if="showNewTag"></NewTag>
    </div>
  </div>
</template>

<script>
import Sidebar from 'components/Sidebar'
import NewMail from 'components/NewMail'
import NewTag from 'components/NewTag'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Sidebar,
    NewMail,
    NewTag,
  },
  computed: {
    ...mapState({
      account: 'account',
      showNewMail: state => state.showNewMail,
      showNewTag: state => state.showNewTag
    }),
  },
  methods: {
    onClickAccount () {
      const addr = prompt ('New account address')
      if (addr) {
        this.changeAccount(addr)
      }
    },
    ...mapActions([
      'changeAccount',
    ])
  }
}
</script>

<style scoped>
  .search {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .account {
    margin-top: 24px;
    text-align: right;
  }
  .account span {
    cursor: pointer;
  }
</style>
