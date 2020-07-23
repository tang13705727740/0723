<template>
  <!-- 登录页面 -->
  <div class="background">
    <div class="from">
      <h2>登录</h2>
      <div class="from-username">
        <i class="el-icon-user"></i>
        <input type="text" v-model="username" placeholder="请输入用户名" />
      </div>
      <div class="from-password">
        <i class="el-icon-unlock"></i>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </div>

      <button @click="goIndex">登陆</button>
      <div class="positionBox">
        <router-link to="/register" class="position">注册</router-link>
        <router-link to="/" class="position">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // name: '',
      username: '',
      password: '',
      cuttatus: false
    }
  },
  methods: {
    goIndex() {
      // 测试本地数据，并获取
      // 方法1(本来有账号)
      // fetch('a.json')
      //   .then(res => {
      //     return res.json()
      //   })
      //   .then(res => {
      //     var obj = res.data[0]
      //     console.log(obj)

      //     if (this.username !== obj.name) {
      //       this.$message.error('账号错误')
      //       this.username = ''
      //     } else if (this.password !== obj.password) {
      //       this.$message.error('密码错误')
      //       this.password = ''
      //     } else if (
      //       this.username === obj.name &&
      //       this.password === obj.password
      //     ) {
      //       this.$message({
      //         message: '恭喜你，登录成功',
      //         type: 'success'
      //       })
      //       this.$router.push('index')
      //     }
      //   })
      // 方法2（没有账号）
      // 1.先获取本地存储的userinfo,并转化成JSON对象
      // var loginUserInfo = JSON.parse(sessionStorage.getItem('userinfo'))
      var loginUserInfo = JSON.parse(localStorage.getItem('userinfo'))
      console.log(loginUserInfo)
      // 2.校验
      if (this.username === '' && this.password === '') {
        this.$message.error('账号密码不能为空')
      } else if (
        this.username !== loginUserInfo.username &&
        this.password !== loginUserInfo.password
      ) {
        this.$message.error('账号或密码错误')
      } else if (this.username !== loginUserInfo.username) {
        this.$message.error('账号错误')
        this.username = ''
      } else if (this.password !== loginUserInfo.password) {
        this.$message.error('密码错误')
        this.password = ''
      } else if (
        this.username === loginUserInfo.username &&
        this.password === loginUserInfo.password
      ) {
        this.$message({
          message: '恭喜你，登录成功',
          type: 'success'
        })
        this.cuttatus = true
        this.$router.push('index')
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.background {
  width: 100%;
  height: 100vh;
  background: url('../assets/timg.jpg') no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.from {
  width: 350px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-70%, -50%);
  background: rgba(255, 255, 255, 0.5);
  padding: 30px;
  box-sizing: border-box;
}
.from h2 {
  text-align: center;
  margin-bottom: 40px;
}
.from-username,
.from-password {
  width: 100%;
  height: 40px;
  padding: 5px 5px 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  margin-bottom: 40px;
}
.positionBox {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
  font-size: 14px;
  margin-bottom: 10px;
}
.positionBox .position {
  margin-right: 10px;
  color: rgb(72, 82, 226);
  text-decoration: none;
}
.from button {
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  background: rgb(0, 255, 55);
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
