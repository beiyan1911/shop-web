<template>
  <div>
    <h2>登录</h2>
    <div>
      <span>用户名:</span><input type="text" v-model="username"/><br>
      <span>密码:</span><input type="text" v-model="password"/><br>
      <button @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        password: ""
      }


    },
    methods: {
      login: function () {
        console.log(this.username);
        console.log(this.password);
        this.$http.post('token/generate-token',
          {
            username: this.username,
            password: this.password
          }
        ).then(function (res, rep) {
          console.log(res);
          console.log(rep);
          //成功回调
        }, function () {
          //失败回调
        })
      }
    }
  }
</script>
