<template>
  <header>
    <div class="container">
        <nav>
            <ul class="menu">
                <li ><router-link to="/main" class="menu_link">Index</router-link></li>
                <li ><router-link to="/pay" class="menu_link">Cash</router-link></li>
                <li ><router-link to="/games" class="menu_link" style=" font-size: 32px;text-shadow: #FC0 1px 0 10px;">Games</router-link></li>
                <li ><router-link to="/connect" class="menu_link">Connect</router-link></li>
                <li ><router-link to="/account" class="menu_link">Account</router-link></li>
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
    text-decoration: none;

}

.menu{
  display: flex;
  justify-content: space-between;

  padding: 10px 70px;
    padding-top:18px;
  list-style-type: none;
  margin: 0px;
    text-decoration: none;

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
