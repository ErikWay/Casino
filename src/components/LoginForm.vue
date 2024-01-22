<template>
  <form @submit.prevent="loginUser" class = "form-for-auto">
    <label for="username" class = "text-for-auto">Login</label>
    <br><input v-model="username" class="username" name="username" required>

    <br><br><label for="password" class = "text-for-auto">Password</label>
    <br><input v-model="password" class="password" type="password" required>

    <br><br><button type="submit" class = "button-for-auto" >Log In</button>
  </form>
</template>

<script>
import { login } from '@/api.js';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        await login({
          username: this.username,
          password: this.password,
        }, { withCredentials: true });
        //alert('Авторизация успешна!');
        this.$router.push('/account'); // Перенаправление после успешной авторизации
        // Обработка успешного входа, например, перенаправление на домашнюю страницу
      } catch (error) {
        console.error('Error during login:', error);
        // Обработка ошибок, например, вывод сообщения пользователю
                alert('Ошибка авторизации. Пожалуйста, проверьте данные и попробуйте еще раз.');
      }
    },
  },
};
</script>

<style>


</style>
