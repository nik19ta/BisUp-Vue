<template>
<div class="testing">
  <div class="Tests">
    <h1 v-if='show'>Чемпионаты</h1>
    <blockChempionship v-if='show' @click.native='show=!show,championatsdataajax(block)' v-for="block in championats.all" :block='block' />

    <championats @reset='reset' :championatinfo='championatinfo' :addto='addto' :userschampionats='userschampionats' :info='inform' v-if='!show' @championshipFun='championshipFun' />
  </div>
</div>
</template>

<script>
import blockChempionship from './blockChempionship.vue'
import championats from './championats.vue'
import $ from "jquery"

var idblock;

export default {
  name: 'testing',
  props: {
    championats: {},
    inform: {},
  },
  data() {
    return {
      show: true,
      userschampionats: '',
      addto: '',
      championatinfo: '',
    }
  },
  mounted() {
    this.championatMethod()
  },
  components: {
    blockChempionship,
    championats
  },
  methods: {
    championatMethod() {
      this.$emit('Championats', 'st');
    },
    reset() {
      this.$emit('reset', '');
    },
    BlockFun(id) {
      idblock = id;
      this.$emit('BlockFun', idblock);
    },
    championshipFun() {
      this.show = !this.show;
    },
    championatsdataajax(data) {
      this.addto = false;
      this.championatinfo = data;
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66:5000/usersinteam",
        async: false,
        data: {
          users_id: data[7]
        },
        success: function(data) {
          console.log(data.all);
          lthis.userschampionats = data.all;
        }
      });
      for (var i = 0; i < data[7].split(',').length; i++) {
        if (data[7].split(',')[i] == this.inform.id) {
          console.log(true);
          this.addto = true;
        }
      }
    }
  },
};
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.4s ease;
}

.component-fade-enter {
  opacity: 0;
}

.component-fade-leave-to {
  opacity: 0;
}

h1 {
  height: 20px;
}

.testing {
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 60px;
}

.Tests {
  width: 1200px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto -1.5%;
}

h1 {
  width: 100%;
  margin-left: 15px;
}

@media screen and (max-width: 1350px) {
  .Tests {
    width: 90%;
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
