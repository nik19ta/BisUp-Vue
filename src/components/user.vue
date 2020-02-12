<template>
<div class="profile">
  <div class='title-name'>
    <p>Профиль: {{infouser[1]}}</p>
  </div>
  <div class="content-profile">
    <div class="content-profile-child">
      <div class="content-profile-all">
        <img @click='menu()' class='content-profile-image' :src="infouser[8]" alt="Avatar">
      </div>
      <div class="about">
        <div class='online'>{{online}}</div>
        <div class='fio'>{{infouser[4]}}</div>
        <div class="status">{{infouser[1]}}</div>
        <div class="media-all">
          <div class="content">
            <div class='names'>
              <p>Электронная почта:</p>
              <p>День рожденья:</p>
              <p>Пол:</p>
              <p>Город:</p>
            </div>
            <div class='params'>
              <p>{{infouser[2]}}</p>
              <p>{{infouser[5]}}</p>
              <p>{{infouser[6]}}</p>
              <p>{{infouser[7]}}</p>
              <!-- <p>{{infouser[8]}}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rating">
    <h1>Личный рейтинг</h1>
  </div>
  <hr class="line">
  <div class="scroll">

    <div v-for='virt in virtomonikauser' class="blockR">
      <!-- <p>{{virt}}</p> -->
      <p class="bloclR-text-title">{{virt.name}}</p>
      <p class="bloclR-text">
        <img class='image' src="../assets/beaker.png" alt="">
        <span class='text-span'>
          Достиг {{virt.level}} уровня!
        </span>
      </p>
      <!-- <p class="bloclR-text"> <img src="../assets/star.png" alt=""> 36 место из 1200 игроков!</p> -->
      <div class="status-bar">
        <p class='points'></p>
        <p class='points2'>{{Math.round(virt.progress)}}%</p>
        <progress :value="virt.progress" max="100"></progress>
      </div>
      <div class="next">
        <a href="#">Перейти к игре ➔</a>
      </div>
    </div>
    <!-- <div v-else class="rating_flex">
      <p>Нет данных</p>
    </div> -->

  </div>
</div>
</template>

<script>
import $ from "jquery"


export default {
  name: 'prof',
  data() {
    return {
      online: 'error',
      login: localStorage.name,
      infouser: '',
      virtomonikauser: ''
    }
  },
  props: {
    id: {},
  },
  mounted() {
    this.test(this.id)

  },
  created() {},
  methods: {
    ajax() {
      let lthis = this;
      $.ajax({
        type: "GET",
        url: `https://virtonomica.ru/api/vera/main/achievement/browse?user_id=${this.infouser[9]}`,
        CrossDomain: true,
        success: function(data) {
          console.log(data);
          lthis.virtomonikauser = data;
        }
      });
    },
    addTeams() {
      $("#info").addClass("addTeamVisible");
      $(document).mouseup(function(e) {
        var info = $("#info");
        if (!info.is(e.target) && info.has(e.target).length === 0) {
          $("#info").removeClass("addTeamVisible")
          $('.profile').css({
            'filter': 'blur(0px)'
          });
        } else {}
      });
    },
    test(data) {
      var letthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/user",
        data: {
          id: this.id
        },
        success: function(data) {
          letthis.infouser = data.all[0];
          letthis.ajax()
        },
        error: function(error) {}
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
.scroll {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 50px;
  margin: -5px 0px;
}

.rating_flex p {
  padding: 20px;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  font-size: 20px;
}

.blockR {
  background-color: #fff;
  width: 31.3%;
  height: auto;
  margin: 1%;
  border-radius: 10px;
}

.addTeamVisible {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);

}

.text-span {
  margin-left: 25px;
}

.status-bar {
  width: 100%;
  height: 50px;
  background-color: #f3f5f6;
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
}

.points {
  font-size: 12px;
  height: 0px;
  margin-left: 20px;
  color: #3b5767;
  margin-top: 0px;
  margin-top: 10px;
}

progress {
  border: 0;
  width: 90%;
  height: 8px;
  border-radius: 100px;
  margin-left: 20px;
  background: #eeeff2;
}

progress::-webkit-progress-value {
  border-radius: 5px;
  background: #ff7f00;
}

progress::-webkit-progress-bar {
  width: 90%;
  border-radius: 5px;
  background: #eeeff2;
}

progress::-moz-progress-bar {
  border-radius: 5px;
  background: #ff7f00;
}

.points2 {
  font-size: 12px;
  height: 0px;
  margin-left: 300px;
  color: #3b5767;
  margin-top: 0px;
  margin-top: 10px;
}

.bloclR-text img {
  width: 20px;
}


.image {
  position: absolute;
  margin-top: -2px;
}

.bloclR-text {
  margin-left: 20px;
}

.bloclR-text img {
  width: 20px;
}

.bloclR-text-title {
  margin-left: 20px;
  font-weight: bold;
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

.next {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.next a {
  margin-left: 20px;
  text-decoration: none;
  color: #a4a5a7;
}


.profile {
  width: 1200px;
  font-style: normal;
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
  background: #ff4118;
  border-radius: 5px;
  width: 60px;
  padding-left: 13px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 10px;
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

@media screen and (max-width: 1250px) {
  .points2 {
    margin-left: 260px;
  }
}

@media screen and (max-width: 1100px) {

  .rating_flex {
    width: 80%;
  }

  .points2 {
    margin-left: 360px;
  }

  .blockR {
    width: 48%;
    height: auto;
    margin: 1%;
    border-radius: 10px;
  }
}

@media screen and (max-width: 900px) {

  .blockR {
    background-color: #fff;
    width: 380px;
    height: auto;
    margin: 1%;
    border-radius: 10px;
  }

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
