<template>
<div class="dialohue">
  <h1>Чат</h1>
  <div class="sarch-input">
    <input class='search' type="text" placeholder="  Поиск по людям, диалогам и сообщениям" name="" value="">
  </div>
  <!--  -->
  <div class="mess">
    <div class="contacts">
      <blockMess v-for="p in people" :people='p' />
    </div>
    <!--  -->
    <div class="messens">
      <div class="Head">
        <h3>Никита Хватов </h3>
        <p>В сети</p>
      </div>
      <div class="messenge">
        <blockM v-for="m in mess" :mess='m' />
      </div>
      <div class="form">
        <img class='pick' src="../assets/Pick.png" alt="">
        <input class="int" type="text" placeholder="Напишите сообщение" name="" value="">
        <button class='otpmess' type="button" name="button">➜</button>
      </div>
    </div>
  </div>
  <!--  -->
</div>
</template>

<script>
import blockMess from './blockMess.vue'
import blockM from './blockM.vue'
export default {
  name: 'testing',
  components: {
    blockMess,
    blockM
  },
  data() {
    return {
      people: [{
          name: 'Хватов Никита ',
          img: 'static/test/blockG2.png',
          mess: 'привет, как у тебя дела ?',
          time: 'Вчера, 20:45'
        },
        {
          name: 'Гамид',
          img: 'static/test/blockG3.png',
          mess: 'привет, как у тебя дела ?',
          time: 'Вчера, 20:45'
        },
      ],
      mess: [{
          name: 'NIkita',
          mess: 'привет, как у тебя дела ?',
          time: 'Вчера, 20:45',
          id: 'you'
        },
        {
          name: 'NIkita2',
          mess: 'привет, как у тебя дела ?',
          time: 'Вчера, 20:45',
          id: 'oth'
        },
        {
          name: 'NIkita',
          mess: 'привет, как у тебя дела ?',
          time: 'Вчера, 20:45',
          id: 'you'
        },
        {
          name: 'NIkita2',
          mess: 'привет, как у тебя дела ?',
          time: 'Вчера, 20:45',
          id: 'oth'
        },
      ],
    }
  },
};
</script>

<style scoped>
.dialohue {
  width: 1170px;
  padding-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;


}

.Tests {
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto -1.5%;
}

.form {
  bottom: 0;
  position: absolute;
  background: #fff;
  border-radius: 0px 0px 10px 10px;
}

.mess {
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;


}

.contacts {
  width: 32%;
  height: 70vh;
  background-color: #fff;
  border-radius: 5px;
  overflow: auto;
}

.messens {
  width: 68%;
  height: 70vh;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 1%;
  position: relative;
}

.Head {
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  border-bottom: solid 1px #efefef;
  position: static;
}

.Head p {
  color: #8a8a8a;
  font-size: 15px;
  margin-top: -25px;
  width: 100%;
}

.Head h3 {
  width: 100%;
  font-size: 21px;
  margin-top: 15px;
}

.form {
  box-shadow: 0 -5px 7px -5px #0003;
  width: 100%;
  height: 5.5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}

.form img {
  width: 30px;
}

button {
  width: 30px;
  height: 30px;
  border: solid 0;
  border-radius: 100px;
  background: #ff7f00;
  color: #fff;
  font-size: 15px;
}

.int {
  width: 85%;
  height: 30px;
  border: solid 0;
  border-radius: 100px;
  background-color: #eeeff2;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 20px;

}

h1 {
  font-size: 33px;
  margin-top: 30px;
}

.messenge {
  overflow-x: auto;
  height: 59vh;
}

.search {
  width: 100%;
  border: solid 0px;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
}

@media screen and (max-width: 500px) {
  .messens {
    display: none;
  }

  .sarch-input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .contacts {
    width: 95%;
  }

  .mess {
    width: 100%;
  }

  .search {
    width: 95%;
  }
}

@media screen and (max-width: 1200px) {}
</style>
