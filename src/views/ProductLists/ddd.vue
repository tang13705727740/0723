<template>
  <div class="allbox">
    <div class="eachli" v-for="item in bbblist" :key="item.name">
      <img :src="item.url" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import bbblist from '../ProductLists/bbblist'
export default {
  data() {
    return {
      bbblist
    }
  }
}
</script>

<style></style>
