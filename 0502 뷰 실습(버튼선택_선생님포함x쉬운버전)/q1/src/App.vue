<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    <div class="box">
      <h2>예약 페이지</h2>
      <h3 class="mt-4">시간 선택</h3>
      <span v-for="(time,index) in times" :key="index" @click="SelectTime">
        <button class="btn btn-outline-secondary">{{ time }}</button>
      </span>
      <hr>
      <h4 class="mt-4">선택된 시간 : <span v-for="(time,index) in selected" :key="index">{{ time }} </span></h4>

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
      times: [
      "00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30",
      "04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30",
      "08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30",
      "12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30",
      "16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30",
      "20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
      ],
      selected: [],
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
      e.target.classList.remove("btn-outline-secondary")
      e.target.classList.add("btn-dark")
      } else {
        alert("최대 다섯시간만 선택 가능합니다 :)")
      }}


    }
  }
}
</script>

<style>

#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  width: 650px;
  height: auto;
  margin: auto;
  padding: 15px;
  box-shadow: 1px 2px 10px 1px #828181;
}

</style>
