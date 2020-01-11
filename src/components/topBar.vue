<template>
<div class="topBar">
  <router-link class="logo" id='testing' @click='' to="/"><img class="logotip" src="../assets/logo.png" alt=""></router-link>
  <div class="menu-mob">
    <img @click='menumob = !menumob' src="../assets/menu.png" alt="">

  </div>
  <div @click='menumob = !menumob' v-if='menumob' class="menu-mob-all">
    <router-link to="/testing" class="testing">Тестирование</router-link>
    <router-link to="/games" class="testing">Игры</router-link>
    <router-link @click.native='chempionats' to="/championats">Чемпионаты</router-link>
    <router-link to="/video">Видео</router-link>
    <router-link to="/dialogue" @click.native="menunav('testing')">Диалоги</router-link>
    <router-link to="/partner">Партнёрам</router-link>
    <router-link to="/contact">Контакты</router-link>
  </div>
  <div class="menu">
    <router-link id='tests' @click.native='menunav("tests")' class="link" to="/testing">Тесты</router-link>
    <router-link id='games' @click.native='menunav("games")' class="link" to="/games">Игры</router-link>
    <router-link id='chempionats' @click.native='menunav("chempionats"),chempionats("data")' class="link" to="/championats">Чемпионаты</router-link>
    <router-link id='video' @click.native='menunav("video")' class="link" to="/video">Видео</router-link>
    <router-link id='dialogue' @click.native='menunav("dialogue")' class="link" to="/dialogue">Диалоги</router-link>
    <router-link id='partner' @click.native='menunav("partner")' class="link" to="/partner">Партнёрам</router-link>
    <router-link id='contact' @click.native='menunav("contact")' class="link" to="/contact">Контакты</router-link>
  </div>
  <div class="prof">
    <transition name="component-fade" mode="out-in">

      <div id="dop" class="dop ">
        <div class="trap">
        </div>
        <router-link class="link-r" to="/">Профиль</router-link>
        <router-link class="link-r" to="/dialogue">Сообщения
          <!-- <span class='num'> (0)</span> -->
        </router-link>
        <router-link class="link-r" to="/invite">Приглашения
          <!--  <span class='num'> (0)</span>  -->
        </router-link>
        <router-link @click.native='exit' class="link-r" to="/">Выход</router-link>

      </div>
    </transition>

    <div class="btn">
      <img class='button' @click='menu_top' :src="image" alt="click">
    </div>
  </div>
</div>
</template>

<script>
import $ from "jquery"

export default {
  name: 'resetpassword',
  props: ['image'],
  data() {
    return {
      menu: false,
      menumob: false,
    }
  },
  mounted() {},
  methods: {
    menu_top() {
      $("#dop").addClass("dopclick");

      $(document).mouseup(function(e) {
        var dop = $("#dop");
        if (!dop.is(e.target) && dop.has(e.target).length === 0) {
          $("#dop").removeClass("dopclick")
        } else {
          $("#dop").removeClass("dopclick")
        }
      });
    },
    menunav(data) {
      $('.link').removeClass("test")
      $("#" + data).addClass("test");
    },
    chempionats() {
      console.log('testch');
      this.$emit('Championats', 'st');
    },
    exit() {
      this.$emit('exit', )
      localStorage.st = 'login';
      localStorage.name = '';
    },
    prof() {}
  },

}
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .2s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

a,
button {
  cursor: pointer;
}

.menu-mob,
.menu-mob-all {
  display: none;
}

.num {
  color: #fe8030;
}

.topBar {
  margin: 0px;
  background: #1d3e51;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: 'Roboto', sans-serif;
  position: fixed;
  top: 0;
  z-index: 999;
}

.dop {
  width: 160px;
  height: 125px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 1px #0003;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 500;
  position: fixed;
  transform: translateY(-93px);
  visibility: hidden;
  transition: all 0.3s !important;
  opacity: 0;
}

.dopclick {
  /* display: flex; */
  visibility: visible;
  opacity: 1;
  transform: translateY(93px);

}

.dop a {
  color: #3e3e3e;
  text-decoration: none;
  font-size: 14px;
  font-weight: Medium;

}

.trap {
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 20px solid #fff;
  top: -5%;
  left: 110px;
  position: absolute;
}

.logotip {
  width: 64px;
  margin-right: 120px;
}


.menu a {
  color: #b6c0c7;
  text-decoration: none;
  font-size: 90%;
}

/*  */
.logo {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.menu {
  width: 700px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
}

.prof {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.btn {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: solid 0px;
  margin-left: 100px;
  border: solid 1px #486271;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  width: 40px;
  height: 40px;
  border-radius: 50px;
}

.link {
  transition: all .7s !important;
}

.link::before {
  content: '';
  display: block;
  background: #eeeff2;
  height: 5px;
  transform: translateY(19px);
  text-decoration: none;
  transition: all .4s;
  opacity: 0;
  width: 100%;
  transition: all .4s;
}

.link::after {
  content: '';
  display: block;
  background: #eeeff2;
  height: 5px;
  transform: translateY(39px);
  text-decoration: none;
  transition: all .4s;
  opacity: 0;
  width: 100%;
  transition: all .4s;

}

.test::before {
  opacity: 1;
  transition: all .4s;
  width: auto;
  transform: translateY(38px);
  background: #ff7f00;

}

.test::after {
  opacity: 1;
  transition: all .4s;
  width: auto;
  transform: translateY(15px);
  background: #ff7f00;

}

.test {
  color: #fff !important;

}

@media screen and (max-device-width: 1300px) {
  .menu {
    width: 80%;
  }

  /* .logo {
    display: none;
  } */

  .btn {
    right: 10%;
  }

  .dop {
    right: 9.5%;
  }

  .dop a {
    color: #3e3e3e;
    text-decoration: none;
    font-size: 14px;
    font-weight: Medium;

  }

  .trap {
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 20px solid #fff;
  }
}

@media screen and (max-width: 900px) {
  .menu-mob-all {
    position: absolute;
    display: block;
    width: 100%;
    top: 60px;
  }

  .menu-mob-all a {
    display: block;
    height: 40px;
    background: #1d3e51;
    width: 100%;
    padding-left: 20px;
    color: #eeeff2;
    font-size: 18px;
  }

  .menu-mob {
    display: block;
    position: absolute;
    height: 100%;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-mob img {
    width: 30px;
  }

  button {
    margin-left: 0px;
  }

  .logo img {
    margin-right: 100px;
  }

  .menu {
    display: none;
  }


  .logo {
    width: 100%;
  }

  button {
    margin-right: 0;
  }

  .dop {
    margin-left: -100px;
  }
}
</style>
