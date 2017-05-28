<template>
  <div class="page container-fluid">
    <div class="row">
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="content">
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
import { getMails, getTags, getFilters } from '../firebase'
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
      newAddress: state => state.newAddress,
    }),
  },
  methods: {
    onClickLogout () {
      this.$router.push('/login')
    },
    ...mapActions([
      'setMails',
      'setLoading',
      'setTags',
      'setFilters',
    ]),
  },
  mounted () {
    getMails(this.account.address, (mails) => {
      this.setMails(mails.reverse())
      this.setLoading(false)
    })
    getTags(this.account.address, (tags) => {
      this.setTags(tags.sort())
    })
    getFilters(this.account.address, (filters) => {
      this.setFilters(filters)
    })
  }
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

  @media (max-width: 640px) {
    .sidebar {
      width: 100%;
      max-width: 100%;
      display: block;
      flex-basis: 100%;
    }
    .content {
      width: 100%;
      display: block;
      flex-basis: 100%;
    }
  }

  @media (max-width: 1280px) and (min-width: 641px) {
    .sidebar {
      max-width: 300px;
      width: 25%;
    }
    .content {
      width: 75%;
    }
  }

  @media (min-width: 1281px) {
    .sidebar {
      width: 300px;
    }

    .content {
      width: calc(100% - 300px);
    }
  }
  .sidebar,
  .content {
    padding: 0 15px;
    min-height: 1px;
    position: relative;
  }
</style>
