<template>
  <footer>
    <h1>Erik’s Casino Company©</h1>
    <img src="./img/pillow.png" class="footer-img" alt="bg">
</footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer{
  position: absolute;
  width: 100%;
  bottom: 0%;
  height: 50px;
  flex-shrink: 0;
  background-color: #2F0000;
  box-shadow: 0px 5px 4px 0px rgba(255, 177, 177, 0.50) inset;
}

.footer-img{
  position: absolute;
  display: block;
  bottom: -300%;
  left:10%;
  width: 301px;
  height: 232px;
  flex-shrink: 0;
  transform: translate(-50%, -50%);
}

footer h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;    
  color: rgba(255, 255, 255, 0.60);
  font-size: 24px;

  
}
footer h4{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;    
  color: rgba(255, 255, 255, 0.60);
  font-size: 18px;

  
}
</style>
