<template>
  <!-- 首页 -->
  <div>
    <!-- 头部导航组件 -->
    <headnav></headnav>
    <!-- <headnavOut></headnavOut> -->
    <!-- 内容一 -->
    <div class="indexbox">
      <!-- 轮播图 -->
      <div class="rotationbox">
        <el-carousel :interval="5000" arrow="always" :height="imgheight + 'px'">
          <el-carousel-item v-for="item in rotationimgs" :key="item.url">
            <img ref="imgheight" @load="imgload" :src="item.url" alt="" />
          </el-carousel-item>
        </el-carousel>
        <!-- 商品列表 -->
        <div class="ProductList">
          <ul>
            <!-- <li
              v-for="(item, index) in ProductLists"
              :key="index"
              @mouseenter="enterProductList(index)"
              @mouseleave="leaveProductList()"
            > -->
            <li
              v-for="(item, index) in ProductLists"
              :key="index"
              @mouseenter="enterProductList(index)"
            >
              <span>{{ item.name }}</span>
              <span class="a"><i class="el-icon-arrow-right"></i></span>
              <!-- 隐藏的组件 -->
              <div class="showComponentBox">
                <component :is="curComponent" v-show="item.istrue1" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 精灵图板块 缺失-->
      <div class="jlBox">
        <div class="jlImgbox">
          <span class="jl-img1"></span>
          <!-- <img src="" alt="" /> -->
        </div>
        <div class="jlImgbox">
          <span class="jl-img2"></span>
          <!-- <img src="../assets/img/ads-2.jpg" alt="" /> -->
        </div>
        <div class="jlImgbox">
          <span class="jl-img3"></span>
          <!-- <img src="../assets/img/ads-3.png" alt="" /> -->
        </div>
        <div class="jlImgbox">
          <span class="jl-img4"></span>
          <!-- <img src="../assets/img/ads-4.jpg" alt="" /> -->
        </div>
      </div>
    </div>
    <!-- 内容二 -->
    <div class="twoContentBox">
      <!-- 手机   模块 -->
      <div class="modelbox">
        <p class="title">手机</p>
        <div class="modelbox-con">
          <div class="phonemodelbox-con-left"></div>
          <div class="phonemodelbox-con-right">
            <div
              class="phonemodelbox-con-right-div"
              v-for="item in phonemodellist"
              :key="item.url"
            >
              <img :src="item.url" alt="" />
              <p>{{ item.title }}</p>
              <p>{{ item.name }}</p>
              <p>
                <span>{{ item.num }} </span> <del>{{ item.del }}</del>
              </p>
            </div>
          </div>
        </div>
        <div class="phonemodelbox-logo"></div>
      </div>
      <!-- 智能   模块 -->
      <div class="modelbox">
        <div class="title">智能</div>
        <div class="modelbox-con">
          <div class="intelligenceBox-con-left">
            <div class="img1"></div>
            <div class="img2"></div>
          </div>
          <div class="intelligenceBox-con-right">
            <div
              class="intelligence-div"
              v-for="item in intelligencelist"
              :key="item.url"
            >
              <img :src="item.url" alt="" />
              <p>{{ item.title }}</p>
              <p>{{ item.name }}</p>
              <p>
                <span>{{ item.num }} </span> <del>{{ item.del }}</del>
              </p>
            </div>
            <!-- 浏览更多 上下2层 -->
            <div class="browsebox">
              <!-- 上 -->
              <div class="browsebox-div1">
                <div>
                  <p>九号平衡车</p>
                  <p style="color:#ff6700">1999元</p>
                </div>
                <div>
                  <img
                    src="../assets/intelligence/10.jpg"
                    style="width:80px"
                    alt=""
                  />
                </div>
              </div>
              <!-- 下 -->
              <div class="browsebox-div2">
                <div>
                  <p>浏览更多</p>
                  <p style="color:#999;font-size:12px">热门</p>
                </div>
                <div>
                  <i
                    class="el-icon-right"
                    style="color:#ff6700;font-size:80px"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="phonemodelbox-logo logo2"></div>
      </div>
      <!-- 视频 模块 -->
      <div class="modelbox">
        <h2>视频</h2>
        <div class="videobox">
          <div
            class="videobox-div"
            v-for="(item, index) in videolist"
            :key="item.url"
            @click="openVideo(index)"
          >
            <div class="video-imgbox">
              <img :src="item.url" alt="" />
              <!-- 播放icon -->
              <i class="el-icon-video-play openicon"></i>
            </div>
            <div class="videobox-div-bottom">
              <p>{{ item.p1 }}</p>
              <p>{{ item.p2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 视频的弹窗 遮罩 -->
    <template v-for="(item, index) in videolist">
      <div class="popup" v-if="item.videohidden" :key="index">
        <div class="popupVideo">
          <div class="popupVideo-top">
            <h2>{{ item.h2 }}</h2>
            <i class="el-icon-close" @click="closeVideo(index)"></i>
          </div>
          <!-- 视频地址无 -->
          <video :src="item.videourl" autoplay></video>
        </div>
      </div>
    </template>
    <!-- 页脚 -->
    <div class="foot">
      <div class="footCon">
        <div class="footCon-title">
          <div
            class="footCon-title-li"
            v-for="item in footTitles"
            :key="item.name"
          >
            <span>{{ item.icon }}</span>
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="footCon-login">
          <p style="margin:20px 0">此处省略...</p>
          <img src="../assets/truste.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueEvent from '../components/vueEvent.js'
import headnav from '../components/headnav'
import headnavOut from '../components/headnavOut'
import aaa from './ProductLists/aaa'
import bbb from './ProductLists/bbb'
import ccc from './ProductLists/ccc'
import ddd from './ProductLists/ddd'
import eee from './ProductLists/eee'
import phonemodellist from '../views/phonemodellist'
import intelligencelist from '../views/intelligencelist'
import videolist from '../views/videolist'
export default {
  components: {
    headnav,
    headnavOut,
    aaa,
    bbb,
    ccc,
    ddd,
    eee
  },
  data() {
    return {
      imgheight: '',
      curComponent: '',
      curComponentlist: [aaa, bbb, ccc, ddd, eee],
      // 轮播数据
      rotationimgs: [
        {
          url: require('../assets/lunbo/1.webp'),
          code: 0
        },
        {
          url: require('../assets/lunbo/2.jpg'),
          code: 1
        },
        {
          url: require('../assets/lunbo/3.webp'),
          code: 2
        },
        {
          url: require('../assets/lunbo/4.webp'),
          code: 3
        },
        {
          url: require('../assets/lunbo/5.webp'),
          code: 4
        }
      ],
      ProductLists: [
        { name: '手机 电话卡', istrue1: false },
        { name: '电视 盒子', istrue1: false },
        { name: '笔记本 显示器 平板', istrue1: false },
        { name: '家电 插线板', istrue1: false },
        { name: '出行 穿戴', istrue1: false },
        { name: '智能 路由器', istrue1: false },
        { name: '电源 配件', istrue1: false },
        { name: '健康 儿童', istrue1: false },
        { name: '耳机 音箱', istrue1: false },
        { name: '生活 箱包', istrue1: false }
      ],
      phonemodellist,
      intelligencelist,
      videolist,
      footTitles: [
        {
          icon: '',
          name: '预约维护服务'
        },
        {
          icon: '',
          name: '7天无理由退货'
        },
        {
          icon: '',
          name: '15天免费换货'
        },
        {
          icon: '',
          name: '满99元包邮'
        },
        {
          icon: '',
          name: '520余家售后网点'
        }
      ]
    }
  },
  methods: {
    // 下面的 imgLoad 是页面渲染完成的加载方法，确保屏幕中的图片的高度第一次渲染到页面。
    imgload() {
      console.log(this.$refs)
      this.$nextTick(() => {
        this.imgheight = this.$refs.imgheight[0].height
      })
    },
    // 商品列表的隐藏组件,进入时切换组件
    enterProductList(index) {
      // console.log(index)
      for (var i = 0; i < this.ProductLists.length; i++) {
        if (i === index) {
          this.curComponent = this.curComponentlist[index]
          this.ProductLists[i].istrue1 = true
          return
        }
      }
    },
    leaveProductList() {
      for (var i = 0; i < this.ProductLists.length; i++) {
        this.ProductLists[i].istrue1 = false
      }
    },
    // 播放视频事件
    openVideo(index) {
      for (var i = 0; i < this.videolist.length; i++) {
        if (i === index) {
          this.videolist[i].videohidden = true
          return
        }
      }
    },
    closeVideo(index) {
      for (var i = 0; i < this.videolist.length; i++) {
        if (i === index) {
          this.videolist[i].videohidden = false
          return
        }
      }
    }
  },
  mounted() {
    // 监听事件，当视口发生变化的时候，得到此时图片的高度赋值给imgheight
    window.addEventListener(
      'resize',
      () => {
        this.imgheight = this.$refs.imgheight[0].height
        this.imgload()
      },
      false
    )
  }
}
</script>

<style scoped>
li {
  list-style: none;
}

/* 内容一 */
.indexbox {
  width: 1226px;
  height: calc(100% - 140px);
  margin: auto;
}

/* 轮播图 */
.rotationbox {
  width: 100%;
  height: 460px;
  position: relative;
  z-index: 50;
}
/* 商品列表 */
.ProductList {
  position: absolute;
  /* position: relative; */
  top: 0;
  left: 0;
  width: 234px;
  height: 420px;
  padding: 20px 0;
  background: rgba(105, 101, 101, 0.6);
  z-index: 1000;
}
.ProductList ul li {
  padding-left: 40px;
  padding-right: 20px;
  color: #fff;
  font-size: 14px;
  height: 42px;
  line-height: 42px;
  cursor: pointer;
}
.a {
  float: right;
}
.ProductList ul li:hover {
  background: #ff6700;
}
/* 控制外层盒子的显示或者隐藏 */
.ProductList ul li:hover .showComponentBox {
  /* 0.15s是人体感观零界点值 */
  transition: all 0.15s;
  opacity: 1;
  /* 防止穿透效果 z-index: 1 穿透效果：此盒子上有点击事件，但是它下面有一层，防止点击的时候点到下层盒子 */
  z-index: 1;
}
.showComponentBox {
  /* opacity: 0 显示隐藏 */
  opacity: 0;
  height: 460px;
  position: absolute;
  left: 234px;
  top: 0px;
  /* z-index: 900; */

  /* 防止穿透效果  z-index: -1*/
  z-index: -1;
}
/* 精灵图板块 */
.jlBox {
  width: 100%;
  height: 170px;
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
}
.jlImgbox {
  width: 299px;
  height: 170px;
  margin-right: 10px;
}
.jlImgbox span {
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.jlImgbox:last-child {
  margin-right: 0;
}
.jl-img1 {
  background: url('../assets/img/ads-1.png');
  background-size: 100% 100%;
}
.jl-img2 {
  background: url('../assets/img/ads-2.jpg');
  background-size: 100% 100%;
}
.jl-img3 {
  background: url('../assets/img/ads-3.png');
  background-size: 100% 100%;
}
.jl-img4 {
  background: url('../assets/img/ads-4.jpg');
  background-size: 100% 100%;
}
/* 内容二 */
.twoContentBox {
  width: 100%;
  background: #f2f2f2;
}
/* 手机模块 */
.modelbox {
  width: 1226px;
  margin-bottom: 25px;
  margin: auto;
  /* position: relative; */
}
.modelbox .title {
  font-size: 22px;
  color: #333;
  line-height: 58px;
  font-weight: 200;
}
.modelbox-con {
  width: 100%;
  height: 614px;
  display: flex;
  margin-bottom: 40px;
}
.phonemodelbox-con-left {
  width: 468px;
  height: 614px;
  background: url('../assets/mix-alpha.jpg') no-repeat;
  background-size: 100% 100%;
  margin-right: 14px;
  /* cursor: pointer; */
}
.phonemodelbox-con-right,
.intelligenceBox-con-right {
  height: 614px;
  display: flex;
  flex-wrap: wrap;
}
.phonemodelbox-con-right-div,
.intelligence-div {
  width: 234px;
  height: 300px;
  margin: 0 14px 14px 0;
  background: #fff;
  /* cursor: pointer; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.phonemodelbox-con-left,
.phonemodelbox-con-right-div,
.intelligenceBox-con-left div,
.intelligenceBox-con-right div,
.browsebox-div1,
.browsebox-div2,
.videobox-div {
  transition: all 0.2s linear;
  cursor: pointer;
}

.phonemodelbox-con-left:hover,
.phonemodelbox-con-right-div:hover,
.intelligenceBox-con-left div:hover,
.intelligenceBox-con-right .intelligence-div:hover,
.browsebox-div1:hover,
.browsebox-div2:hover,
.videobox-div:hover {
  transform: translate3d(0, -2px, 0);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.phonemodelbox-con-right-div:nth-child(4),
.phonemodelbox-con-right-div:nth-child(8) {
  margin: 0;
}
.phonemodelbox-con-right-div p,
.intelligence-div p {
  text-align: center;
  line-height: 22px;
  font-size: 14px;
}
.phonemodelbox-con-right-div p:nth-child(3),
.intelligence-div p:nth-child(3) {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}
.phonemodelbox-con-right-div span,
.intelligence-div span {
  color: #ff6700;
}
.phonemodelbox-con-right-div del,
.intelligence-div del {
  color: #999;
}
.phonemodelbox-logo {
  width: 100%;
  height: 120px;
  background: url('../assets/111.webp') no-repeat;
  cursor: pointer;
}
.logo2 {
  background: url('../assets/222.webp') no-repeat;
}
/* 智能模块 */
.intelligenceBox-con {
  width: 100%;
  height: 614px;
  display: flex;
  flex-wrap: wrap;
}
.intelligenceBox-con-left {
  width: 234px;
  height: 614px;
  margin-right: 14px;
  display: flex;
  flex-direction: column;
}
.img1,
.img2 {
  width: 234px;
  height: 300px;
}
.img1 {
  background: url('../assets/intelligence/1.webp') no-repeat;
  background-size: 100% 100%;
  margin-bottom: 14px;
}
.img2 {
  background: url('../assets/intelligence/6.webp') no-repeat;
  background-size: 100% 100%;
}
.intelligence-div:nth-child(4) {
  margin: 0;
}
/* .intelligenceBox-con-right .browsebox:hover {
  box-shadow: none;
  transform: none;
} */
.browsebox {
  width: 234px;
  height: 300px;
  display: flex;
  flex-direction: column;
}
.browsebox-div1,
.browsebox-div2 {
  width: 100%;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 14px;
}
.browsebox-div1 {
  margin-bottom: 15px;
}
/* 视频 模块 */
.modelbox h2 {
  font-weight: 200;
  line-height: 58px;
}
.videobox {
  display: flex;
}
.videobox-div {
  width: 296px;
  height: 285px;
  margin: 0 14px 14px 0;
  cursor: pointer;
}
.video-imgbox {
  position: relative;
}
.openicon {
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 40px;
  color: #fff;
}
.video-imgbox:hover .openicon {
  color: #ff6700;
}
.videobox-div-bottom {
  width: 100%;
  height: 105px;
  background: #fff;
  padding-top: 40px;
  box-sizing: border-box;
}
.videobox-div-bottom p {
  font-size: 14px;
  text-align: center;
}
.videobox-div-bottom p:last-child {
  font-size: 12px;
  color: #999;
}
/* 视频的弹窗 遮罩 */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 999999;
}
.popupVideo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  background: #fff;
  overflow: hidden;
}
.popupVideo-top {
  width: 100%;
  height: 62px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
}
.popupVideo-top h2 {
  font-weight: 200;
  line-height: 62px;
}
.popupVideo-top i {
  font-size: 25px;
  line-height: 62px;
  color: red;
}
/* 页脚 */
.foot {
  width: 100%;
  background: #fff;
}
.footCon {
  width: 1226px;
  margin: auto;
}
.footCon-title {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footCon-title-li {
  width: 20%;
  border-right: 1px solid #e0e0e0;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footCon-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footCon-title-li:hover {
  color: #ff6700;
}
</style>
