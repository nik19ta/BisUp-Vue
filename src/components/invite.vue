<template>
<div class="testing">
  <div class="Tests">
    <h1>Приглашения</h1>
    <div :id='invate[0]' v-for='invate in invatedata.inform' class="invate_block inv">
      <p class='porag1 porags'>Приглашение в команду: <b>{{invate[2]}}</b> </p>
      <p class='porag3 porags'>Номинация:</p>
      <p> <b> {{invate[3]}}</b> </p>
      <p class='porag5 porags'>сопроводительное письмо:</p>
      <p> {{invate[4]}}</p>
      <a id="click1" @click='invatefun(invate)'>Принять приглашение</a> <br>
      <a id="click2" @click='noteam(invate)'>Отказатся </a>
    </div>

  </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return {

    };
  },
  props: {
    inform: {},
    invatedata: {}
  },
  mounted() {},
  methods: {
    invatefun(data) {
      let lthis = this;
      console.log(data);
      let block = data;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/addUserToTeam",
        data: {
          userId: this.inform.id,
          teamname: data[2],
        },
        success: function(data) {
          lthis.$emit('invate', '')

          $("#" + block[0]).addClass("nan");
          console.log(data);
          alert(data)
        },
        error: function(error) {
          console.log('ошибка ajax запроса');
        }
      });
    },
    async noteam(data) {
      let lthis = this;
      let block = data;

      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/noAddToTeam",
        data: {
          userId: this.inform.id,
          championatId: data[0],
          teamname: data[2],
        },
        success: function(data) {
          setTimeout(function() {
            lthis.$emit('invate', '')
          }, 0)
          $("#" + block[0]).addClass("nan");
          console.log(data);
        },
        error: function(error) {
          console.log('ошибка ajax запроса');
        }
      });
    }
  }
}
</script>

<style scoped>
h1 {
  width: 100%;
  text-align: left;
  margin-left: 15px;
}

.testing {
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 60px;

}

.Tests {
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* margin:; */
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
}

.nan {
  display: none !important;

}

.invite {
  padding-top: 50px;
  width: 90%;
}

.porag1 {
  font-weight: 400;
  font-size: 21px;
}

.porag2 {
  font-weight: 400;
}

.porag3 {
  font-weight: 400;
}

.porag4 {
  font-size: 16px;
  font-weight: 400;
}

.porag5 {
  font-size: 16px;
  font-weight: 400;
}

.porag6 {
  font-size: 16px;
  font-weight: 400;
}

#click1 {
  width: 76%;
  background: #ff8000;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

#click2 {
  width: 76%;
  margin-top: 20px;
  text-align: center;
  color: #ff8000;
  display: block;
  border-radius: 10px;
  height: 50px;

}

.invate_block {
  background: #fff;
  max-width: 570px;
  height: 500px;
  margin-top: 20px;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

p {
  width: 100%;
  text-align: center;
}

h1 {
  padding: 10px;

}

h4 {
  font-size: 17px;
}

.countuser {
  transform: translateY(-16px);
  font-size: 14px;
  color: #717171;
}

.desk {
  transform: translateY(-19px);
  font-size: 14px;
  color: #717171;
}

.invate_blocks {
  width: 100%;
  margin: auto -10px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

@media screen and (max-width: 1200px) {
  .invate_blocks {}

  .invate_block {}
}

@media screen and (max-width: 1350px) {
  .Tests {
    width: 900px;
  }
}

@media screen and (max-width: 1000px) {
  h1 {
    text-align: center;
  }

  .Tests {
    width: 600px;
  }
}

@media screen and (max-width: 599px) {
  h1 {
    text-align: center;
  }

  .Tests {
    width: 100%;
    justify-content: center;
  }
}
</style>
