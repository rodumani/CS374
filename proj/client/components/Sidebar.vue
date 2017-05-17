<template>
  <div>
    <div class="heading">
      <router-link to="/"><h1><i class="fa fa-envelope"></i> Mail</h1></router-link>
    </div>
    <div>
      <button class="btn btn-primary btn-new-mail" @click="onClickNewMail">New Mail</button>
    </div>
    <nav role="navigation">
      <ul>
        <router-link tag="li" active-class="active" to="/inbox">
          Inbox
        </router-link>
        <router-link tag="li" active-class="active" to="/files">
          Files
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      onClickNewMail () {
        this.showNewMail ();
      },
      ...mapActions([
        'showNewMail',
      ]),
    }
  }
</script>

<style scoped>
  .btn-new-mail {
    width: 100%;
    cursor: pointer;
  }
  .heading h1 {
    margin: 17px 0;
  }
  .heading a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style-type: none;
    width: 100%;
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
    cursor: pointer;
  }
  li a {
    text-decoration: none;
    color: black;
  }
  li:hover {
    background-color: #eee;
  }
  li.active {
    border-right: 5px solid #337ab7;
    background-color: #eee;
  }
  ul {
    width: 100%;
    padding: 0;
  }
  nav {
    margin-top: 20px;
  }

  h1 {
    white-space: nowrap;
    overflow: visible;
    text-overflow: ellipsis;
  }
</style>
