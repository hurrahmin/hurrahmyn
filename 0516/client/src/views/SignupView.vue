<template>
  <b-container role="group" class="p-5 login-form">
    <h1>회원 가입</h1>
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
      <label style="text-align: start;" for="input-password1">비밀번호</label>
      <b-form-input 
      id="input-password1"
      :state="passwordState"
      aria-describedby="input-live-feedback"
      placeholder="PASSWORD" v-model="password1" trim type="password"
      ></b-form-input>

      <b-form-invalid-feedback id="input-password-feedback" class="text-right">
        비밀번호 3글자 이상
      </b-form-invalid-feedback>
    </b-row>

    <b-row>
      <label style="text-align: start;" for="input-password2">비밀번호확인</label>
      <b-form-input 
      id="input-password2"
      :state="passwordStateConfirm"
      aria-describedby="input-live-feedback"
      placeholder="PASSWORD 일치 확인" v-model="password2" trim type="password"
      ></b-form-input>

      <b-form-invalid-feedback id="input-password-feedback" class="text-right">
        비밀번호가 일치해야 함
      </b-form-invalid-feedback>
    </b-row>

    <b-button variant="success" @click="signup">회원가입</b-button>
  </b-container>
</template>


<script>
// import axios from 'axios'

export default {
  name:'SignupView',
  data() {
    return {
      username: '',
      password1: '',
      password2: '',
    }
  },
  computed: {
    nameState() {
      return this.username.length >= 3? true: false
    },
    passwordState() {
      return this.password1.length >= 5? true: false
    },
    passwordStateConfirm() {
      return this.password2 === this.password1? true: false
    }
  },
  methods: {
    // signup() {
    //   axios({
    //     method: 'post',
    //     url : 'http://127.0.0.1:8000/auth/signup/',
    //     data: {
    //       username: this.username,
    //       password1: this.password1,
    //       password2: this.password2,
    //     }
    //   })
    //   .then((res)=> {
    //     console.log(res.data)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
    // }
    signup() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2

      const payload= {username, password1, password2}

      this.$store.dispatch('signup',payload)
    }
  }
}
</script>

<style>

</style>