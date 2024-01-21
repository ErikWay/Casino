<template>
  <form @submit.prevent="registerUser">
    <label>Логин:</label>
    <input v-model="username" required>

    <label>Пароль:</label>
    <input v-model="password" type="password" required>

    <label>Подтвердить пароль:</label>
    <input v-model="confirmPassword" type="password" required>

    <button type="submit">Зарегистрироваться</button>
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

