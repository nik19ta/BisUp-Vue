<template>
<div id="app">
  <div class="content">
    <!-- topBar -->
    <topBar v-if='Auth == "nan"' :img='img' @Championats='Championats' @exit='exit' />
    <!-- роутеры -->
    <transition id='body' v-if='Auth == "nan"' name="component-fade" mode="out-in">

      <router-view @reset='Championats' @server='server' @Championats='Championats' :inform='info.info' :allteams='allteams' :championats='championats' />

    </transition>
    <bottomBar v-if='Auth == "nan"' />

    <auth @AuthTrue='AuthTrue' @AuthFalse='AuthFalse' v-if='Auth == "login" || !Auth' />

    <error v-if='Auth == "server"' />



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
      info: [],
      img: ''
    }
  },
  components: {
    topBar,
    bottomBar,
    Auth,
    error
  },

  mounted() {
    this.main()
  },
  methods: {
    server() {
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/server",
        acync: false,
        data: {
          server: ''
        },
        success: function(data) {},
        error: function(error) {
          lthis.Auth = "server";
        }
      });
    },
    main() {
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/server",
        acync: false,
        data: {
          server: ''
        },
        success: function(data) {
          lthis.AutoLogIn()
        },
        error: function(error) {
          lthis.Auth = "server";
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
    AuthTrue(data) {
      if (data == 'error') {
        alert('не верный логин или пароль')
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
        alert('не верный логин или пароль')
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
            } else {
              lthis.info = data;
              lthis.img = lthis.info.info.img
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
