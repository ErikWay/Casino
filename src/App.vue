<!-- src/App.vue -->
<template>
  <div id="app">
    <GamesList />
    <AddGameForm />
  </div>
</template>

<script>
import GamesList from '@/components/GamesList.vue';
import AddGameForm from '@/components/AddGameForm.vue';


export default {
  components: {
    GamesList,
    AddGameForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
