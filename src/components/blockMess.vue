<template lang="html">
  <div class="contact">
    <div class="logo">
      <img :src="`${publicPath}` + people.img" alt="">
    </div>
    <div class="text">
      <h4>{{people.name}}</h4>
      <p class='so'>{{people.mess}}</p>
      <p class='time'>{{people.time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'people',
  props: ['people'],
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
}
</script>

<style lang="css" scoped>
.contact{
  width: 100%;
  height: 86px;
  border-bottom:solid 1px #efefef;
  display: flex;
  justify-content: space-between;
}
.logo{
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact:first-child{
  border-left: 6px #ff7f00 solid;
}
.logo img{
  width: 55px;
  height: 55px;
  border-radius: 100px;
}
.text{
  width: 76%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 6px;
}
h4{
  transform: translateY(-3px);
}
.so{
  width: 100%;
  font-size: 16px;
  transform: translateY(-37px);
  color: #363636;
}
.time{
  width: 100%;
  font-size: 13px;
  transform: translateY(-62px);
  color: #a0a0a0;

}
@media screen and (max-device-width: 1200px) {
  .contact{
    width: 100%;
  }
}
</style>
