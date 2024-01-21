<template>
  <div>
    <h1>Личный кабинет</h1>
    <p>Username: {{ username }}</p>
    <button @click="logout">Выйти</button>
  </div>
</template>

<script>
import { checkAuthStatus } from '@/api.js';
import { logoutAcc } from '@/api.js';

export default {
  data() {
    return {
      username: null,
    };
  },
  async mounted() {
    this.checkAuth(); // Вызываем checkAuth при монтировании компонента
  },
  methods: {
    async checkAuth() {
      try {
        const response = await checkAuthStatus();
        if (response.data.authenticated) {
          this.username = response.data.username;
        } else {
          this.$router.push('/'); // Выход
          alert('Перенаправление, если пользователь не авторизован');
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        this.$router.push('/'); // Перенаправление в случае ошибки
        alert('Перенаправление в случае ошибки');
      }
    },
    async logout() {
    try {
      await logoutAcc();
      this.username = null; // Сброс значения имени пользователя
      this.$router.push('/'); // Перенаправление после выхода из аккаунта
      alert('Выход');
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Ошибка выхода');
    }
  },
  },
};
</script>
