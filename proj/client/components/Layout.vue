<template>
  <div class="page container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-3 col-xs-12">
        <Sidebar></Sidebar>
      </div>
      <div class="col-md-9 col-sm-9 col-xs-12">
        <div class="row">
          <div class="col-md-6 col-sm-6 search">
            <el-tooltip class="item" effect="dark" content="Not supported" placement="right">
              <div class="input-group">
                <input class="form-control" type="text" placeholder="Search" disabled />
                <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button" disabled><i class="fa fa-search"></i></button>
                </span>
              </div>
            </el-tooltip>
          </div>
          <div class="col-md-6 col-sm-6 account">
            <div class="logout">
              <button class="btn btn-outline-primary" @click="onClickLogout">Logout</button>
            </div>
            <div class="account-info">
              <div>{{account.name}}</div>
              <div class="address">{{account.address}}</div>
            </div>
          </div>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
      <NewMail v-if="showNewMail" :new-address="newAddress"></NewMail>
    </div>
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
      account: 'account',
      showNewMail: state => state.showNewMail,
      newAddress: state => state.newAddress,
    }),
  },
  methods: {
    onClickLogout () {
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
  .search {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .account {
    padding-top: 15px;
    text-align: right;
  }
  .account-info {
    display: inline-block;
    float: right;
  }

  .logout {
    display: inline-block;
    float: right;
    margin-left: 10px;
  }
  .logout button {
    margin-top: 5px;
    cursor: pointer;
  }
</style>
