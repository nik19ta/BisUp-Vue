<template>
  <div class="resetpassword">
    <div class="all_form">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="inputs">

        <p class="other_input">Ваш <b> старый пароль был сброшен.</b> Теперь вам <br> необходимо установить новый пароль </p>
        <form class="" action="index.html" method="post">
        <p> <input class="input_text" type="text" name="" placeholder="Новый пароль" value=""></p>
        <p> <input class="input_text" type="text" name="" placeholder="Подтвердите новый пароль" value=""></p>
        <button class='btn_input' type="submit" name="button">Сохранить</button>
      </form>
        <p class="other_input_down"> <a >Отменить и оставить старый пароль </a> </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resetpassword',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.resetpassword{
  margin: 0px;
  background: #1d3e51;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}
.all_form{
  width: 450px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.inputs{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

}
.input_text{
  background: #152f3e;
  color: #8a979e;
  padding-left: 20px;
  font-size: 17px;

}
.other_input_down a{
  color: #ff8000;
  text-decoration: none;
  /* margin-left: 10px; */
  font-weight: 530;
}
.other_input_down{
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
.other_input{
  text-align: center;
  vertical-align: top;
  font-size: 15px;
  color: #d4d9dc;
}
.btn_input,.input_text{
  width: 350px;
  height: 45px;
  display: block;
  border-radius: 5px;
  border: solid 0px;
}
.btn_input{
  background: #ff8000;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  width: 350px;
}
.links{
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links img{
  width: 45px;
  margin: 5px;
}
.footer{
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #284759;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
.footer div {
  color:#93a3ac;
  width: 50%;
}
.first_footer{
  display: flex;
  justify-content: center;
  align-items: center;
  color:#93a3ac;
}
.second_footer a{
  color:#93a3ac;
  text-decoration: none;
  margin-left: 20px;
  margin-top: 10px;
  vertical-align: middle;
  height: 40px;
  padding-top: 17px;

}
.second_footer a{
}
@media screen and (max-device-width: 900px) {
  .second_footer{
    display: none;
  }
  .footer{
    justify-content: flex-start;
  }
}
</style>
