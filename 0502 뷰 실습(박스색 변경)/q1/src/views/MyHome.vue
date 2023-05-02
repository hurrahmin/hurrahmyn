<template>
  <div>
    <h1>Home</h1>
    <h2>첫 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
    <h2>두 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.global {
  display: flex;
  justify-content: center;
}
.box {
  border : 1px solid black;
  width : 100px;
  height: 100px;
}
</style>