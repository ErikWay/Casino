<template>
  <form @submit.prevent="registerUser" class = "form-for-auto">

    <label for="username" class = "text-for-auto">Login</label>
    <br><input v-model="username" class="username" name="username" required>

    <br><label for="password" class = "text-for-auto">Password</label>
    <br><input v-model="password" class="password" type="password" required>

    <br><label>ConfirmPassword</label>
    <br><input v-model="confirmPassword" class="password" type="password" required>

    <br><button type="submit" class = "button-for-auto" >Sign In</button>

  </form>
</template>

<script>
import { register } from '@/api.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        await register({
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });
        alert('Регистрация успешна!');
        // Обработка успешной регистрации, например, перенаправление на страницу входа
      } catch (error) {
        console.error('Error during registration:', error);
        // Обработка ошибок, например, вывод сообщения пользователю
          alert('Ошибка регистрации. Пожалуйста, проверьте данные и попробуйте еще раз.');
      }
    },
  },
};
</script>

<style>

</style>
