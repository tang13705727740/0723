<template>
  <!-- 注册页面 -->
  <div class="bg-register">
    <div class="box">
      <div class="registerBox">
        <div class="username">
          <i class="el-icon-user"></i>
          <input type="text" v-model="username" placeholder="请输入用户名" />
        </div>
        <div class="password">
          <i class="el-icon-unlock"></i>
          <input type="password" v-model="password" placeholder="请输入密码" />
        </div>
        <div class="password">
          <i class="el-icon-unlock"></i>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="请再次确认密码"
          />
        </div>
        <button @click="register">注册</button>
      </div>
      <!-- 温馨提示 -->
      <div class="tips">
        <h3>温馨提示</h3>
        <p>
          ★.用户名格式：不能以数字开头,长度在6~20个字符以内
        </p>
        <p>★.密码格式：请输入6-20位密码(字母及数字组合)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      a: '',
      b: '',
      c: ''
    }
  },
  methods: {
    register() {
      //用户----------不能以数字开头,长度在6~20个字符以内
      var usregular = /^[a-zA-Z]\w{5,20}$/
      if (this.username === '') {
        alert('用户名不能为空')
      } else if (!usregular.test(this.password)) {
        alert('用户名格式错误,请参考温馨提示')
      } else {
        this.a = true
      }

      // 密码----------6-20位密码(字母及数字组合)
      var pdregular = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
      if (this.password === '') {
        alert('密码不能为空')
      } else if (!pdregular.test(this.password)) {
        alert('密码格式错误,请参考温馨提示')
      } else {
        this.b = true
      }
      // 确认密码
      if (this.confirmPassword === '') {
        alert('确认密码不能为空')
      } else if (this.confirmPassword !== this.password) {
        alert('两次输入不一致')
        this.confirmPassword = ''
        this.password = ''
      } else {
        this.c = true
      }

      if (this.a === true && this.b === true && this.c === true) {
        this.$message({
          message: '恭喜你，注册成功',
          type: 'success'
        })
        var obj = {
          username: this.username,
          password: this.password
        }
        var strobj = JSON.stringify(obj)
        // console.log(strobj)
        // 字符串形式--存储信息，判断登录时账号密码是否一致
        // sessionStorage.setItem('userinfo', strobj)
        localStorage.setItem('userinfo', strobj)
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
      }
    }
  }
}
</script>

<style>
input {
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 10px;
  background: none;
}
.bg-register {
  width: 100%;
  height: 100vh;
  background: url('../assets/register.jpg') no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.box {
  width: 450px;
  /* height: 650px; */
  padding: 30px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.5);
}
.registerBox {
  width: 100%;
  /* height: 350px; */
  background: #fff;
  padding: 22px;
  box-sizing: border-box;
}
.username,
.password {
  width: 100%;
  height: 40px;
  padding: 5px 5px 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ddd;
  margin-bottom: 40px;
}
.registerBox button {
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
.tips {
  width: 100%;
  height: 240px;
  background: rgba(255, 255, 255, 0.5);
  padding: 50px;
  box-sizing: border-box;
  font-size: 14px;
  color: rgb(63, 62, 55);
}
</style>
