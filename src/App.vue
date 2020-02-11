<template>
<div id="app">
  <div class="content">
    <!-- topBar -->
    <topBar v-if='Auth == "nan"' @invate='invate' :invatedata='countinv' :img='info.info.img' @Championats='Championats' @exit='exit' />
    <!-- роутеры -->
    <transition id='body' v-if='Auth == "nan"' name="component-fade" mode="out-in">

      <router-view @ajax='ajax' @invate='invate' @hardskills='hardskills' @dictfunc='dictfunc' :invatedata='invatedata' @getusers='getusers' @reset='Championats' @Championats='Championats' :inform='info.info' :allteams='allteams'
        :championats='championats' :people='people' :virtomonika='virtomonika' :virtonomika_hard='virtonomika_hard' :dict='dict' />

    </transition>
    <bottomBar v-if='Auth == "nan"' />

    <auth @AuthTrue='AuthTrue' @AuthFalse='AuthFalse' v-if='Auth == "login" || !Auth' />

    <error v-if='Auth == "server"' />


    <div v-if='notificationcparamsp' class="notificationc">
      <img src="../src/assets/notification.png" alt="">
      <p class='content-notificationc'>{{notificationc}}</p>
    </div>
  </div>


</div>
</template>
<script>
import $ from "jquery"

import topBar from './components/topBar.vue'
import Auth from './components/Auth.vue'
import error from './components/error.vue'
import bottomBar from './components/bottomBar.vue'


var letThis = '';

export default {
  name: 'app',
  data() {
    return {
      Auth: localStorage.st,
      allteams: '',
      championats: '',
      info: '',

      virtomonika: '',
      virtonomika_hard: '',
      dict: '',

      people: '',
      // приглашения
      invatedata: '',
      countinv: '',
      // уведомление
      notificationc: '',
      notificationcparamsp: false,
    }
  },
  components: {
    topBar,
    bottomBar,
    Auth,
    error
  },

  created() {
    this.AutoLogIn()
    this.testapi()
  },
  methods: {
    notificationcfunc(data) {
      let lthis = this;
      setTimeout(function() {
        lthis.notificationcparamsp = true;
        lthis.notificationc = data;

      }, 0)
      setTimeout(function() {
        lthis.notificationcparamsp = false;
        lthis.notificationc = '';

      }, 3000)

    },
    invate() {
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/invate",
        acync: false,
        data: {
          id: lthis.info.info.id
        },
        success: function(data) {
          lthis.countinv = data.inform.length;
          lthis.invatedata = data;

        },
        error: function(error) {}
      });
    },
    ajax() {
      let lthis = this;
      $.ajax({
        type: "GET",
        url: `https://virtonomica.ru/api/vera/main/achievement/browse?user_id=${this.info.info.account}`,
        CrossDomain: true,

        success: function(data) {
          lthis.virtomonika = data;
        }
      });
    },
    dictfunc() {
      let lthis = this;
      $.ajax({
        type: "GET",
        url: `https://virtonomica.ru/api/fast/main/knowledge/browse?id==${this.info.info.account}`,
        CrossDomain: true,
        success: function(data) {
          let dict = [];
          for (var key in data) {
            dict.push(data[key])
          }
          lthis.dict = dict;
        }
      });
    },

    hardskills() {
      let lthis = this;
      $.ajax({
        type: "GET",
        url: `https://virtonomica.ru/api/vera/main/user/competences/browse?id=${this.info.info.account}`,
        CrossDomain: true,
        success: function(data) {
          // // console.log(data);
          let virtonomika_hards = [];
          for (var key in data) {
            virtonomika_hards.push(data[key])
          }
          lthis.virtonomika_hard = virtonomika_hards;
        }
      });
    },
    testapi() {
      $.ajax({
        type: "GET",
        url: 'http://localhost:3000/',
        success: function(data) {
          console.log(data);
        }
      });
    },
    Championats() {
      let lethis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/championats",
        data: {},
        success: function(data) {
          lethis.championats = data;
        },
      });
    },
    getusers() {
      let lthis = this;
      // for (var i = 0; i < 1000; i++) {

      $.ajax({
        type: "POST",
        url: 'http://91.201.54.66/getusers',
        CrossDomain: true,
        async: false,
        data: {
          sender: lthis.info.info.id,
        },
        success: function(data) {
          lthis.people = data.users;
        }
      });

      // }
    },
    AuthTrue(data) {
      if (data == 'error') {
        this.notificationcfunc('не верный логин или пароль')
      } else if (data.status == 'ok') {
        let datastrong = data.info.login + ',' + data.info.password;
        datastrong = datastrong.split(',');
        localStorage.name = JSON.stringify(datastrong);
        localStorage.st = 'nan';
        this.info = data;
        this.Auth = 'nan';
      }
    },
    AuthFalse(data) {
      if (data == 'error') {
        this.notificationcfunc('не верный логин или пароль')
      } else if (data.status == 'ok') {
        let datastrong = data.info.login + ',' + data.info.password;
        datastrong = datastrong.split(',');
        this.info = data;
        this.Auth = 'nan';
      }
    },
    AutoLogIn() {
      let lthis = this;
      if (localStorage.st == 'nan') {
        let authdata = JSON.parse(localStorage.name)
        $.ajax({
          type: "POST",
          url: "http://91.201.54.66/login",
          data: {
            login: authdata[0],
            password: authdata[1],
          },
          success: function(data) {
            if (data == 'error') {
              localStorage.st = 'login';
              window.location.reload()
              lthis.Auth = "server";
            } else {
              lthis.info = data;

              setTimeout(async function() {
                $.ajax({
                  type: "POST",
                  url: 'http://91.201.54.66/getusers',
                  CrossDomain: true,
                  async: false,
                  data: {
                    sender: lthis.info.info.id,
                  },
                  success: function(data) {
                    lthis.people = data.users;
                  }
                });
              }, 0);
              //
              setTimeout(async function() {
                $.ajax({
                  type: "POST",
                  url: "http://91.201.54.66/invate",
                  acync: false,
                  data: {
                    id: lthis.info.info.id
                  },
                  success: function(data) {
                    lthis.countinv = data.inform.length;
                    lthis.invatedata = data;
                    console.log(data);

                  },
                  error: function(error) {}
                });
              }, 0)
              setTimeout(async function() {
                lthis.hardskills()
              }, 0)
              setTimeout(async function() {
                lthis.dictfunc()
              }, 0)
              setTimeout(async function() {
                lthis.ajax()
              }, 0)
              //
            }
          }
        });
      }
    },
    exit() {
      this.Auth = 'login';
    },
  },
}
</script>

<style>
.notificationc {
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

.notificationc img {
  width: 35px;
  margin-top: -5px;
  margin-left: -15px;
  margin-right: 5px;
}

button,
a,
#checkbox-id {
  cursor: pointer;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.4s ease;
}

.component-fade-enter {
  opacity: 0;
}

.component-fade-leave-to {
  opacity: 0;
}

@import url('font/stylesheet.css');

* {
  box-sizing: border-box;
}

#app,
body {
  margin: 0px;
  width: 100%;
  background: #eeeff2;
}

#noop {
  visibility: hidden;
  display: none;
}

.registrationOnTheSite {
  width: 100%;
  height: 100%;
  min-height: 100%;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
}

.component {
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

a,
button {
  cursor: pointer;
}
</style>
