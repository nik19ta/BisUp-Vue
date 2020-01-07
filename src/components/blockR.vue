<template>
  <div class="blockR">
    <p class="bloclR-text-title">Cтань лидером!</p>
    <p class="bloclR-text"> <img src="../assets/beaker.png" alt=""> Вы достигли 25 уровня!</p>
    <p class="bloclR-text"> <img src="../assets/star.png" alt=""> 36 место из 1200 игроков!</p>
    <div class="status-bar">
      <p class='points'>3280 очков</p>
      <p class='points2'>60%</p>
      <progress value="60" max="100"></progress>
    </div>
    <div class="next">
      <a href="#">Перейти к игре ➔</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'blockR',
};
</script>

<style scoped>
.blockR{
  background-color: #fff;
  /* width: 3800px; */
  width: 31%;
  height: auto;
  margin: 1%;
  border-radius: 10px;
}
.points{
  font-size: 12px;
  height: 0px;
  margin-left: 20px;
  color: #3b5767;
  /* position: relative; */
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
.bloclR-text-title{
  margin-left: 20px;
  font-weight: bold;
}
.points2{
  font-size: 12px;
  height: 0px;
  margin-left: 240px;
  color: #3b5767;
  margin-top: 0px;
  margin-top: 10px;
}
.bloclR-text{
  margin-left: 20px;
}
.bloclR-text img{
  width: 20px;
}
.status-bar{
  width: 100%;
  height: 50px;
  background-color: #f3f5f6;
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
}
.next {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.next a{
  margin-left: 20px;
  text-decoration: none;
  color: #a4a5a7;
}
@media screen and (max-device-width: 1250px) {
  .points2{
    margin-left: 200px;
  }
}
@media screen and (max-device-width: 1100px) {
  .blockR{
    background-color: #fff;
    /* width: 3800px; */
    width: 48%;
    height: auto;
    margin: 1%;
    border-radius: 10px;
  }
  .points2{
    margin-left: 200px;
  }
}
@media screen and (max-device-width: 900px) {
  .blockR{
    background-color: #fff;
    width: 380px;
    height: auto;
    margin: 1%;
    border-radius: 10px;
  }
}
</style>
