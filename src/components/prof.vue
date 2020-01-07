<template>
<div class="profile">
  <div id="info" class='addTeam'>
    <h1>Редактировать данные</h1>
    <div class="">
      <p>Фамилия, Имя, Очество</p>
      <input id="fio" type="text" name="team_name" placeholder="FIO" :value="inform.fio">
      <p>Дата Рождения</p>
      <input id='dataof' type="text" name="" placeholder="19-07-2000" :value="inform.date_of_birth">
      <p>Город</p>
      <input id='city' type="text" name="" placeholder="Moskow" :value="inform.city">
      <button type="button" @click='changedata' placeholder='письмо' name="button">Сохранить изменения</button>
    </div>
  </div>
  <div id="pass" class='addTeam'>
    <h1>Изменения пароля</h1>
    <div class="">
      <p>Старый пароль</p>
      <input id="passw" type="text" name="team_name" placeholder="Введите старый пароль" value="">
      <p>Новый пароль</p>
      <input id='passw1' type="text" name="" placeholder="Придумайте новый пароль" value="">
      <p>Подтверждение нового пароля</p>
      <input id='passw2' type="text" name="" placeholder="Подтвердите новый пароль" value="">
      <button type="button" @click='changepassword' placeholder='письмо' name="button">Сохранить изменения</button>
    </div>
  </div>
  <div class='title-name'>
    <p>Профиль</p>
  </div>
  <div class="content-profile">
    <div class="content-profile-child">
      <div class="content-profile-all">
        <img @click='menu()' class='content-profile-image' :src="inform.img" alt="Avatar">
        <p class='chenge-photo' style="">Изминить фотографию</p>
      </div>
      <div class="about">
        <div class='online'>{{online}}</div>
        <div class='fio'>{{inform.fio}}</div>
        <div class="status">{{inform.login}}</div>
        <div class="media-all">
          <div class="content">
            <div class='names'>
              <p>Электронная почта:</p>
              <p>День рожденья:</p>
              <p>Пол:</p>
              <p>Город:</p>
            </div>
            <div class='params'>
              <p>{{inform.email}}</p>
              <p>{{inform.date_of_birth}}</p>
              <p>{{inform.gender}}</p>
              <p>{{inform.city}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="link-mid">
      <p @click='rddata'>Редактировать данные</p>
      <p @click='ChangePass'>Изменить пароль</p>
    </div>
  </div>
  <div class="rating">
    <h1>
      Личный рейтинг
    </h1>
  </div>
  <hr class="line">
  <div class="rating_flex">
    <p>Нет данных</p>
  </div>
  <div class="rating">
    <h1>Хардскилы</h1>
  </div>
  <hr class="line">
  <div class="rating_flex">
    <p>Нет данных</p>
  </div>

  <div class="rating">
    <h1>Софтскилы</h1>
  </div>
  <hr class="line">
  <div class="rating_flex">
    <p>Нет данных</p>

  </div>
</div>
</template>

<script>
import blockR from './blockR.vue'
import $ from "jquery"


export default {
  name: 'prof',
  props: ['inform'],
  data() {
    return {
      online: 'В сети',
    }
  },
  components: {
    blockR,
  },
  mounted() {},
  methods: {
    rddata() {
      $("#info").addClass("addTeamVisible");
      $(document).mouseup(function(e) {
        var info = $("#info");
        if (!info.is(e.target) && info.has(e.target).length === 0) {
          $("#info").removeClass("addTeamVisible")
        } else {}
      });
    },
    changedata() {
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66:5000/chengedata",
        // url: "http://localhost:5000/chengedata",
        CrossDomain: true,
        data: {
          id: lthis.inform.id,
          login: lthis.inform.login,
          fio: $('#fio').val(),
          dataof: $('#dataof').val(),
          city: $('#city').val(),
        },
        success: function() {}
      });
      $("#info").removeClass("addTeamVisible")
      this.inform.fio = $('#fio').val()
      this.inform.date_of_birth = $('#dataof').val()
      this.inform.city = $('#city').val()
    },
    changepassword() {
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66:5000/changepass",
        // url: "http://localhost:5000/chengedata",
        CrossDomain: true,
        async: false,
        data: {
          passw: $('#passw').val(),
          passw: $('#passw1').val(),
          passw: $('#passw2').val(),
          id: this.inform.id
        },
        success: function() {}
      });
    },
    ChangePass() {
      $("#pass").addClass("addTeamVisible");
      $(document).mouseup(function(e) {
        var pass = $("#pass");

        if (!pass.is(e.target) && pass.has(e.target).length === 0) {
          $("#pass").removeClass("addTeamVisible")

        } else {}
      });
    }
  }
};
</script>

<style scoped>
.rating_flex p {
  /* background: #fff;   */
  padding: 20px;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  font-size: 20px;
}

.addTeam {
  width: 550px;
  height: 560px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  margin: -305px 0 0 -275px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 0px #0003;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s;
  transform: translateY(-850px);
}

.addTeamVisible {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);

}

.addTeamVisibleDown {
  visibility: visible;
  opacity: 1;
  transform: translateY(300px);
  visibility: hidden;
  opacity: 0;
}

.addTeam h1 {
  text-align: center;
  margin-top: -20px;
  transform: translateY(50px);
}

.addTeam div {
  width: 80%;
}

.addTeam div p {
  color: #7f7f7f;
  font-size: 15px;
}

.addTeam input {
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 55px;
  background: #eeeff2;
  padding-left: 20px;
  font-size: 16px;
}

.addTeam textarea {
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 200px;
  background: #eeeff2;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 16px;

}

.addTeam button {
  margin-top: 40px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 60px;
  background: #ff7f00;
  font-size: 18px;
  color: #fff;
  box-shadow: 0px 0px 20px 0px #0003;

}

.profile {
  width: 1200px;
  font-family: 'PF BeauSans Pro' !important;
  font-style: normal;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; */
  padding-top: 60px;
}

.line {
  width: 100%;
  color: #c4cbd1;
}

.status {
  font-size: 108%;
  font-weight: 500;
  color: #4d5d66;
}

.params {
  font-weight: 600;
  color: #363738;
  font-size: 15px;
}

.fio {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
  width: auto;
  color: #060606;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 92%;
  font-size: 15px;
}

.names {
  color: #8f8f91;
  font-weight: 600;
}

.data {
  width: 530px;
  height: 500px;
  background-color: #fff;
  position: fixed;
  box-shadow: 0px 0px 30px 0px #0002;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 200px;
}

.title-data {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
}

.placeholder {
  color: #7f7f7f;
  font-size: 15px;
  text-align: left;
}

.form-data {
  width: 75%;
  height: 90%;
}

.form-data input {
  background: #eeeff2;
  padding-left: 20px;
  width: 95%;
  height: 50px;
  border-radius: 6px;
  border: 0px solid;
  font-size: 20px;
  margin-top: -10px;
}

.form-data button {
  background: #ff7f00;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 0px solid;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0px 0px 20px 0px #0004;
  margin-top: 25px;
}

.close img {
  width: 25px;
  position: fixed;
  float: right;
  margin-left: 400px;
  margin-top: 10px;
  cursor: pointer;
}

.close2 img {
  width: 25px;
  position: fixed;
  float: right;
  margin-left: 360px;
  margin-top: 10px;
  cursor: pointer;
}

.inp {
  font-size: 16px !important;
}

.chenge-photo {
  text-align: center;
  width: 100%;
  color: #ff8000;
  cursor: pointer;
}

.online {
  background: #67fe3e;
  border-radius: 5px;
  width: 60px;
  padding-left: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
}

.content-profile-child {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 650px;
}

.rating_flex {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

.font_bold {
  color: #000;
  padding-left: 15%;
  font-size: 15px;
  font-weight: Regular;
  width: 180px;
}

.about {
  width: 70%;
  height: 100%;
}

.title-name {
  text-align: left;
  font-weight: 700;
  font-size: 35px;
  color: #313132;
  width: 100%;
}

.content-profile-all {
  height: 100%;
  margin-right: 30px;
}

.content-profile {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.content-profile-image {
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 0 solid;
}

.link-mid {
  width: 20% !important;
  text-align: right;
  width: 100%;
  color: #ff8000;
  font-size: 15px;
  font-weight: 500;
  margin-top: -20px;
  cursor: pointer;
}

.rating {
  font-size: 10px;
  font-weight: 400;
  width: 100%;
}

@media screen and (max-width: 1300px) {
  .profile {
    width: 90%;
  }
}

@media screen and (max-width: 1100px) {

  .rating_flex {
    width: 80%;
  }
}

@media screen and (max-width: 900px) {
  .about {
    width: 100%;
  }

  .link-mid p {
    margin-left: 15px;
    margin-right: 15px;
  }

  .content-profile-child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 650px;
  }

  .content-profile-child {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
  }

  .fio {
    width: 100%;
  }

  .media-all {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    /* flex-start */
    ;
  }

  .content {
    width: 90%;
  }

  .title-name {
    font-weight: 900;
    font-size: 35px;
    color: #000;
    text-align: center;
  }

  .rating {
    text-align: center;
    width: 100%;
  }

  .content-profile {
    justify-content: center;
  }

  .link-mid {
    margin-top: 20px;
    width: 75% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .content-profile-all {
    margin-right: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .profile {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .content-profile-child {
    flex-wrap: wrap;
  }

  .rating_flex {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
