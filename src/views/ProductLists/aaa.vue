<template>
  <div class="allbox">
    <div class="eachli" v-for="item in aaalist" :key="item.name">
      <img :src="item.url" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import aaalist from '../ProductLists/aaalist'
export default {
  data() {
    return {
      aaalist
    }
  }
}
</script>

<style>
.allbox {
  background: #fff;
  color: #000;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px -5px #666;
  border: 1px solid #f2f2f2;
  width: 992px;
  height: 460px;
}
.eachli {
  width: 247px;
  padding: 16px 20px;
  box-sizing: border-box;
  float: left;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.eachli img {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}
.eachli:hover {
  color: #ff6700;
}
</style>
