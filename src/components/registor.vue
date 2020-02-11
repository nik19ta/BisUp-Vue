<template>
<div class="registor">
  <div class="all_form">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="inputs">
      <p class="error">{{statuslogin}}</p>
      <p> <input class="input_text" type="text" name="" id='login-inp' placeholder="Логин" value=""></p>
      <p class="error">{{statusemail}}</p>
      <p> <input class="input_text" type="text" name="" id='email' placeholder="Электронная почта" value=""></p>
      <p class="error">{{statuspass}}</p>
      <p class="error">{{statuspass2}}</p>
      <p> <input class="input_text" type="password" name="" id='passw1' placeholder="Пароль" value=""></p>
      <p> <input class="input_text" type="password" name="" id='passw2' placeholder="Подтвердите пароль" value=""></p>
      <button class='btn_input' type="submit" @click="reg" name="button">Регистрация</button>
      <p class="other_input_down">У вас уже есть аккаунт ?<a @click='AuthTemplate("login")' class="nav-link">Авторизироваться</a>
      </p>
    </div>
    <div class="links">
      <a> <img src="../assets/vk.png" alt=""> </a>
      <a> <img src="../assets/facebook.png" alt=""> </a>
      <a> <img src="../assets/google.png" alt=""> </a>
      <a> <img src="../assets/odnoklassniki.png" alt=""> </a>
    </div>
    <div v-if='notificationparams' class="notification">
      <img src="../assets/notification.png" alt="">
      <p class='content-notification'>{{notification}}</p>
    </div>
  </div>
</div>
</template>

<script>
import $ from "jquery"

export default {
  name: 'registor',
  data() {
    return {
      statuslogin: '',
      statusemail: '',
      statuspass: '',
      statuspass2: '',
      // уведомление
      notification: '',
      notificationparams: false,
    }
  },
  methods: {
    notificationfunc(data) {
      let lthis = this;
      setTimeout(function() {
        lthis.notificationparams = true;
        lthis.notification = data;

      }, 0)
      setTimeout(function() {
        lthis.notificationparams = false;
        lthis.notification = '';

      }, 3000)

    },
    AuthTemplate(data) {
      this.$emit('AuthTemplate', data);
    },
    reg() {
      let lthis = this;
      let email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      loginverification()
      emailverification()
      passverification()
      matchpass()

      function loginverification() {
        if ($("#login-inp").val().length < 4) {
          lthis.notificationfunc('Слишком короткий логин')
        } else {
          return true;
        }
      }

      function emailverification() {

        if (email.test($('#email').val()) == false) {
          lthis.notificationfunc('Не корректный email')
        } else {
          return true;
        }
      }

      function passverification() {

        if ($('#passw1').val().length < 7) {
          lthis.notificationfunc('Пароль должен быть меньше 7 символов')

        } else {
          return true;
        }
      }

      function matchpass() {

        if ($('#passw1').val() != $('#passw2').val()) {
          lthis.notificationfunc('Пароли не совподают')

        } else {
          return true;
        }
      }
      if (loginverification() == true && emailverification() == true && passverification() == true && matchpass()) {
        // создание data (логин,пароль,email)
        let data = $("#login-inp").val() + ',' + $('#email').val() + ',' + $('#passw1').val();
        // функция
        lthis.$emit('reg', data);
      }
    },
  }
}
</script>

<style scoped>
.notification {
  position: absolute;
  background: rgb(234, 85, 83);
  bottom: 50px;
  right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 3px;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.notification img {
  width: 35px;
  margin-top: -5px;
  margin-left: -15px;
  margin-right: 5px;
}

.error {
  color: red;
  font-size: 14px;
}

.registor {
  margin: 0px;
  background: #1d3e51;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 40px;
}

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
  padding-left: 20px;
  font-size: 16px;

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
  width: 350px;
  height: 45px;
  display: block;
  border-radius: 5px;
  border: solid 0px;
}

.btn_input {
  background: #ff8000;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  width: 350px;
}

.links {
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.links img {
  width: 45px;
  margin: 5px;
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
