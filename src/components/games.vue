<template>
<div class="testing">
  <div class="Tests">
    <h1>Игры</h1>
    <!-- <div > -->
    <blockG v-for="block in blocks" :blocks='block' />
    <!-- </div> -->
    <div>
    </div>
  </div>
</div>
</template>

<script>
import blockG from './blockG.vue'
export default {
  name: 'games',
  components: {
    blockG
  },
  data() {
    return {
      blocks: [{
          st: '20',
          points: '800',
          img: 'static/test/blockG.png',
          title: 'Стань лидером!',
          text: 'Блогодоря этой игре вы сможете получить новую компетенцию, которая поможет в достижении поставленных целей'
        },
        {
          st: '30',
          points: '1200',
          img: 'static/test/BlockG2.png',
          title: 'Мастер финансов!',
          text: 'Блогодоря этой игре вы сможете получить новую компетенцию, которая поможет в достижении поставленных целей'
        },
        {
          st: '40',
          points: '1600',
          img: 'static/test/BlockG3.png',
          title: 'Стратегическая монополия!',
          text: 'Блогодоря этой игре вы сможете получить новую компетенцию, которая поможет в достижении поставленных целей'
        },
        {
          st: '50',
          points: '2000',
          img: 'static/test/blockG.png',
          title: 'Мастер финансов!',
          text: 'Блогодоря этой игре вы сможете получить новую компетенцию, которая поможет в достижении поставленных целей'
        },
        {
          st: '60',
          points: '2400',
          img: 'static/test/BlockG2.png',
          title: 'Стратегическая монополия!',
          text: 'Блогодоря этой игре вы сможете получить новую компетенцию, которая поможет в достижении поставленных целей'
        },
        {
          st: '70',
          points: '2800',
          img: 'static/test/BlockG3.png',
          title: 'Стань лидером!',
          text: 'Блогодоря этой игре вы сможете получить новую компетенцию, которая поможет в достижении поставленных целей'
        },
      ],
    }
  },
};
</script>

<style scoped>
.testing {
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 60px;

}

.Tests {
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* margin: auto -1.5%; */
}

h1 {
  width: 100%;
  margin-left: 15px;
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
