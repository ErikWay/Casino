<template>
  <div class="game-item">
    <h3>{{ game.name }}</h3>
    <p>{{ game.description }}</p>
    <p>Minimum Bet: {{ game.minBet }}</p>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
};
</script>

<style scoped>
.game-item {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
}
</style>
