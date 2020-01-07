<template>
<div class="all_form">
  <div class="logo">
    <img src="../assets/logo.png" alt="">
  </div>
  <div class="inputs">
    <p> <input class="input_text" id='Login-i' type="text" name="" placeholder="Логин" value=""></p>
    <p> <input class="input_text" id='passw' name="" placeholder="Пароль" type="password" value=""></p>
    <div class="other_input">
      <input checked type="checkbox" id="checkbox-id" />
      <label for="checkbox-id">Запонить меня ?</label>
      <p>
        <!-- <router-link class="nav-link" to="/instructionsOnEmail">Забыли пароль ?</router-link> -->
        <a class="nav-link" @click='AuthTemplate("FrogotPassword")'>Забыли пароль ? </a>
      </p>
    </div>
    <a @click="login()" class="nav-link btn_input"><span>Авторизоваться</span></a>
    <p class="other_input_down">У вас ещё нет аккаунта ?<a class="nav-link" @click='AuthTemplate("Registop")'>Зарегестрироваться</a>
    </p>
  </div>
  <div class="links">
    <a> <img src="../assets/vk.png" alt=""> </a>
    <a> <img src="../assets/facebook.png" alt=""> </a>
    <a> <img src="../assets/google.png" alt=""> </a>
    <a> <img src="../assets/odnoklassniki.png" alt=""> </a>
  </div>
</div>
</template>

<script>
import $ from "jquery"
var st = '';
var lethis = '';
export default {
  name: 'login',
  data() {
    return {
      info: null,
      st: '',
      name: '',
      pass: '',
    }
  },
  methods: {
    AuthTemplate(data) {
      this.$emit('AuthTemplate', data);
    },
    login() {
      if (login() == true && pass() == true) {
        var ls = {
          'login': document.querySelector('#Login-i').value,
          'pass': document.querySelector('#passw').value,
          'checkbox': document.querySelector('#checkbox-id').checked
        }
        this.$emit('Auth', ls);
      }

      function login() {
        if ($('#Login-i').val() == "") {
          $("#Login-i").css("border", "solid 2px #ff4343")
          return false;
        }
        if ($('#Login-i').val() != "") {
          $("#Login-i").css("border", "solid 0px #ff4343")
          return true;
        }
      }

      function pass() {
        if ($('#passw').val() == '') {
          $("#passw").css("border", "solid 2px #ff4343")
          return false;
        }
        if ($('#passw').val() != '') {
          $("#passw").css("border", "solid 0px #ff4343")
          return true;
        }
      }
    },
  }
};
</script>

<style scoped>
.all_form {
  width: 400px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.input_text {
  background: #152f3e;
  color: #8a979e;
  font-size: 16px;
  padding-left: 15px;
}

.other_input a {
  color: #ff8000;
  text-decoration: none;
}

.other_input p {
  color: #fff;
}

.other_input {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;
  margin-bottom: 10px;
}

.other_input_down a {
  color: #ff8000;
  text-decoration: none;
  margin-left: 10px;
}

.other_input_down {
  width: 350px;
  height: 45px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;
  font-size: 15px;
  color: #fff;
}

.btn_input,
.input_text {
  display: block;
  width: 350px;
  height: 45px;
  border-radius: 5px;
  border: solid 0px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .input_text{
    width: 95%;
  } */
.btn_input {
  background: #ff8000;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
}

.links {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.links img {
  width: 45px;
  margin: 5px;
}

input[type="checkbox"] {
  display: none;
}

label {
  color: #fff;
  font-size: 15px;
}

label:before {
  content: " ";
  color: #ff8000;
  display: inline-block;
  margin-right: 10px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  text-indent: 0px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: #152f3e;
  border: 0px solid;
  vertical-align: middle;
}

input:checked+label:before {
  content: "✓";
}

@media screen and (max-device-width: 900px) {
  .second_footer {
    display: none;
  }

  .footer {
    justify-content: flex-start;
  }
}
</style>
