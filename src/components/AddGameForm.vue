<!-- src/components/AddGameForm.vue -->
<template>
  <div>
    <h2>Добавить игру</h2>
    <form @submit.prevent="addGame">
      <label>Название: <input v-model="name" required></label><br>
      <label>Описание: <input v-model="description" required></label><br>
      <label>Минимальная ставка: <input v-model="minBet" type="number" required></label><br>
      <button type="submit">Добавить игру</button>
    </form>
  </div>
</template>

// src/components/AddGameForm.vue
<script>
import { addGame } from '@/api.js';

export default {
  data() {
    return {
      name: '',
      description: '',
      minBet: 0,
    };
  },
  methods: {
    async addGame() {
      try {
        await addGame({
          name: this.name,
          description: this.description,
          minBet: this.minBet,
        });

        // После успешного добавления, обновите список игр, вызвав метод fetchGames,
        // который вызывает getGames.
        // Пример: this.$emit('game-added');
        // Обновите список игр, чтобы отразить добавленную игру.
        // Пример: this.fetchGames();

        // Очистите форму после добавления игры.
        this.name = this.description = this.minBet = '';
      } catch (error) {
        console.error('Error adding game:', error);
      }
    },
  },
};
</script>

