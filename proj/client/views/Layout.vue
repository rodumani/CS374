<template>
  <div class="page">
    <div class="col-md-2">
      <Sidebar></Sidebar>
    </div>
    <div class="col-md-10">
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
  </div>
</template>

<script>
import Sidebar from 'components/Sidebar'

export default {
  components: {
    Sidebar,
  }
}
</script>

<style scoped>
  .search {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
