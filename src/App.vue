<template>
<div id="app">
  <div class="content">
    <!-- topBar -->
    <topBar :image='information.info.img' @invatefun='invatefun' @Championats='Championats' @exit='exit' v-if='Auth == "nan" && information' />

    <transition id='body' v-if='Auth == "nan" && information' name="component-fade" mode="out-in">

      <!-- main content -->
      <router-view v-if='information' @server='server' @Championats='Championats' :inform='information.info' :invatedata='invatedata' :allteams='allteams' :championats='championats' />
      <!-- //main content -->

    </transition>
    <bottomBar v-if='Auth == "nan"' />
    <!-- login, register, fp -->
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
      invate: '',
      invatedata: '',
      information: [],
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
    // this.ajax()
  },
  methods: {
    server() {
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66:5000/server",
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
        url: "http://91.201.54.66:5000/server",
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
        url: "http://91.201.54.66:5000/championats",
        data: {},
        success: function(data) {
          lethis.championats = data;
        },
      });
    },
    invatefun() {
      let lethis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66:5000/invate",
        acync: false,
        data: {
          id: lthis.information.id
        },
        success: function(data) {
          lethis.invatedata = data;
        },
        error: function(error) {}
      });
    },
    AuthTrue(data) {
      let datastrong = data.information.login + ',' + data.information.password;
      datastrong = datastrong.split(',');
      localStorage.name = JSON.stringify(datastrong);
      localStorage.st = 'nan';
      this.information = data;
      this.Auth = 'nan';
    },
    AuthFalse(data) {
      let datastrong = data.information.login + ',' + data.information.password;
      datastrong = datastrong.split(',');
      this.information = data;
      this.Auth = 'nan';
    },
    AutoLogIn() {
      let lthis = this;
      if (localStorage.st == 'nan') {
        let authdata = JSON.parse(localStorage.name)
        $.ajax({
          type: "POST",
          url: "http://91.201.54.66:5000/login",
          data: {
            login: authdata[0],
            password: authdata[1],
          },
          success: function(data) {
            if (data == 'error') {
              localStorage.st = 'login';
              window.location.reload()
            } else {
              console.log(data.info);
              lthis.information = data;
            }
          }
        });
      }
    },
    exit() {
      this.Auth = 'login';
      this.invatedata = '';
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
  height: 100vh;
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
  ;
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
  overflow: auto;
}

::-webkit-scrollbar-button {
  background-image: url('');
  background-repeat: no-repeat;
  width: 4px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: #bbc5ca;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background-color: #ff7f00;
}

::-webkit-scrollbar-thumb:hover {}

::-webkit-resizer {
  background-image: url('');
  background-repeat: no-repeat;
  width: 4px;
  height: 0px;
}

::-webkit-scrollbar {
  width: 3px;
}
</style>
