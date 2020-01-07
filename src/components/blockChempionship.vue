<template>
<div id="1" class="blockT" @click="Block">
  <div class="data-title-o">
    <p>{{block[6]}}</p>
    <!-- <div class="tr"></div> -->
  </div>
  <div class="pick">
    <img :src="block[2]" alt="">
  </div>
  <div class="title-text">
    <p>{{block[1]}}</p>
  </div>
  <div class="data-text">
    <p>{{block[3]}}</p>
  </div>
  <div class="link-text">
    <p><a>Подробнее ➔</a></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'blockT',
  props: ['block'],
  data() {
    return {}
  },
  methods: {
    Block() {},
  },
};
</script>

<style scoped>
.blockT {
  width: 270px;
  height: 360px;
  background: #fff;
  border-radius: 10px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  cursor: pointer;
  position: relative;
}

.data-title-o {
  position: absolute;
  background: #fff;
  width: 170px;
  opacity: 0;
  vertical-align: middle;
  text-align: center;
  transition: all 0.4s;
}

.data-title-o::after {
  content: '';
  position: absolute;
  border: 8px solid transparent;
  border-top: 8px solid #eeeff2;
  margin-left: 55px;
}


.blockT:hover .data-title-o {
  opacity: 1;
  height: auto;
  border-radius: 5px;
  background: #eeeff2;
  margin-top: 30%;

}

.pick {
  border-radius: 10px;
  width: 270px;
  height: 240px;
  display: flex;
}

.pick img {
  width: 270px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

}

.title-text,
.link-text,
.data-text {
  width: 100%;
  padding-left: 15px;
}

.link-text p {
  color: #939497;
  font-size: 16px;
  font-weight: 550;
  margin-top: -10px;
}

.data-text {
  margin-top: -18px;
  font-size: 14px;
  color: #5c5c5c;
  font-weight: 550
}

.blockT:hover a {
  color: #ff8001;
}

.title-text p {
  color: #000;
  font-size: 16px;
  font-weight: 600;
}

@media screen and (max-device-width: 900px) {}
</style>
