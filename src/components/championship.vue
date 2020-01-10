<template>
<div class="testing">
  <div class="Tests">
    <h1 v-if='show'>Чемпионаты</h1>
    <blockChempionship v-if='show' @click.native='show=!show,championatsdataajax(block)' v-for="block in championats.all" :block='block' />

    <championats :championatinfo='championatinfo' :addto='addto' :userschampionats='userschampionats' :info='inform' v-if='!show' @championshipFun='championshipFun' />
    <!-- </transition> -->
  </div>
</div>
</template>

<script>
import blockChempionship from './blockChempionship.vue'
import championats from './championats.vue'
import $ from "jquery"

// import VueRouter from 'vue-router'

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
    BlockFun(id) {
      idblock = id;
      this.$emit('BlockFun', idblock);
    },
    championshipFun() {
      this.show = !this.show;
    },
    championatsdataajax(data) {
      this.championatinfo = data;
      if (data[7]) {
        var ids = data[7].split(',');
        var idsM = [];
        for (var i = 0; i < ids.length; i++) {
          $.ajax({
            type: "POST",
            url: "http://91.201.54.66:5000/user",
            CrossDomain: true,
            async: false,
            data: {
              id: ids[i]
            },
            success: function(data) {
              idsM.push(data)
            },
            error: function(error) {}
          });
          this.userschampionats = idsM.all;
        }
        this.userschampionats = idsM;
        for (var i = 0; i < idsM.length; i++) {
          if (idsM[i].all[0][0] == this.inform.id) {
            this.addto = true;
            break;
          } else {
            this.addto = false;
          }
        }
      } else {
        this.addto = false;
        this.userschampionats = '';
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
