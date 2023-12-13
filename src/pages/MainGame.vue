<!-- src/App.vue -->
<template>
  <div id="app">
<HeaderGame />
<GamesList />
<AddGameForm />
  </div>
</template>

<script>
import GamesList from '@/components/GamesList.vue';
import AddGameForm from '@/components/AddGameForm.vue';
import HeaderGame from '@/components/HeaderGame.vue';


export default {
  components: {
    GamesList,
    AddGameForm,
    HeaderGame,
  },
};
</script>

<style>

</style>
