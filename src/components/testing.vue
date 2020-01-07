<template>
<div class="testing">
  <div class="Tests">
    <h1>Тестирование</h1>
    <blockT v-for="block in blocks" :blocks='block' />
  </div>
</div>
</template>

<script>
import blockT from './blockT.vue'
export default {
  name: 'testing',
  components: {
    blockT
  },
  data() {
    return {
      blocks: [{
          title: 'Ваши навыки управления командой',
          img: 'static/test/blockT-0.png'
        },
        {
          title: 'умеете ли вы правильно мативировать команду',
          img: 'static/test/blockT-1.png'
        },
        {
          title: 'Ваши навыки управления командой',
          img: 'static/test/blockT-2.png'
        },
        {
          title: 'умеете ли вы правильно мативировать команду',
          img: 'static/test/blockT-1.png'
        },
        {
          title: 'Ваши навыки управления командой',
          img: 'static/test/blockT-0.png'
        },
        {
          title: 'умеете ли вы правильно мативировать команду',
          img: 'static/test/blockT-1.png'
        },
        {
          title: 'Ваши навыки управления командой',
          img: 'static/test/blockT-2.png'
        },
        {
          title: 'умеете ли вы правильно мативировать команду',
          img: 'static/test/blockT-1.png'
        },
        {
          title: 'Ваши навыки управления командой',
          img: 'static/test/blockT-0.png'
        },
        {
          title: 'умеете ли вы правильно мативировать команду',
          img: 'static/test/blockT-1.png'
        },
      ],
    }
  },
};
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
