<template>
  <form @submit.prevent="registerUser" id = "form-for-auto">

    <label for="username" class = "text-for-auto">Login</label>
    <br><input v-model="username" id="username" name="username" required>

    <br><label for="password" class = "text-for-auto">Password</label>
    <br><input v-model="password" id="password" type="password" required>

    <br><label>ConfirmPassword</label>
    <br><input v-model="confirmPassword" id="password" type="password" required>

    <br><button type="submit" class = "button-for-auto" >Sign In</button>

  </form>
</template>

<script>
import { register } from '@/api.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        await register({
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });
        alert('Регистрация успешна!');
        // Обработка успешной регистрации, например, перенаправление на страницу входа
      } catch (error) {
        console.error('Error during registration:', error);
        // Обработка ошибок, например, вывод сообщения пользователю
          alert('Ошибка регистрации. Пожалуйста, проверьте данные и попробуйте еще раз.');
      }
    },
  },
};
</script>

<style>
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
}
.button-for-auto:hover {
    background-color: #dddddd2c;
  }

#form-for-auto{
    position: relative;
    margin-top: 110px;
    margin-left: 100px;
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

</style>
