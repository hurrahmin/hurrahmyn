<template>
  <div>
    <div class="jb-box" @click="goMovie">
      <video muted autoplay loop>
        <source src="@/assets/forest-33898.mp4" type="video/mp4">
      </video>
      <div class="jb-text focus-in-expand">
        <p v-if="isLogin">반갑습니다. {{userinfo.username}}님!</p>
        <p v-if="isLogin">오늘도 지구의 안위를 위해 한 걸음 나아가주세요.</p>
        <p v-else>지구의 안위에 오신 것을 환영합니다:)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goMovie () {
      this.$router.push('movie')
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    },
    userinfo() {
      return this.$store.state.userinfo
    }
  }
}
</script>

<style>
.d-flex {
  justify-content: center;
}
.comp {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

body { padding: 0px; margin: 0px; }
.jb-box { width: 100%; height:100%; overflow: hidden;margin: 0px auto; position: relative; }
video { width: 100%; }
.jb-text { position: absolute; top: 40%; width: 100%; }
.jb-text p { margin-top: -24px; text-align: center; font-size: 48px; color: #ffffff; }
.focus-in-expand {
    -webkit-animation: focus-in-expand 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
            animation: focus-in-expand 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
}
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
</style>