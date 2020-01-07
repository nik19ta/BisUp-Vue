<template>
<div class="bottomBar">
  <div class="first_bottom_bar">
    <p>© BusinessUP 2019</p>
  </div>
  <div class="second_bottom_bar">
    <a>Пользовательское соглошение</a>
    <!-- <a>Партнёрам и инвесторам</a> -->
    <router-link class="link-r" to="/partner">Партнёрам и инвесторам</router-link>
    <router-link class="link-r" to="/contact">Контакты</router-link>
    <!-- <a>Контакты</a> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'bottomBar',
}
</script>

<style scoped>
.bottomBar {
  position: fixed;
  width: 100%;
  height: 50px;
  background: #e2e5e9;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}


.first_bottom_bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  color: #7f8083;
  width: 30%;
}

.second_bottom_bar {
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #7f8083;
  text-decoration: none;
  height: 40px;

}

.link-r {
  color: #7f8083;
  text-decoration: none;
}

.second_bottom_bar a,
.link-r {
  font-size: 16px;
  margin-right: 15px;
}

@media screen and (max-device-width: 900px) {

  .second_bottom_bar a,
  .link-r {
    display: none;
  }
}
</style>
