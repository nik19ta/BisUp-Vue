<template>
<div class="contact">
  <div class="infor">
    <div class="info-text">
      <div class="d-flex">
        <h1>Контакты</h1>
        <p class='text-top'>Наш адрес</p><br>
        <p class="ab-text">
          <b>Москва, Славянский бульвар, дом 34, Безнес центр <br>"Охта Плаза", офис 211 </b>
        </p>
        <p class='text-top'>Электронная почта</p><br>
        <p class="ab-text">
          <b>info@businessUP.com</b>
        </p>
        <p class='text-top'>Телефон</p><br>
        <p class="ab-text">
          <b>+7 (495) 123-456</b>
        </p>

      </div>
      <div class="inputs">
        <h2>Вопросы? Предложения? Пожелания? </h2>

        <form class="" action="" method="post">
          <input class='inp-class' type="text" placeholder="Ваша электронная почта" name="" value="">
          <textarea class='inp-class ' name="name" placeholder="Сообщения" rows="8" cols="40"></textarea>
          <button class='inp-class' type="submit" name="button">Отправить</button>
        </form>
      </div>
    </div>
    <div class="info-map">
      <img class='map' src="../assets/map.png" alt="">
      <div class="we">
        <div class="we-block">
          <p>Мы в социальных сетях </p>
          <div class="we-hr"></div>
          <a class='link-s'> <img src="../assets/vk.png" alt=""> </a>
          <a class='link-s'> <img src="../assets/google.png" alt=""> </a>
          <a class='link-s'> <img src="../assets/facebook.png" alt=""> </a>
          <a class='link-s'> <img src="../assets/odnoklassniki.png" alt=""> </a>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {}
  },
};
</script>

<style scoped>
.contact {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif !important;
  padding-top: 100px;

}

.we-hr {
  width: 200px;
  height: 1px;
  color: silver;
  background: silver;
  margin: 10px;
}

.infor {
  width: 1500px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
}

.ab-text {
  font-size: 16px;
}

.map {
  width: 95%;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px silver;

}

.link-s {
  margin-left: -15px;
  margin-right: 25px;
}



.we-block img {
  border-radius: 100px;
}

.we img {
  width: 40px;
  margin: 50%;
}

.we {
  width: 92%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.we-block {
  width: 62%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

h2 {
  margin-top: 50px;
  font-size: 20px;
}

.text-top {
  color: #535354;
  margin-bottom: -25px;
  margin-top: 20px;
}

.ab-text {
  line-height: 25px;
}

.d-flex {
  margin-top: -40px;
}

input {
  height: 50px;
  padding-left: 5%;
  width: 95%;
  color: #000;
  font-size: 15px;
}

textarea {
  margin-top: 20px;
  height: 200px;
  padding-left: 5%;
  padding-top: 5%;
  width: 95%;
  color: #000;
  font-size: 16px;
  font-family: 'Roboto', sans-serif !important;
}

button {
  margin-top: 20px;
  height: 50px;
  width: 95%;
  color: #fff;
  background-color: #ff7f00 !important;
  font-size: 20px;
  /* font-weight: bold; */
}

.inp-class {
  border: 0 solid;
  background: #fff;
  border-radius: 7px;
}

.info-text h1 {
  font-size: 200%;
}


.info-text {
  width: 30%;
  padding: 20px;

}

.info-map {
  width: 70%;
}

.info-map img {
  border: 0px solid;
}

@media screen and (max-width: 1700px) {
  .info-text {
    padding-left: 20px;

  }
}


@media screen and (max-width: 1500px) {
  /* .infor {
    width: 95%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  } */
}

@media screen and (max-width: 1500px) {
  .info-text {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
  }

  .infor {
    width: 100%;
  }

  .inputs {
    margin-left: 40px;
    margin-top: -20px;
    width: 420px;
  }

  .info-map {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .map {
    width: 75%;
  }

  .we {
    margin-left: 13%;
  }
}

@media screen and (max-width: 1100px) {
  .map {
    width: 90%;
  }

  .we {
    margin-left: 2%;
  }

}

@media screen and (max-width: 900px) {
  .info-text {
    padding-left: 0px;

  }

  .map {
    margin-top: 10%;
  }

  .contact {
    justify-content: center;
  }

  .infor {
    width: 95%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
  }

  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .info-text {
    width: 100%;
  }

  .info-map {
    width: 100%;
  }

  h2 {
    text-align: center;
  }

  .we-block {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .we-block p {
    text-align: center;
    width: 100%;
  }

  .we-hr {
    display: none;
  }

  .inputs {
    margin-left: 0px;
    margin-top: 0px;
  }
}
</style>
