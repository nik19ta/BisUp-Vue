<template id="app-auth">
<div class="form">
  <transition name="component-fade" mode="out-in">
    <login v-if='auth == "login"' @AuthTemplate='AuthTemplate' @Auth='Auth' />
    <registor v-if='auth == "Registop"' @AuthTemplate='AuthTemplate' @reg='reg' />
    <instructionsOnEmail v-if='auth == "FrogotPassword"' @AuthTemplate='AuthTemplate' />
  </transition>
  <div class="footer">
    <div class="first_footer">
      <p>© BusinessUP 2019</p>
    </div>
    <div class="second_footer">
      <a>Пользовательское соглошение</a>
      <a>Партнёрам и инвесторам</a>
      <a>Контакты</a>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
import login from './login.vue'
import registor from './registor.vue'
import instructionsOnEmail from './instructionsOnEmail.vue'
import $ from "jquery"

export default {
  name: 'app',
  data() {
    return {
      auth: 'login'
    }
  },
  components: {
    login,
    registor,
    instructionsOnEmail,
  },
  methods: {
    AuthTemplate(data) {
      this.auth = data;
    },
    Auth(data) {
      let lthis = this;
      let localdata = data;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/login",
        data: {
          login: data.login,
          password: data.pass,
        },
        success: function(data) {
          console.log(data);
          if (localdata.checkbox) {
            lthis.$emit('AuthTrue', data);
          } else {
            lthis.$emit('AuthFalse', data);
          }
        }
      });
    },
    reg(data) {
      let reg = data;
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/reg",
        data: {
          login: data.split(',')[0],
          email: data.split(',')[1],
          password: data.split(',')[2]
        },
        success: function(data) {
          console.log(data);
          $.ajax({
            type: "POST",
            url: "http://91.201.54.66/login",
            data: {
              login: reg.split(',')[0],
              password: reg.split(',')[2],
            },
            success: function(data) {
              console.log(data);
              lthis.$emit('AuthTrue', data);
            }
          });
        }
      });
    }
  }
}
</script>

<style scoped="">
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter {
  opacity: 0;
}

.component-fade-leave-to {
  opacity: 0;
}

#app-auth {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  background: #1d3e51;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #284759;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.footer div {
  color: #93a3ac;
}

.first_footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #93a3ac;
  /* max-width: 50%; */
  /* min-width: 20%; */
}

.second_footer {
  color: #93a3ac;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.second_footer a {
  margin-left: 10px;
  margin-right: 10px;
}

.first_footer p {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
