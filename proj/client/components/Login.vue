<template>
  <div class="login">
    <div class="form-login-wrapper">
      <h1>Login</h1>
      <form class="form-horizontal form-login" @submit.prevent="onSubmit">
        <div class="form-group row">
          <label class="col-3 col-form-label" for="email">email</label>
          <div class="col-9">
            <el-tooltip class="item" effect="dark" :content="errors.first('email')"
                        placement="top" :value="errors.has('email')" manual>
              <input type="email" id="email" name="email" :class="['form-control', {'has-error': errors.has('email')}]"
                     placeholder="example@example.org"
                     v-model="address" v-validate="'required|email'" data-vv-delay="1000" autofocus/>
            </el-tooltip>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label" for="name">name</label>
          <div class="col-9">
            <el-tooltip class="item" effect="dark" :content="errors.first('name')"
                        placement="bottom" :value="errors.has('name')" manual>
              <input :class="['form-control', {'has-error': errors.has('name')}]" type="text" id="name" name="name"
                     v-model="name" placeholder="Gildong Hong"
                     v-validate="'required'" data-vv-delay="1000" />
            </el-tooltip>
          </div>
        </div>
        <div class="form-group pull-right">
          <button :class="['btn', {'btn-primary': !errors.any(), 'btn-danger': errors.any()}]"
                  :disabled="errors.any() || name.length === 0">Login</button>
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

  input.has-error {
    border-color: red;
  }
  .is-danger {
    color: red;
  }
</style>

<style>
  input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #909;
  }
</style>
