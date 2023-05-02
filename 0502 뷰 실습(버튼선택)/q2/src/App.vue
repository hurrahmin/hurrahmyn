<template>
  <div id="app">
    <div class="box" >
      <h2 style="color:royalblue">예약 페이지</h2>
      <h3 class="mt-4">선생님 선택</h3>
      <span v-for="(teacher) in teachers" :key="teacher" @click="SelectTeacher">
        <button class="btn btn-outline-secondary m-1" >{{ teacher }}</button>
      </span>
      <hr>
      <h3 class="mt-4">시간 선택</h3>
      <span v-for="(time,index) in times" :key="index" @click="SelectTime">
        <button class="btn btn-light">{{ time }}</button>
      </span>


    </div>
    <div class="box2" >
      <h2 style="color:royalblue" >상담 신청 현황</h2>
      <h5 class="mt-4">상담 선생님</h5>
      <p class="mt-4">성함: <span v-for="teacher in teacherselected" :key="teacher">{{ teacher }} </span></p>
      <hr>
      <h5 class="mt-4">예약 현황</h5>
      <p class="mt-4">시간들: <span v-for="(time,index) in selected" :key="index">{{ time }} </span></p>
      <hr>
      <img class="m-4" src="./ssafy-logo.png" alt="">
    </div>

  </div>
  
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data () {

    return {
      teachers: ["Eric","Tony"],
      times: [
      "09:00","09:30","10:00","10:30","11:00","11:30",
      "12:00","12:30","13:00","13:30","14:00","14:30",
      "15:00","15:30","16:00","16:30","17:00","17:30",
      ],
      selected: [],
      teacherselected: [],
    }
  },
  methods: {
    SelectTime: function(e) {
      if (this.selected.includes(e.target.innerText)) {
        this.selected.splice(this.selected.indexOf(e.target.innerText),1) //삭제
      e.target.classList.remove("btn-dark")
      e.target.classList.add("btn-outline-secondary")
      } else {
        if (this.selected.length < 5) {
      this.selected.push(e.target.innerText)
      this.selected.sort()
      e.target.classList.remove("btn-outline-secondary")
      e.target.classList.add("btn-dark")
      } else {
        alert("5타임까지만 신청할 수 있습니다.")
      }}
    },
    SelectTeacher: function(e) {
      if (this.teacherselected.includes(e.target.innerText)) {
        this.teacherselected.splice(this.teacherselected.indexOf(e.target.innerText),1)
      e.target.classList.remove("btn-dark")
      e.target.classList.add("btn-outline-secondary")
      } else {
        if (this.teacherselected.length < 1) {
      this.teacherselected.push(e.target.innerText)
      e.target.classList.remove("btn-outline-secondary")
      e.target.classList.add("btn-dark")
      } else {
        alert("선생님은 한명만 선택 가능합니다 :)")
      }
    }
  }
}
}
</script>

<style>
@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
#app {
  font-family: 'SUITE-Regular';

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;

}
.box {
  width: 450px;
  height: auto;
  padding: 15px;
  box-shadow: 10px 5px 5px rgb(206, 202, 202);

}
.box2 {
  width: 450px;
  height: auto;
  padding: 15px;
  background-color: aliceblue;
  box-shadow: 10px 5px 5px rgb(206, 202, 202);
}

button {
  width : 70px
}

</style>
