<template>
  <form @submit.prevent="loginUser">
    <label>Логин:</label>
    <input v-model="username" required>

    <label>Пароль:</label>
    <input v-model="password" type="password" required>

    <button type="submit">Войти</button>
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
