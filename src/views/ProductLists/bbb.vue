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

<style></style>
