<template>
  <body>
    <div class="container">
      <div id="app">
        <h1>百度搜索</h1>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="text"
              v-model="msg"
              @keyup="getData"
              @keydown.down="putDown"
              @keydown.up.prevent="putUp"
              @keydown.enter="goSearch"
            />
          </div>
        </form>
        <ul class="list-group">
          <li
            v-for="(item, i) in ary"
            :key="i"
            class="list-group-item"
            :class="{ active: index === i }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    </template>
    <script>
        export default {
            data(){
                return
            },
            new Vue({
        el: '#app',
        data: {
          msg: '',
          ary: [],
          index: 0
        },
       
      
        methods: {
          getData(e) {
            //当按下键和上键时，阻止搜索功能；
            if (e.keyCode === 38 || e.keyCode === 40) return
            //发送jsonp请求，跨域获取数据
            if (this.msg !== '') {
              this.$http
                .jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
                  params: {
                    wd: this.msg
                  },
                  jsonp: 'cb'
                })
                .then(res => {
                  this.ary = res.body.s
                })
            } else {
              this.ary = []
            }
          },
          putDown() {
            //按下键，让对应的变亮，主要是改变this.index的值
            this.index++
            this.index %= this.ary.length
            //更新文本框中的数据
            this.msg = this.ary[this.index]
          },
          putUp() {
            //按上键，让对应的变亮
            this.index--
            if (this.index < 0) {
              this.index = this.ary.length - 1
            }
            this.msg = this.ary[this.index]
          },
          goSearch() {
            //按下回车键，跳转搜索
            window.open(`https://www.baidu.com/s?wd=${this.msg}`, '_blank')
          }
        }
      })
       }
    </script>
  </body>
</html>
