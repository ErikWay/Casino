<template>
  <div>
   <HeaderGame />

<div class ="games">
    <img src="../components/img/bgGames.png" alt="bg">
   <div class="gameUnum">
    <div class ="Connect" id = "4">
        <div class="container">
            <div class="row">
                <div class="col-md-5 offset-md-1">
                    <h1>Connect with Us</h1>
                    <br><br><h5>
                        Complete the contact form below to get in touch with our 
                        <br>team. We are here to answer any questions you may have 
                        <br>and help you with your casino needs.
                    </h5>
                </div>
                <div class="col-md-4 offset-md-1">
                    <form id = "form-for-connect">
                        <div class = "container">
                            <div class="row">
                                <div class="col-md-5 offset-md-0">
                                    <label for="name" class = "text-for-connect" style = "margin-left: -13px;">Name</label>
                                    <br><input type="text" class="connect-name" name="name" required>
                                </div>
                                <div class="col-md-5 offset-md-2">
                                    <label for="e-mail" class = "text-for-connect">E-mail</label>
                                    <br><input type="text" class="connect-e-mail" name="e-mail" required>
                                </div>
                            </div>
                        </div>
                        

                        <br><br><label for="message" class = "text-for-connect">Message</label>
                        <br><input type="text" class="connect-message" name="message" required>
                      
                        <br><br><input type="submit" value="Send" class = "button-for-connect">
                      </form>
                </div>
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




.Connect{
  width: 100%;
  height: 720px;
  background: linear-gradient(0deg, rgba(215, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #2F0000;
}

.Connect .text-for-connect{
  color: #FFF;
  text-align: center;
  font-family: Piazzolla;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

#form-for-connect{
  position: relative;
  margin-top: 110px;
}

.Connect .connect-name{
width: 235px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: #772727;
margin-left: -13px;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.Connect .connect-e-mail{
  width: 240px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;

}

.Connect .connect-message{
  width: 515px;
height: 257px;
flex-shrink: 0;
border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;

}

.button-for-connect{
  position: relative;
  left: 100%;
  transform: translate(-50%, -50%);
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
  margin-top: 20px;
}

.button-for-connect:hover {
  background-color: #dddddd2c;
}

.Connect h1{

  color: #FFF;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.Connect h5{
  color: #FFF;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
