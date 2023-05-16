<template>
  <b-container role="group" class="p-5 login-form">
    <h1>로그인</h1>
    <b-row>
      <label style="text-align: start;" for="input-username">아이디</label>
      <b-form-input 
      id="input-username"
      :state="nameState"
      aria-describedby="input-live-feedback"
      placeholder="ID" v-model="username" trim
      ></b-form-input>

      <b-form-invalid-feedback id="input-username-feedback" class="text-right">
        알파벳/숫자 3글자 이상
      </b-form-invalid-feedback>

    </b-row>
    <b-row>
      <label style="text-align: start;" for="input-password">비밀번호</label>
      <b-form-input
      id="input-password"
      :state="passwordState"
      aria-describedby="input-live-feedback"
      placeholder="PASSWORD" v-model="password" trim type="password"></b-form-input>

      <b-form-invalid-feedback id="input-password-feedback" class="text-right">
        비밀번호 3글자 이상
      </b-form-invalid-feedback>
    </b-row>
    <b-button variant="success" @click="login">로그인</b-button>

  </b-container>
</template>

<script>

// import axios from 'axios'
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    nameState() {
      return this.username.length >=3 ? true : false
    },
    passwordState() {
      return this.password.length >=5 ? true: false
    },
  },
  // methods: {
  //   login() {
  //     axios({
  //       method: 'post',
  //       url : 'http://127.0.0.1:8000/auth/login/',
  //       data: {
  //         username: this.username,
  //         password: this.password
  //       }
  //     })
  //     .then((res)=> {
  //       console.log(res.data)
  //       this.$store.dispatch('login', res.data.access)
  //     })
  //     .catch ((err)=>{
  //       console.log(err)
  //     })
  //   }
  // }
  methods: {
    login() {
      const username = this.username
      const password = this.password

      const payload ={
        username, password
      }
      this.$store.dispatch('login',payload)
    }
  }
}
</script>

<style>
.login-form{
  background-color: rgb(214,228,240);
  box-shadow: 20px 20px 10px 0px lightgray;

}
</style>