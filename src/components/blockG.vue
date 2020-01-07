<template>
  <div class="blockT">
    <div class="pick">
      <img :src="`${publicPath}` + blocks.img" alt="">
    </div>
    <div class="title-text">
      <p>{{blocks.title}}</p>
    </div>
    <div class="data-text">
      <p>{{blocks.text}}</p>
    </div>
    <div class="status-bar">
      <p class='points'>{{blocks.points}} очков</p>
      <p class='points2'>{{blocks.st}}%</p>
      <progress :value="blocks.st" max="100"></progress>
    </div>
    <div class="link-text">
      <p><a>Продолжить ➔</a> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blockT',
  props: ['blocks'],
  data(){
    return{
      // img: 'static/test/blockT.png',
      publicPath: process.env.BASE_URL,
    }
  },
};
</script>

<style scoped>
.blockT{
  width: 270px;
  background: #fff;
  border-radius: 12px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  /* cursor: pointer; */

}

.pick{
  border-radius: 10px;
  width: 270px;
  height: 240px;
  display: flex;
  justify-content: center;
}
.title-text,.link-text,.data-text{
  width: 100%;
  padding-left: 18px;
}
.link-text a{
  color: #939497;
  font-size: 15px;
  font-weight: 550
}
.blockT:hover a{
  color: #ff8001;
}
.title-text p{
  color: #000;
  font-size: 16px;
  font-weight: 600;
}
.data-text{
  margin-top: -18px;
  font-size: 14px;
  color: #5c5c5c;
  font-weight: 500
}
.status-bar{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
}
.points{
  font-size: 12px;
  height: 0px;
  margin-left: 20px;
  color: #3b5767;
  margin-top: 0px;
  margin-top: 10px;
}
.points2{
  font-size: 12px;
  height: 0px;
  margin-left: 150px;
  color: #3b5767;
  margin-top: 0px;
  margin-top: 10px;
}
progress {
    border:0;
    width: 90%;
    height:8px;
    border-radius: 100px;
    margin-left: 20px;
    background: #eeeff2;
}
progress::-webkit-progress-value {
    border-radius: 5px;
    background: #ff7f00;
  }
  progress::-webkit-progress-bar {
    width: 90%;
    border-radius: 5px;
    background: #eeeff2;
  }
progress::-moz-progress-bar {
    border-radius: 5px;
    background: #ff7f00;
  }
@media screen and (max-device-width: 900px) {
}
@media screen and (max-device-width: 599px) {
  .blockT{
    width: 270px;
    background: #fff;
    border-radius: 12px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
