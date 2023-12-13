<!-- src/components/AddGameForm.vue -->
<template>
  <div>
    <div class="gamesGame" @click="showModal" id="showModalBtn">
      <img src="./img/icons8-плюс.svg" style="left:30%; width:30%" alt="bg">
    </div>
  
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close" id="closeModalBtn" @click="closeModal">&times;</span>
        <form id = "form-for-auto" @submit.prevent="addGame" >
          <label for="username" class = "text-for-auto">Game name: </label>
          <br><input v-model="name" required id="username">
    
          <br><label for="description" class = "text-for-auto">Description: </label>
          <br><input v-model="description" required style="height: 90px;" id="password">

          <br><label for="bid" class = "text-for-auto" >Min bid: </label>
          <br><input v-model="minBet" type="number" required id="password">
        
          <br><br><button type="submit" class = "button-for-auto" @click="closeModal">Добавить игру</button>
        </form>
      </div>
    </div>
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
    showModal() {
      document.getElementById('modal').style.display = 'block';
    },
    closeModal() {
      document.getElementById('modal').style.display = 'none';
    },
    async addGame() {
      try {
        await addGame({
          name: this.name,
          description: this.description,
          minBet: this.minBet,
        });

        this.name = this.description = this.minBet = '';
      } catch (error) {
        console.error('Error adding game:', error);
      }
    },
  },
};

</script>

<style>
.gamesGame{
    padding: 20px;
    width: 30%;
    height: 40%;
    border-radius: 20px;
    background: #2F0000;
    box-shadow: 10px 10px 10px 0px rgba(79, 64, 64, 0.50) inset, 10px 10px 10px 0px rgba(1, 0, 0, 0.50);
    margin: 30px;
    display: inline-block;
    cursor: pointer;

}

.gamesGame img{
  width: 40%; 
  height: 90%;
  margin: 10px; 
  position: relative;
  float: left;
}

  #showModalBtn{
    cursor: pointer;
  }
  #closeModalBtn{
    cursor: pointer;
  }

  #modal {
    display: none;
    position: fixed;
    float: bottom;
    top: 50%;
    left: 50%;
    bottom: 1%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    background: #2F0000;
    box-shadow: 10px 10px 10px 0px rgba(79, 64, 64, 0.50) inset, 10px 10px 10px 0px rgba(1, 0, 0, 0.50);

  }
  
 body .modal-content {
    position: relative;
    background-color: rgba(255, 0, 0, 0);
    border: none;
    color:white;

  }
  
  .close {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 50px;
    cursor: pointer;
  }
#username{
    width: 260px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;
}
#password{
    width: 260px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;
}
.text-for-auto{
    color: #FFF;
text-align: center;
font-family: Piazzolla;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
}



.button-for-auto{
    width: 152px;
height: 53px;
flex-shrink: 0;
border-radius: 10px;
border: 2px solid #FFF;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
background: none;
color: #FFF;
text-align: center;

}
.button-for-auto:hover {
    background-color: #dddddd2c;
  }

#form-for-auto{
    position: relative;
    margin-top: 50px;
    margin-left: 100px;
}
</style>
