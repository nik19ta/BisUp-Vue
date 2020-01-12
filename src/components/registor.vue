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
    }
  },
  methods: {
    AuthTemplate(data) {
      this.$emit('AuthTemplate', data);
    },
    reg() {
      let email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      console.log($("#login-inp").val().length);
      if ($('#passw1').val() == $('#passw2').val() && email.test($('#email').val()) == true && $("#login-inp").val().length > 3 && $('#passw1').val().length > 7) {
        let data = $("#login-inp").val() + ',' + $('#email').val() + ',' + $('#passw1').val();
        this.$emit('reg', data);
        //
      }
      if ($("#login-inp").val().length < 4) {
        this.statuslogin = 'Слишком короткий логин'
        //
      } else {
        this.statuslogin = ''
      }
      if (email.test($('#email').val()) == false) {
        this.statusemail = 'Не корректный email'
        //
      } else {
        this.statusemail = ''
      }
      if ($('#passw1').val().length < 7) {
        this.statuspass = 'Пароль должен быть меньше 7 символов'
        //
      } else {
        this.statuspass = ''
      }
      if ($('#passw1').val() != $('#passw2').val()) {
        this.statuspass = 'Пароли не совподают'
        //
      } else {
        this.statuspass2 = ''
      }

    },
  }
}
</script>

<style scoped>
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
