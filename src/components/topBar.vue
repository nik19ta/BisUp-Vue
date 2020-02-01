<template>
<div class="top">
  <div class="topBar">

    <div class="menu-mob">
      <img @click='menumobile' src="../assets/menu.png" alt="">
    </div>
    <router-link class="logo" id='testing' @click='' to="/"><img class="logotip" src="../assets/logo.png" alt=""></router-link>
    <div class="menu">
      <router-link id='tests' @click.native='menunav("tests")' class="link" to="/testing">Тесты</router-link>
      <router-link id='games' @click.native='menunav("games")' class="link" to="/games">Игры</router-link>
      <router-link id='chempionats' @click.native='menunav("chempionats"),chempionats("data")' class="link" to="/championats">Чемпионаты</router-link>
      <router-link id='video' @click.native='menunav("video")' class="link" to="/video">Видео</router-link>
      <router-link id='dialogue' @click.native='menunav("dialogue")' class="link" to="/chat">Диалоги</router-link>
      <router-link id='partner' @click.native='menunav("partner")' class="link" to="/partner">Партнёрам</router-link>
      <router-link id='contact' @click.native='menunav("contact")' class="link" to="/contact">Контакты</router-link>
    </div>
    <div class="prof">
      <transition name="component-fade" mode="out-in">
        <div id="dop" class="dop ">
          <!-- <div class="trap">
        </div> -->
          <router-link class="link-r" to="/">Профиль</router-link>
          <router-link class="link-r" to="/chat">Сообщения </router-link>
          <router-link class="link-r" to="/invite">Приглашения </router-link>
          <router-link @click.native='exit' class="link-r" to="/">Выход</router-link>
        </div>
      </transition>

      <div class="btn">
        <img class='button' @click='menu_top' :src="image" alt="click">
      </div>
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
    menumobile() {
      $(".menu").addClass("menu-block");

      $(document).mouseup(function(e) {
        var dop = $(".menu");
        if (!dop.is(e.target) && dop.has(e.target).length === 0) {
          $(".menu").removeClass("menu-block")
        } else {
          $(".menu").removeClass("menu-block")
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
.menu-mob,
.menu-mob-all {
  display: none;
}

.num {
  color: #fe8030;
}

.menu-mob img {
  width: 40px;
}

.topBar {
  width: 100%;
  max-width: 1400px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
}

.top {
  background: #1d3e51;
  justify-content: center;
  margin: 0px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 9;
}

.dop {
  width: 160px;
  height: 125px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 1px #0003;
  font-size: 14px;
  padding: 10px 20px 10px 20px;
  right: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 500;
  position: absolute;
  transform: translateY(-93px);
  visibility: hidden;
  transition: all 0.3s !important;
  opacity: 0;
}

.dopclick {
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
}


.menu a {
  color: #b6c0c7;
  text-decoration: none;
  font-size: 90%;
}

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
  /* margin-left: 100px; */
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

@media screen and (max-width: 1600px) {
  .dop {
    right: 115px;
  }
}

@media screen and (max-width: 1300px) {
  .dop {
    right: 80px;
  }
}

@media screen and (max-width: 1100px) {
  .dop {
    right: 50px;
  }
}

@media screen and (max-width: 1000px) {

  .menu {
    display: none;
    position: absolute;
    background: #1d3e51;
    top: 60px;
    left: 0;
    width: 100%;
    height: 200px;
    padding-left: 20px;
  }

  .menu-block {
    display: block;
  }

  .topBar {
    justify-content: space-between;
  }

  .menu-mob {
    display: block;
  }

  .menu a {
    display: block;
    padding: 6px;
  }

  .link::before,
  .link::after,
  .test::before,
  .test::before {
    display: none;
  }

  .dop {
    right: 25px;
  }
}
</style>
