<template>
  <div class="phonebox">
    <ul class="phone">
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
          rul: require('../assets/phones/1.png'),
          titlename: '小米10 青春版',
          num: '1899元起'
        },
        {
          code: 2,
          rul: require('../assets/phones/2.png'),
          titlename: '小米10 Pro',
          num: '4899元起'
        },
        {
          code: 3,
          rul: require('../assets/phones/3.png'),
          titlename: '小米10',
          num: '3899元起'
        },
        {
          code: 4,
          rul: require('../assets/phones/4.png'),
          titlename: '小米10 CC9',
          num: '1499元起'
        },
        {
          code: 5,
          rul: require('../assets/phones/5.png'),
          titlename: '小米10 CC9e',
          num: '1099元起'
        },
        {
          code: 6,
          rul: require('../assets/phones/6.png'),
          titlename: '小米10 MIX',
          num: '10099元起'
        }
      ]
    }
  }
}
</script>

<style>
.phonebox {
  width: 100%;
  height: 229px;
  background: #fff;
  border-top: 1px solid #d3d2d2;
  box-shadow: 0 3px 4px rgb(175, 174, 174);
}
.phone {
  width: 1226px;
  height: 229px;
  margin: auto;
  display: flex;
}

.phone li {
  width: 16.6%;
  height: 229px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.phone li img {
  height: 111px;
}
.ff6700 {
  color: #ff6700;
}
</style>
