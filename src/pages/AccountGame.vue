<template>
  <div>
   <HeaderGame />
<div class ="games">
    <img src="../components/img/bgGames.png" alt="bg">
   <div class="gameUnum">
    
        <img src="../components/img/URnaMrya_400x400.jpg" id="acimg" alt="Acccount">
        <h1 class="bionaming"> BIO:</h1>
        <h5 class="bio">
            Welcome to Erik, a premier casino destination in 
            <br>Hometown: Nizhny Tagil 
            <br>Languages:
            Russian , English 
            <br>Mobile telephone:
            +79 is too much anyway 
            <br>Place of work
            VOXYS
            Novocherkassk, since 2023 
            <br>Polit. preferences:
            Monarchical 
            <br>Rel. to smoking:
            Compromise  
            <br>Status:
            Student (Bachelor) 
            <br>Form of study:
            Full-time department 
        </h5>
   </div>
</div>

  <FooterGame />
</div>
</template>

<script>
import FooterGame from '@/components/FooterGame.vue';

import HeaderGame from '@/components/HeaderGame.vue';
export default {
  components: {
    HeaderGame,
    FooterGame
  },
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
#acimg{
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  display: block;
  top:35%;
  left:18%;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  transform: translate(-50%, -50%);
}

.bio{
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  display: block;
  left:50%;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  transform: translate(-50%, -50%);
  color: #FFF;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
}

.bionaming{
  position: absolute;
  color: #FFF;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  left:37%;
  top:-40%;

}
</style>
