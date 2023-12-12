<!-- src/components/GamesList.vue -->
<template>
  <div>
    <h2>Games List</h2>
    <div>
      <GameItem v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

// src/components/GamesList.vue
<script>
import GameItem from './GameItem.vue';
import { getGames } from '@/api.js';

export default {
  data() {
    return {
      games: [],
    };
  },
  methods: {
    fetchGames() {
      getGames().then((response) => {
        this.games = response.data;
      });
    },
  },
  created() {
    this.fetchGames();
  },
  components: {
    GameItem,
  },
};
</script>


<template>
  <div>
    <h2>Games List</h2>
    <div>
      <GameItem v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

