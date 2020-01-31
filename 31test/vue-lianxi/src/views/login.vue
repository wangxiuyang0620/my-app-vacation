<template>
  <div>
    <van-field v-model="username" placeholder="请输入用户名" />
    <van-field v-model="password" placeholder="请输入密码" />

    <van-button type="primary" v-show="!isShow" @click="loginIn('/login')">登录</van-button>
    <p v-show="!isShow" @click=" isShow=! isShow">没有账号，去注册</p>

    <van-button type="danger" v-show=" isShow" @click="loginIn('/register')">注册</van-button>
    <p v-show=" isShow" @click=" isShow=! isShow">已有账号，去登录</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      isShow: false
    };
  },
  methods: {
    async loginIn(url) {
      const { username, password, $http } = this;
      if(username === ''){
        alert('用户名不能为空')
        return
      }
       if(password === ''){
        alert('密码不能为空')
        return
      }
      let data=await $http('post',url,{username,password});
      if(data.data.code===200){
        
        alert(data.data.msg)
        localStorage.setItem('token',data.data.token)
        this.$router.push('/home')
        return
      }
      if(data.data.code===202){
        alert(data.data.msg)
        this.isShow=false
        return
      }
      alert(data.data.msg)
     }
    }
  };

</script>

<style>
</style>