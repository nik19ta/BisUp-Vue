<template>
  <div class="blockT">
    <div class="pick">
      <img :src="`${publicPath}` + blocks.img" alt="">
    </div>
    <div class="title-text">
      <p>{{blocks.title}}</p>
    </div>
    <div class="link-text">
      <p>
        <a>Пройти тестирование ➔</a>
      </p>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'blockT',
  props: ['blocks'],
  data(){
    return{
      publicPath: process.env.BASE_URL,
    }
  },
};
</script>

<style scoped>

.blockT{
  width: 270px;
  height: 340px;
  background: #fff;
  border-radius: 10px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.pick{
  border-radius: 10px;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  /* background-image: url('../up/{{img}}'); */
  /* background-position: cover; */
}
.pick{
  width: 100%;
}
.title-text,.link-text{
  width: 100%;
  height: 20%;
  padding-left: 20px;
}
.link-text a{
  color: #939497;
  font-size: 16px;
}
.blockT:hover a{
  color: #ff8001;
}
.title-text p{
  color: #000;
  font-size: 17px;
  font-weight: 600;
}
@media screen and (max-device-width: 1333px) {
  .blockT{
  }
}
@media screen and (max-device-width: 599px) {
  .blockT{
    width: 300px;
    height: 380px;
  }
}
</style>
