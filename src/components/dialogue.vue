<template>
<div class="dialohue">
  <h1>Чат</h1>
  <div class="sarch-input">
    <input class='search' type="text" placeholder="  Поиск по людям, диалогам и сообщениям" name="" value="">
  </div>
  <!--  -->
  <div class="mess">
    <div class="contacts">
      <!-- <blockMess :people='p' /> -->
      <div @click='chat(p)' v-for="p in people">

        <div id="contact" class="contact">
          <div class="logo">
            <img :src="p[1]" alt="">
          </div>
          <div class="text">
            <h4>{{p[0]}}</h4>
            <!-- <p class='so'>{{people}}</p>
            <p class='time'>{{people}}</p> -->
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="messens">
      <div class="Head">
        <h3>{{thisuser}} </h3>
        <!-- <p>В сети</p> -->
      </div>
      <div class="messenge">
        <!-- {{mess.chat}} -->
        <div v-for="m in mess.chat" class="">
          <div class="messagep" :class="[m[3] == inform.id ? 'you' : 'oth']">
            <!-- <div  class=""> -->
            <p>{{m[1]}}</p>
          </div>
        </div>
      </div>
      <form @submit='sendmessage' class="form">
        <img class='pick' src="../assets/Pick.png" alt="">
        <input class="int" type="text" id='message' placeholder="Напишите сообщение" name="" value="">
        <button class='otpmess' type="submit" @click='sendmessage' name="button">➜</button>
      </form>
    </div>
  </div>
</div>
<!--  -->
</div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'testing',
  data() {
    return {
      // сообщения
      mess: [],
      // данный человек
      thisuser: '',
      // id человека
      thisid: ''
    }
  },
  props: {
    people: {},
    inform: {}
  },
  created() {
    this.getusers()
  },
  methods: {
    getusers() {
      if (this.inform) {
        this.$emit('getusers', '')
        console.log('загрузилась')
      }
    },
    chat(data) {
      let lthis = this;
      this.thisuser = data[0]
      this.thisid = data[2]
      console.log(data);
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/getchat",
        CrossDomain: true,
        async: false,
        data: {
          sender: this.inform.id,
          recipient: data[2],
        },
        success: function(data) {
          console.log(data.chat);
          lthis.mess = data
        }
      });
    },
    scrollchat() {
      let scrollHeight = document.querySelector('.messenge').scrollHeight;
      let clientHeight = document.querySelector('.messenge').clientHeight;
      let scrollTop = scrollHeight - clientHeight;
      document.querySelector('.messenge').scrollTop = scrollTop;
    },
    sendmessage() {
      event.preventDefault()
      let lthis = this;
      let mes = '';
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/sendchat",
        CrossDomain: true,
        async: false,
        data: {
          sender: this.inform.id,
          recipient: this.thisid,
          message: $("#message").val()
        },
        success: function(data) {
          let mes = data;
          setTimeout(function functionName() {
            lthis.mess = mes;
          }, )
          setTimeout(function functionName() {
            lthis.scrollchat();
          }, )
        }
      });
    },


  }
};
</script>

<style scoped>
.messagep {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
}

.you {
  padding-left: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.you p {
  max-width: 80%;
  margin: 10px;
  padding: 9px;
  border-radius: 5px;
  background: #fff3cd;
}

.oth {
  /* margin: 10px; */
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.oth p {
  max-width: 80%;
  margin: 10px;
  padding: 9px;
  background: #f5f5f5;
  border-radius: 5px;
}


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
  position: sticky;
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
  cursor: pointer;
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
  font-size: 25px;
}

.int {
  width: 85%;
  height: 35px;
  border: solid 0;
  border-radius: 100px;
  background-color: #eeeff2;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 20px;
  font-size: 16px;

}

h1 {
  font-size: 33px;
  margin-top: 30px;
}

.messenge {
  overflow-x: auto;
  height: 55vh;

}

.search {
  width: 100%;
  border: solid 0px;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
}

.contact {
  width: 100%;
  height: 86px;
  border-bottom: solid 1px #efefef;
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact {
  border-left: 6px #ff7f00 solid;
}

.logo img {
  width: 55px;
  height: 55px;
  border-radius: 100px;
}

.text {
  width: 76%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 6px;
}

h4 {
  transform: translateY(-3px);
}

.so {
  width: 100%;
  font-size: 16px;
  transform: translateY(-37px);
  color: #363636;
}

.time {
  width: 100%;
  /* font-size: 16px; */
  transform: translateY(-62px);
  color: #a0a0a0;

}

@media screen and (max-device-width: 1200px) {
  .contact {
    width: 100%;
  }
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
