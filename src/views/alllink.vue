<template>
  <!-- 所以跳转页面都在此 -->
  <div>
    <!-- 头部导航组件 -->
    <headnav></headnav>
    <!-- 导航栏 -->
    <div class="linkNavbarBox">
      <div class="linkNavbar">
        <div class="linkNavbar-con">
          <div class="linkNavbar-con-left">风景靓丽</div>
          <div class="linkNavbar-con-right">
            <span>概述</span>
            <span>自然美</span>
            <button>立刻预购</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容---core -->
    <div class="alllinkbox-core">
      <img src="../assets/register.jpg" alt="" />
      <img src="../assets/register.jpg" alt="" />
    </div>
    <!-- 底部 -->
    <div class="alllink-footer">
      页脚部分
    </div>
  </div>
</template>

<script>
import headnav from '../components/headnav'
export default {
  components: {
    headnav
  }
}
</script>

<style>
.linkNavbarBox {
  width: 100%;
  height: 70px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 5px 15px -5px #e0e0e0;
  z-index: 55;
  position: sticky;
  top: 0px;
}
.linkNavbar {
  background: #fff;
  width: 100%;
  height: 70px;
}
.linkNavbar-hidden {
  position: fixed;
  top: 0;
  left: 0;
}
.linkNavbar-con {
  width: 1226px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.linkNavbar-con-left,
.linkNavbar-con-right {
  display: flex;
  align-items: center;
}
.linkNavbar-con-right span {
  font-size: 14px;
  display: block;
  width: 55px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-right: 1px solid #e0e0e0;
}
.linkNavbar-con-right span:nth-child(2) {
  border: none;
}
.linkNavbar-con-right button {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #ff6700;
  border: none;
  color: #fff;
  cursor: pointer;
}
.alllinkbox-core img {
  width: 100%;
  height: 100vh;
}
.alllink-footer {
  width: 100%;
  height: 300px;
  background: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
