<template>
  <header>
    <div class="container">
        <nav>
            <ul class="menu">
                <li class="menu_link"><router-link to="/">Index</router-link></li>
                <li class="menu_link"><router-link to="/pay">Cash</router-link></li>
                <li class="menu_link"><router-link to="/games">Games</router-link></li>
                <li class="menu_link"><router-link to="/connect">Connect</router-link></li>
                <li class="menu_link"><router-link to="/games">Account</router-link></li>
            </ul>
        </nav>
    </div>
</header>
</template>

<script>
export default {};
</script>

<style scoped>
/* Стили для шапки, если необходимо */
header{
  margin-top: 10px;
  position: absolute;
  flex-shrink: 0;
  height: 70px;
  background-color: black;
  left: 5%;
  right: 5%;
  border-radius: 10px;
  background: #2F0000;
  box-shadow: 10px 10px 10px 5px #792626;
  z-index: 100;
}

.menu{
  display: flex;
  justify-content: space-between;
  padding: 10px 70px;
  list-style-type: none;
  margin: 0px;
}
.menu_link{
  color: #FFF;
  font-family: Piazzolla;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
    font-size: 24px;
}
</style>
