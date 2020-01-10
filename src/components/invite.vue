<template lang="html">
  <div class="content">
  <div class="invite">
    <h1>Приглашения</h1>
    <div class="invate_blocks">
      <div :id='invate[0]' v-for='invate in invatedata.inform' class="invate_block inv">
        <p class='porag1 porags'>Приглашение в команду:</p>
        <p class='porag2 porags'> <b>{{invate[2]}}</b> </p>
        <p class='porag3 porags'>Номинация:</p> <br>
        <p class='porag4 porags'> <b> {{invate[3]}}</b> </p>
        <p class='porag5 porags'>сопроводительное письмо:</p> <br>
        <p class='porag6 porags'>{{invate[4]}}</p>
        <a id="click1" @click='invatefun(invate)'>Принять приглашение</a> <br>
        <a id="click2" @click='noteam(invate)'>Отказатся </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return {
      invatedata: ''
    };
  },
  props: {
    inform: {},
  },
  mounted() {
    this.invate()
  },
  methods: {
    invate() {
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66:5000/invate",
        acync: false,
        data: {
          id: lthis.inform.id
        },
        success: function(data) {
          lthis.invatedata = data;
        },
        error: function(error) {}
      });
    },
    invatefun(data) {
      let block = data;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66:5000/addUserToTeam",
        data: {
          userId: this.inform.id,
          championatId: data[0],
          teamname: data[2],
        },
        success: function(data) {
          $("#" + block[0]).addClass("nan");
          console.log(data);
        },
        error: function(error) {
          console.log('ошибка ajax запроса');
        }
      });
    },
    noteam(data) {
      let block = data;

      $.ajax({
        type: "POST",
        url: "http://91.201.54.66:5000/noAddToTeam",
        data: {
          userId: this.inform.id,
          championatId: data[0],
          teamname: data[2],
        },
        success: function(data) {
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

<style lang="css" scoped>
.content{
  width: 100%;
  display: flex;
  justify-content: center;
}
.nan{
  display: none!important;

}
.invite{
  padding-top: 50px;
  width: 1200px;
}
.porags{
  width: 70%;
  text-align: center;
  display: block;

}
.porag1{
  font-weight: 400;
  font-size: 21px;
}
.porag2{
  font-weight: 400;
}
.porag3{
  font-weight: 400;
}
.porag4{
  font-size: 16px;
  font-weight: 400;
}
.porag5{
  font-size: 16px;
  font-weight: 400;
}
.porag6{
  font-size: 16px;
  font-weight: 400;
}
#click1{
  width: 76%;
  background: #ff8000;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
#click2{
  width: 76%;
  text-align: center;
  color: #ff8000;
  display: block;
  border-radius: 10px;
  height: 50px;

}
.invate_block{
  background: #fff;
  width: 570px;
  height: 515px;
  display: block;
  margin-top: 20px;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
}
p{
  width: 100%;
  text-align: center;
}
h1{
  padding: 10px;

}
h4{
  font-size: 17px;
}
.countuser{
  transform: translateY(-16px);
  font-size: 14px;
  color: #717171;
}
.desk{
  transform: translateY(-19px);
  font-size: 14px;
  color: #717171;
}
.invate_blocks{
  width: 100%;
  margin: auto -10px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
@media screen and (max-width: 1200px) {
  .invate_blocks{
  }
  .invate_block{

}
}
</style>
