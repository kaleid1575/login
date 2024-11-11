<template>
    <div>
      <h2>登录页面</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">用户名</label>
          <input v-model="username" type="text" id="username" required />
        </div>
        <div>
          <label for="password">密码</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">登录</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      handleLogin() {
        if (this.username === '123' && this.password === '123') {
          this.$router.push('/success');
        } else {
          this.errorMessage = '用户名或密码不正确';
        }
      }
    }
  };
  </script>
  