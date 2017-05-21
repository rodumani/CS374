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
          <div class="col-md-3 col-sm-6 account" @click="onClickAccount">
            <div>{{account.name}}</div>
            <div>{{account.address}}</div>
          </div>
          <div class="col-md-1 logout">
            <button class="btn btn-outline-primary" @click="onClickLogout">Logout</button>
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
      tags: state => state.tags
        .filter((t) => t.account === state.account.address)
        .map(t => t.tag)
        .sort((a, b) => a.localeCompare(b)),
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
    mounted () {
      getTags((tags) => {
        this.setTags(tags.sort())
      });
    }
  },
}
</script>

<style scoped>
  .search {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .account {
    margin-top: 15px;
    text-align: right;
  }

  .logout {
    margin-top: 21px;
    margin-left: -10px;
  }
  .logout button {
    cursor: pointer;
  }
</style>
