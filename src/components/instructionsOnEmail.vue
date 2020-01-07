<template>
<div class="all_form">
  <div class="logo">
    <img src="../assets/logo.png" alt="">
  </div>
  <div class="inputs">
    <p class="other_input"> На ваш адрес электронной почты будет отправленна <br> инструкция для сброса и установки нового пароля</p>
    <form class="" action="index.html" method="post">
      <p> <input class="input_text" type="text" name="" placeholder="Электронная почта" value=""></p>
      <button class='btn_input' type="submit" name="button">Отправить</button>
    </form>
    <p class="other_input_down">
      <a @click='AuthTemplate("login")' class="nav-link">Вернуться к авторизации</a>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'resetpassword',
  props: {
    msg: String
  },
  methods: {
    AuthTemplate(data) {
      this.$emit('AuthTemplate', data);
    },
  }
};
</script>

<style scoped>
.all_form {
  width: 450px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.inputs {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

}

.input_text {
  background: #152f3e;
  color: #8a979e;
  padding-left: 20px;
  font-size: 17px;

}

.other_input_down a {
  color: #ff8000;
  text-decoration: none;
  /* margin-left: 10px; */
  font-weight: 500;
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

.other_input {
  width: 400px;
  height: 45px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;
  font-size: 14px;
  color: #d4d9dc;
  font-weight: 400;
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
    /* display: none; */
  }
}
</style>
