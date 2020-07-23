<template>
  <div class="top">
    <!-- 头部导航 -->
    <div class="index-head">
      <div class="index-head-box">
        <ul class="left">
          <li
            v-for="(item, index) in lists"
            :key="item.listname"
            @click="go(index)"
          >
            {{ item.listname }}
          </li>
        </ul>
        <div class="right">
          <div class="right-a">
            <div class="outindex" @click="outindex">退出</div>
            <!-- <router-link to="/login" class="router-link">登录</router-link>
            <router-link to="/register" class="router-link">注册</router-link> -->
          </div>

          <div class="shopping">
            <i
              class="el-icon-shopping-cart-2"
              style="width:25px;color: #b0b0b0;font-size: 18px;"
            ></i>
            购物车
            <!-- 外层定位，内层内容 -->
            <div class="wai-box">
              <div class="nei-box">内容+++++++++</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 搜索栏 -->
    <div class="searchBarbox">
      <div class="searchBar">
        <!-- logo图 -->
        <div class="logobox" @click="goindexpage">
          <div class="imgbox" @mouseenter="pingyiout" @mouseleave="pingyiin">
            <img src="../assets/a.png" alt="" />
            <img src="../assets/b.png" alt="" />
          </div>
          <!-- 方法2：通过层叠值来实现
          <img src="../assets/a.png" alt="" />
          <img src="../assets/b.png" alt="" /> -->
        </div>
        <!-- 搜索栏里的导航 -->
        <div class="searchNav">
          <div
            class="navli"
            v-for="(item, index) in navlis"
            :key="index"
            @mouseenter="entertargetbox(index)"
            @mouseleave="leavetargetbox()"
          >
            <span>{{ item.name }}</span>
            <!-- 导航对应的组件 -->
            <div class="navbox">
              <component :is="currentComponent" v-show="item.istrue" />
            </div>
          </div>
        </div>
        <!-- 搜索input -->
        <div class="searchinputbox" :class="curcode === 1 ? 'ff6700' : ''">
          <input type="text" @click="jujiao" />
          <button><i class="el-icon-search"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import phone from '../components/phone'
import tv from '../components/tv'
import book from '../components/book'
export default {
  components: {
    phone,
    tv,
    book
  },
  data() {
    return {
      componentList: [phone, tv, book],
      currentComponent: '',
      lists: '',
      isfalse: false,
      curcode: 0,
      curstatu: false,

      istrue: false,
      navlis: [
        { name: '小米手机', istrue: false },
        { name: 'Redmi红米', istrue: false },
        { name: '电视', istrue: false },
        { name: '笔记本', istrue: false },
        { name: '家电', istrue: false },
        { name: '路由器', istrue: false },
        { name: '智能硬件', istrue: false },
        { name: '服务', istrue: false },
        { name: '社区', istrue: false }
      ],
      images: [
        {
          img: require('../assets/phones/1.png')
        },
        {
          img: require('../assets/phones/2.png')
        },
        {
          img: require('../assets/phones/3.png')
        },
        {
          img: require('../assets/phones/4.png')
        },
        {
          img: require('../assets/phones/5.png')
        }
      ]
    }
  },
  methods: {
    // 退出登录
    outindex() {
      this.$router.push('/login')
    },
    // 搜索栏对应的导航组件
    entertargetbox(index) {
      // console.log(index)
      for (var i = 0; i < this.navlis.length; i++) {
        if (i === index) {
          this.currentComponent = this.componentList[index]
          this.navlis[i].istrue = true
          return
        }
      }
    },
    leavetargetbox() {
      for (var i = 0; i < this.navlis.length; i++) {
        this.navlis[i].istrue = false
      }
    },
    // 获取顶部导航数据
    getheadlists() {
      fetch('index.json')
        .then(res => {
          return res.json()
        })
        .then(res => {
          this.lists = res.data
        })
    },
    // 顶部导航跳转
    go(index) {
      console.log(index)
      if (index === 0) {
        this.$router.push('/alllink')
      } else if (index === 1) {
        window.open(location.origin + '/#/alllink')
        // window.open('/#/' + 'alllink')
      }
    },
    // logo跳转首页
    goindexpage() {
      this.$router.push('/index')
    },
    // 平移
    pingyiout(e) {
      var a = e.target
      // console.log(a)
      a.style.left = '-55px'
    },
    pingyiin(e) {
      var a = e.target
      a.style.left = '0px'
    },
    // 搜索框点击事件
    jujiao(e) {
      console.log(e)
      this.curcode = 1
    }
  },
  mounted() {
    this.getheadlists()
  }
}
</script>

<style>
.top {
  width: 100%;
  height: 140px;
}
.index-head {
  width: 100%;
  height: 40px;
  background: #333;
  font-size: 14px;
}
.index-head-box {
  width: 1226px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.left li {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b0b0b0;
  position: relative;
  margin: 0 8px;
  cursor: pointer;
}
.left li:before {
  content: '';
  width: 1px;
  height: 20px;
  background: #424242;
  position: absolute;
  right: -10px;
  top: 0px;
}
ul li:last-child:before {
  background: none;
}
.left li:hover,
.router-link:hover {
  color: #fff;
}
.right {
  display: flex;
}
.right-a {
  width: 100px;
  height: 100%;
  background: #333;
  display: flex;
  align-items: center;
}
.router-link {
  flex: 1;
  color: #b0b0b0;
  position: relative;
  text-decoration: none;
}
.router-link:before {
  content: '';
  width: 1px;
  height: 20px;
  background: #424242;
  position: absolute;
  right: 8px;
  top: 0px;
}
.outindex {
  color: #b0b0b0;
  cursor: pointer;
}
.shopping {
  width: 150px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b0b0b0;
  background: #424242;
  cursor: pointer;
}
.wai-box {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
}
.nei-box {
  background: red;
  color: #000;
  width: 150px;
  height: 100px;
}
/* 兄弟关系，则需要+ */
.shopping:hover .wai-box {
  transform: translateY(100%);
  transition: transform 0.6s;
  opacity: 1;
  z-index: 1;
}

.searchBar {
  width: 1226px;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.logobox {
  width: 55px;
  height: 55px;
  background: coral;
  position: relative;
  display: flex;
  overflow: hidden;
  z-index: 10;
}
.imgbox {
  width: 110px;
  height: 55px;
  position: absolute;
  top: 0;
  left: 0;
}
.imgbox img {
  height: 55px;
  width: 55px;
}
/*logo 方法2：通过层叠值来实现
.logobox img {
  height: 55px;
  width: 55px;
  position: absolute;
  top: 0;
  left: 0;
}
.logobox img:nth-child(1) {
  z-index: 5;
}
.logobox img:nth-child(2) {
  z-index: 4;
}
.logobox:hover img:nth-child(1) {
  z-index: 3;
} */

/* 搜索栏里的导航 */
.searchNav {
  width: 50%;
  height: 100px;
  display: flex;
  align-items: center;
}
.navli {
  padding: 0 10px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.navli:hover {
  color: #ff6700;
}
.searchinputbox {
  width: 300px;
  height: 55px;
  display: flex;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}
.searchinputbox input {
  width: 250px;
  height: 55px;
}
.searchinputbox button {
  width: 55px;
  border: none;
  outline: none;
  border-left: 1px solid #e0e0e0;
}
.searchinputbox button i {
  font-size: 16px;
  font-weight: 600;
}
.searchinputbox:hover {
  border: 1px solid #b0b0b0;
}
.searchinputbox:hover button {
  border-left: 1px solid #b0b0b0;
}
.searchinputbox button:hover {
  background: #ff6700;
}
.searchinputbox button:hover i {
  color: #fff;
}
/* 导航对应的组件box */
.navbox {
  position: absolute;
  top: 85%;
  left: 0%;
  z-index: 99999;
}
</style>
