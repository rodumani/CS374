<template>
  <div class="page">
    <div class="col-md-2 col-sm-2 col-xs-12">
      <Sidebar></Sidebar>
    </div>
    <div class="col-md-10 col-sm-10 col-xs-12">
      <div class="row">
        <div class="col-md-8 search">
          <div class="input-group">
            <input class="form-control" type="text" placeholder="Search" />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
    <NewMail v-if="showNewMail"></NewMail>
  </div>
</template>

<script>
import Sidebar from 'components/Sidebar'
import NewMail from 'components/NewMail'
import { mapState } from 'vuex'

export default {
  components: {
    Sidebar,
    NewMail,
  },
  computed: {
    ...mapState({
      showNewMail: state => state.showNewMail,
    }),
  }
}
</script>

<style scoped>
  .search {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
