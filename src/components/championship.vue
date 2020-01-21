<template>
<div class="testing">
  <div class="Tests">
    <h1 v-if='show'>Чемпионаты</h1>
    <blockChempionship v-if='show' @click.native='show=!show,championatsdataajax(block)' v-for="block in championats.all" :block='block' />

    <championats @count='count' @res='res' :teamsforinv='teamsforinv' :invatetrue='invatetrue' :countteam='countteam' :teamsch='teamsch' @reset='reset' :championatinfo='championatinfo' @addtofunc='addtofunc' :addto='addto'
      :userschampionats='userschampionats' :info='inform' v-if='!show' @championshipFun='championshipFun' @AddTooTeamFunc='AddTooTeamFunc' />
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
      addto: false,
      championatinfo: '',
      teamsch: '',
      //
      countteam: '',
      invatetrue: false,
      teamsforinv: ''
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
    count() {
      this.countteam = this.countteam - 1;
    },
    res(data) {
      console.log(data);
      this.userschampionats = '';
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/usersinteam",
        async: false,
        data: {
          users_id: data.join()
        },
        success: function(data) {
          lthis.userschampionats = data.all;
        }
      });
    },
    AddTooTeamFunc() {
      console.log('nik');
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/teamsall",
        CrossDomain: true,
        async: false,
        data: {
          championat_id: this.championatinfo[0]
        },
        success: function(data) {
          lthis.teamsch = data;
          lthis.countteam = lthis.teamsch.all.length;
        }
      });
      for (var i = 0; i < lthis.teamsch.all.length; i++) {

        if (this.inform.id == lthis.teamsch.all[i][6]) {
          $.ajax({
            type: "POST",
            url: "http://91.201.54.66/testin",
            CrossDomain: true,
            async: false,
            data: {
              user: this.inform.id
            },
            success: function(data) {
              lthis.invatetrue = true;
              lthis.teamsforinv = data.list;
            }
          });

        }

      }
    },
    reset() {
      this.$emit('reset', '');
    },
    addtofunc() {
      this.addto = !this.addto;
    },
    BlockFun(id) {
      idblock = id;
      this.$emit('BlockFun', idblock);
    },
    championshipFun() {
      this.show = !this.show;
    },
    championatsdataajax(data) {
      this.invatetrue = false;
      this.userschampionats = '';
      this.addto = false;
      this.championatinfo = data;
      let lthis = this;
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/usersinteam",
        async: false,
        data: {
          users_id: data[7]
        },
        success: function(data) {
          lthis.userschampionats = data.all;
        }
      });
      for (var i = 0; i < data[7].split(',').length; i++) {
        if (data[7].split(',')[i] == this.inform.id) {
          this.addto = true;
        }
      }
      $.ajax({
        type: "POST",
        url: "http://91.201.54.66/teamsall",
        CrossDomain: true,
        async: false,
        data: {
          championat_id: this.championatinfo[0]
        },
        success: function(data) {
          lthis.teamsch = data;
          lthis.countteam = lthis.teamsch.all.length;
        }
      });
      for (var i = 0; i < lthis.teamsch.all.length; i++) {

        if (this.inform.id == lthis.teamsch.all[i][6]) {
          $.ajax({
            type: "POST",
            url: "http://91.201.54.66/testin",
            CrossDomain: true,
            async: false,
            data: {
              user: this.inform.id
            },
            success: function(data) {
              lthis.invatetrue = true;
              lthis.teamsforinv = data.list;
            }
          });

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

@media screen and (max-width: 800px) {
  h1 {
    text-align: center;
  }

  .Tests {
    width: 95%;
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
