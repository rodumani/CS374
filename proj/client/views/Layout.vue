<template>
  <div class="page container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-3 col-xs-12">
        <Sidebar></Sidebar>
      </div>
      <div class="col-md-9 col-sm-9 col-xs-12">
        <div class="row">
          <div class="col-md-8 col-sm-6 search">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search" />
              <span class="input-group-btn">
              <button class="btn btn-secondary" type="button"><i class="fa fa-search"></i></button>
            </span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 account" @click="onClickAccount">
            <div class="account-info">
              {{account.name}}<br/>{{account.address}}
            </div>
            <div class="logout">
              <button class="btn btn-outline-primary" @click="onClickLogout">Logout</button>
            </div>
          </div>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
      <NewMail v-if="showNewMail"></NewMail>
    </div>
  </div>
</template>

<script>
import Sidebar from 'components/Sidebar'
import NewMail from 'components/NewMail'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Sidebar,
    NewMail,
  },
  computed: {
    ...mapState({
      account: 'account',
      showNewMail: state => state.showNewMail,
    }),
  },
  methods: {
    onClickAccount () {
      const address = prompt('New account address')
      if (address) {
        const name = prompt('New account name')
        if (name) {
          this.changeAccount({
            address,
            name,
          })
        }
      }
    },
    onClickLogout () {
      this.$router.push('/login')
    },
    ...mapActions([
      'changeAccount',
    ]),
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
  }

  .logout {
    display: inline-block;
    margin-left: 10px;
  }
  .logout button {
    margin-top: -25px;
    cursor: pointer;
  }
</style>
