<template>
  <div>
   <HeaderGame />
<div class ="games">
    <img src="../components/img/bgGames.png" alt="bg">
   <div class="gameUnum">
    <div class="container">
        <nav>
            <ul class="payments">
                <li class="menu_item"><div class="pay_link"></div></li>
                <li class="menu_item"><div class="pay_link"></div></li>
                <li class="menu_item"><div class="pay_link"></div></li>
                <li class="menu_item"><div class="pay_link"></div></li>
                <li class="menu_item"><div class="pay_link"></div></li>
            </ul>
        </nav>
    </div>
    <div class="pay_link"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-3 offset-md-1">
                <div class="inputCash">

                </div>
            </div>
            <div class="col-md-3 offset-md-1">
                <div class="inputCash">
                    
                </div>
            </div>
            <div class="col-md-2 offset-md-1">
                <input type="submit" value="Запрос" class = "button-for-pay">
            </div>
        </div>
    </div>
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
  overflow: hidden;

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
.inputCash{
 margin-top: 40px;
  width: 401px;
height: 49px;
flex-shrink: 0;
border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset, 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.button-for-pay{
  margin-top: 40px;

  text-align: center;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;   
  width: 152px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #FFF;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
  background: none;
  color: #FFF;
  font-size: 24px;
}

.button-for-pay:hover {
  background-color: #dddddd2c;
}

.payments{
  display: flex;
  justify-content: space-between;
  padding: 10px 70px;
  list-style-type: none;
  margin: 0px;
}
.payments .pay_link{
  color: #FFF;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  width: 200px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #772727;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;
  margin-top: 50px;
}
</style>
