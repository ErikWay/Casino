<template>
  <div class="gamesGame">
          <img src="./img/PokerImg.png" alt="bg">
            <p>
                {{ game.name }}
                <br><br>{{ game.description }}
                <br>min:{{ game.minBet }}$
            </p>
            <input type="submit" value="Enter" class = "button-for-play">
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

.gamesGame p{
  width: 50%; 
  height: 90%; 
  margin: 10px; 
  position: relative;
  float: left;
  color: #FFF;
  font-family: Piazzolla;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.button-for-play{
  width: 152px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #FFF;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
  background: none;
  color: #FFF;
  position: relative;
  right: 20%;
  bottom: 20%;
  float: right;
}

.button-for-play:hover {
  background-color: #dddddd2c;
}
</style>
