<template>
<div id="login">
  <b-container role='group' class='login-form w-50'>
    <h2>+X%X</h2>
    <h3>경험을 더하고,</h3>
    <h3>경험을 나눕니다</h3>
    <br>
    <b-row class="m-2">
      <label style="text-align:start" for="input-username">아이디</label>
      <b-form-input 
      id="input-username" 
      placeholder="아이디를 입력하세요" 
      v-model='username' 
      :state='nameState' 
      aria-describedby='input-live-feedback'
      trim 
    ></b-form-input>
    <b-form-invalid-feedback id='input-username-feedback' class='text-right'>
      2글자 이상
    </b-form-invalid-feedback>
    </b-row>
    <b-row class="m-2">
      <label style="text-align:start" for="input-password">비밀번호</label>
      <b-form-input 
      id="input-password" 
      placeholder="비밀번호를 입력하세요" 
      v-model='password' 
      :state='passwordState' 
      aria-describedby='input-live-feedback'
      trim 
      type='password'
      @keyup.enter='login'></b-form-input>
    <b-form-invalid-feedback id='input-password-feedback' class='text-right'>
      5글자 이상
    </b-form-invalid-feedback>
    </b-row>
    <div class="d-flex justify-content-center m-3">
      <b-button variant='outline-success' class='w-50' @click='login'>로그인</b-button>
    </div>

  </b-container>
</div>


</template>

<script>

export default {
  name: 'LoginView',
  data () {
    return {
      username: "",
      password: "",
    }
  },
  methods : {
    login() {
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }

      this.$store.dispatch('login', payload)
    }
  },
  computed: {
    nameState() {
      return this.username.length >= 2 ? true: false
    },
    passwordState() {
      return this.password.length >= 5 ? true: false
    },
  }

}
</script>

<style scoped>
.login-form {
  text-align: start;
}
#login {
  font-family: 'Pretendard-Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>