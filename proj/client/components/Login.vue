<template>
  <div class="login">
    <div class="form-login-wrapper">
      <h1>Login</h1>
      <form class="form-horizontal form-login" @submit.prevent="onSubmit">
        <div class="form-group row">
          <label class="col-3 col-form-label" for="email">email</label>
          <div class="col-9">
            <input class="form-control" type="email" id="email" v-model="address" placeholder="example@example.org"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label" for="name">name</label>
          <div class="col-9">
            <input class="form-control" type="text" id="name" v-model="name" placeholder="Gildong Hong"/>
          </div>
        </div>
        <div class="form-group pull-right">
          <button class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        address: '',
        name: '',
      }
    },
    methods: {
      onSubmit () {
        this.changeAccount({
          address: this.address,
          name: this.name,
        }).then(() => this.$router.push('/'))
      },
      ...mapActions([
        'changeAccount',
      ]),
    },
    mounted () {
      this.changeAccount(null)
    },
  }
</script>

<style scoped>
  .login {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url('../../static/DSC03749.jpg') no-repeat fixed center center;
    background-size: cover;
    padding: 0;
  }
  .form-login-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    border: 1px solid white;
    background-color: #eee;
    border-radius: 5px;
    min-width: 500px;
    padding: 20px;
  }
  .form-login {
    margin-top: 30px;
  }
  .pull-right {
    float: right;
  }
</style>

<style>
  input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #909;
  }
</style>
