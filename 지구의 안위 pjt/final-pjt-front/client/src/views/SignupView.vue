<template>
  <b-container role='group' class='signup-form w-50'>
    <h2>+X%X</h2>
    <h3>경험을 더하고,</h3>
    <h3>경험을 나눕니다</h3>
    <br>
    <b-row class="m-1">
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
    <b-row class="m-1">
      <label style="text-align:start" for="input-password">비밀번호</label>
      <b-form-input 
      id="input-password" 
      placeholder="비밀번호를 입력하세요" 
      v-model='password1' 
      :state='passwordState' 
      aria-describedby='input-live-feedback'
      trim 
      type='password'></b-form-input>
    <b-form-invalid-feedback id='input-password-feedback' class='text-right'>
      5글자 이상
    </b-form-invalid-feedback>
    </b-row>
    <b-row class="m-1">
      <label style="text-align:start" for="input-password">비밀번호 확인</label>
      <b-form-input 
      id="input-password2" 
      placeholder="비밀번호를 확인해주세요" 
      v-model='password2' 
      :state='passwordConfirmation' 
      aria-describedby='input-live-feedback'
      trim 
      type='password'
      @keyup.enter="signup"></b-form-input>
    <b-form-invalid-feedback id='input-password2-feedback' class='text-right'>
      비밀번호가 일치하지 않습니다.
    </b-form-invalid-feedback>
    </b-row>
    <div class="d-flex justify-content-center m-3">
      <b-button variant='outline-success' class="w-50" @click='signup'>회원가입</b-button>
    </div>
  </b-container>
</template>

<script>

export default {
  name: 'SignupView',
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
    }
  },
  methods : {
    signup() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2

      const payload= {username, password1, password2}

      this.$store.dispatch('signUp',payload)
    }
  },
  computed: {
    nameState() {
      return this.username.length >= 2 ? true: false 
    },
    passwordState() {
      return this.password1.length >= 5 ? true: false
    },
    passwordConfirmation() {
      return this.password1 === this.password2 ? true: false
    }
  }

}
</script>

<style scoped>
.signup-form {  
  text-align: start;
}
</style>