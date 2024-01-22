<!-- src/App.vue -->
<template>
<div id="app">
  <HeaderGame />
  <div class ="games">
    <img src="../components/img/bgGames.png" alt="bg">
    <div class="gameUnum">
      <div class = "sort">
        <p>Sort by:</p>
        <select>
          <option>Relative</option>
          <option>Favority</option>
          <option>Rating</option>
        </select>
      </div>
      <GamesList />
      <div id = "addForm"><AddGameForm /></div>
    </div>
  </div>
  <FooterGame />
</div>


</template>

<script>
import GamesList from '@/components/GamesList.vue';
import AddGameForm from '@/components/AddGameForm.vue';
import HeaderGame from '@/components/HeaderGame.vue';
import FooterGame from '@/components/FooterGame.vue';
import { checkAuthStatus } from '@/api.js';


export default {
  components: {
    GamesList,
    AddGameForm,
    HeaderGame,
    FooterGame,
  },
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
          document.getElementById('addForm').style.display = 'block';
        } else {
          document.getElementById('addForm').style.display = 'none';
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        this.$router.push('/'); // Перенаправление в случае ошибки
        alert('Перенаправление в случае ошибки');
      }
    },
  }
};
</script>

<style>

.games{
  flex-shrink: 0;  
  position: relative;
  flex-wrap:wrap;
  overflow-y: hidden;
}

.games img{
  height: 100%;
  width: 100%;
  display: block;
  background-size: cover
}

.gameUnum{
  padding-top: 20px;
  position: absolute;
  width: 80%;
  height: 63%;
  margin-top: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #772727;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;
  left: 50%;
  top:40%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  overflow-x: hidden;
}

.sort{
  position: relative;
  float: top;
  top: 1%;
  left: 2%;
  width: 100%;
  height: 30px;
}

.sort select, .sort p{
  display: inline-block;
  color: #FFF;
  font-family: Piazzolla;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
}

.sort select{
  color: #2F0000;
  width: 20%;
}
</style>
