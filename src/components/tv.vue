<template>
  <div class="tvbox">
    <ul class="tv">
      <li v-for="item in items" :key="item.code">
        <img :src="item.rul" alt="" />
        <span>{{ item.titlename }}</span>
        <span class="ff6700">{{ item.num }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          code: 1,
          rul: require('../assets/phones/7.png'),
          titlename: '小米10 青春版',
          num: '1899元起'
        },
        {
          code: 2,
          rul: require('../assets/phones/8.jpg'),
          titlename: '小米10 Pro',
          num: '4899元起'
        },
        {
          code: 3,
          rul: require('../assets/phones/15.jpg'),
          titlename: '小米10',
          num: '3899元起'
        },
        {
          code: 4,
          rul: require('../assets/phones/10.jpg'),
          titlename: '小米10 CC9',
          num: '1499元起'
        },
        {
          code: 5,
          rul: require('../assets/phones/11.jpg'),
          titlename: '小米10 CC9e',
          num: '1099元起'
        },
        {
          code: 6,
          rul: require('../assets/phones/12.jpg'),
          titlename: '小米10 MIX',
          num: '10099元起'
        }
      ]
    }
  }
}
</script>

<style>
.tvbox {
  width: 100%;
  height: 229px;
  background: #fff;
  z-index: 9;
  border-top: 1px solid #d3d2d2;
  box-shadow: 0 3px 4px rgb(175, 174, 174);
}
.tv {
  width: 1226px;
  height: 229px;
  margin: auto;
  display: flex;
}

.tv li {
  width: 16.6%;
  height: 229px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.tv li img {
  height: 111px;
}
</style>
