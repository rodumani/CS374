<template>
  <div>
    <div class="heading">
      <h1><i class="fa fa-envelope"></i> Mail</h1>
    </div>
    <div>
      <button class="btn btn-primary btn-new-mail" @click="onClickNewMail">New Mail</button>
    </div>
    <nav role="navigation">
      <ul>
        <li class="active">
          <a>Inbox</a>
        </li>
        <li>
          <a>Sent</a>
        </li>
        <li>
          <a>Files</a>
        </li>
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
  }
  .heading h1 {
    margin: 17px 0;
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
</style>
