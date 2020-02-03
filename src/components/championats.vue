<template lang="html">
  <!-- / -->
  <div class="championshipMore">
  	<!-- <div id="addTeam" class='addTeam'>
  		<h1>Добавление команды</h1>
  		<div class="">
  			<p>Название команды</p>
  			<input id="team_name" type="text" name="team_name" value="">
  			<p>Номинация</p>
  			<input id='team_nomination' type="text" name="team_nomination" value="">
  			<p>Город</p>
  			<textarea id='team_discribtion' name="team_discribtion"></textarea>
  			<button @click='AddToTeamFunc' type="button" placeholder='описание' name="button">Сохранить команду</button>
  		</div>
  	</div> -->
    <!--  -->
  	<!-- <div id="addUserTeam" class='addTeam'>
  		<h1>Пригласить в команду</h1>
  		<div class="">
  			<p>Название команды</p>
  			<input v-model='teamsforinv[0]' readonly  type="text"  value="">
  			<p>Номинация</p>
  			<input id='nomination' type="text" value="">
  			<p>Сопроводительное письмо</p>
  			<textarea id='coverletter'></textarea>
  			<button type="button" placeholder='письмо' @click='invitetoteam' name="button">Пригласить в команду</button>
  		</div>
  	</div> -->
    <!--  -->
    <!-- <div class="bl">
  	<p class='title-link'>
       <span @click="championship" class='par'>Чемпионаты</span>
       <span class='partic'> — {{championatinfo[1]}}</span>
    </p>
  	<h1>{{championatinfo[1]}}</h1>
  	<div class="ab-w">
  		<div class="ab">
  			<p @click='partic=true, teams=false' class='default' :class="[partic ? 'namech' : false]">Участники  ({{userschampionats.length}})
        </p>
  			 <p class='default' :class="[teams ? 'teams' : false]" @click='teamzero(),partic=false,teams=true'> Команды  ({{countteam}})
        </p>
  		</div>
  	</div>
  </div> -->
  	<!-- -->
  	<!-- <div v-if='partic' class="participants">
        <div v-for='users in userschampionats' class="participant ">
          <router-link class="half" :to="{ name: 'user', params: {id:users[0][0]} }">
          <img :src="users[0][8]" alt="">
  				<div class="participant-text">
  					<h3 style="color: #000;">{{users[0][1]}}</h3>
  					<p>{{users[0][4]}}, {{users[0][7]}}</p>
  				</div>
        </router-link>
        	<p @click='addTeams(users[0][0])' v-if='invatetrue'  class='invite'>Пригласить </p>
        </div>
  		<button v-if='!addto' class="participant-btn" @click='addteamUser' type="button" name="button">Присоедениться к чемпионату</button>
  		<button v-if='addto' class="participant-btn" @click='ExitChampionat' type="button" name="button">Выйти из чемпионата</button>
  	</div> -->
  	<!--  -->
    <!-- команды блин -->
  	<!-- <div v-if='teams' class="temsblock">
  		<div class="blocks">
  			<div @click='user(teams)' :id='teams[0]' v-for='teams in teamsch.all' class="blockteams item">
  				<h4> {{teams[1]}}</h4>
  				<p v-if="teams[2]" class='addd'>Участников {{teams[2].split(',').length}}</p>
  				<p class='ab'>{{teams[4]}}</p>
  			</div>
  			<button v-if='addto' class='addteam' @click='invite' type="button" name="button">Добавить команду</button>
  		</div>
  		<div v-if='ids' class="blocks1">
  			<h3>Список участников команды: {{teamnow[1]}}</h3>
  			<div v-for='id of ids' class="blockteamsP"> <img :src="id[0][8]" alt="">
  				<div class="all">
  					<div class="name">
  						<p>{{id[0][1]}}</p>
  					</div>
  					<div class="fio">
  						<p>{{id[0][4]}}, {{id[0][2]}}</p>
  					</div>
  				</div>
  			</div>
  			<div @click='leavefunc' v-if='leave' class="leave">
          <p>Покинуть команду</p>
  			</div>
  		</div>
  	</div> -->
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "championship",
  props: {
    userschampionats: {},
    addto: {},
    championatinfo: {},
    info: {},
    teamsch: {},
    countteam: {},
    invatetrue: {},
    teamsforinv: {}
  },

  data() {
    return {
      partic: true,
      teams: false,
      usersteam: false,
      leave: false,
      ids: "",
      iduser: "",
      teamnow: '',
      users: []
    };
  },
  mounted() {
    this.teamsinfo()
  },
  methods: {
    // teamzero() {
    //   this.ids = ''
    // },
    // leavefunc() {
    //   let lthis = this;
    //   $.ajax({
    //     type: "POST",
    //     url: "http://91.201.54.66/deluser",
    //     CrossDomain: true,
    //     data: {
    //       userid: this.info.id,
    //       teamid: this.teamnow[1],
    //     },
    //     success: function(data) {
    //       lthis.leave = false;
    //       let arruser = lthis.teamnow[2].split(',');
    //       for (var i = 0; i < arruser.length; i++) {
    //         if (arruser[i] == lthis.info.id) {
    //           lthis.teamnow[2] = arruser.splice(arruser[0][i - 1]).join();
    //           lthis.user(lthis.teamnow);
    //           break;
    //         }
    //       }
    //     },
    //     error: function(error) {
    //       alert('ошибка сервера')
    //     }
    //   });
    //
    // },
    // ExitChampionat() {
    //   let lthis = this;
    //   let teamid = false;
    //   for (var i = 0; i < lthis.users.length; i++) {
    //     if (lthis.users[i].users == lthis.info.id) {
    //       teamid = lthis.users[i].team;
    //     }
    //   }
    //   $.ajax({
    //     type: "POST",
    //     url: "http://91.201.54.66/exitFromChampionat",
    //     CrossDomain: true,
    //     async: false,
    //     data: {
    //       user_id: this.info.id,
    //       championat_id: this.championatinfo[0],
    //       teamid: teamid
    //     },
    //     success: function(data) {
    //       let usersm = lthis.championatinfo[7].split(',');
    //       for (var i = 0; i < lthis.championatinfo[7].split(',').length; i++) {
    //         if (lthis.championatinfo[7].split(',')[i] == lthis.info.id) {
    //           usersm.splice(i)
    //           lthis.$emit('res', usersm)
    //         }
    //       }
    //       lthis.$emit('invatefalse', '')
    //       lthis.$emit('count', '')
    //       alert(data)
    //       if (data == 'участник был капитаном, поэтому и команда удалена!') {
    //         lthis.$emit('addtofunc', '')
    //         lthis.$emit('AddTooTeamFunc', '')
    //         console.log('data');
    //       }
    //       if (data == 'Пользователь удален из чемпионата!') {
    //         lthis.$emit('AddTooTeamFunc', '')
    //         lthis.$emit('addtofunc', '')
    //       }
    //     }
    //   });
    // },
    // addteamUser() {
    //   let lthis = this;
    //   $.ajax({
    //     type: "POST",
    //     url: "http://91.201.54.66/addteamUser",
    //     CrossDomain: true,
    //     async: false,
    //     data: {
    //       id: this.info.id,
    //       championat_id: this.championatinfo[0]
    //     },
    //     success: function(data) {
    //       let arr = [data.all];
    //       if (lthis.userschampionats == '') {
    //         lthis.userschampionats = arr;
    //       } else {
    //         lthis.userschampionats.push(arr);
    //       }
    //       lthis.$emit('addtofunc', '')
    //       lthis.$emit('reset', '')
    //     }
    //   });
    // },
    // invitetoteam() {
    //
    //   let lthis = this;
    //   $("#addUserTeam").removeClass("addTeamVisible");
    //   $.ajax({
    //     type: "POST",
    //     url: "http://91.201.54.66/invatetoadd",
    //     CrossDomain: true,
    //     data: {
    //       nomination: $("#nomination").val(),
    //       coverletter: $("#coverletter").val(),
    //       nameteam: lthis.teamsforinv[0][0],
    //       nameuser: lthis.iduser
    //     },
    //     success: function(data) {
    //       alert(data)
    //     }
    //   });
    // },
    teamsinfo() {
      let usr = [];
      let user = [];
      for (var i = 0; i < this.teamsch.all.length; i++) {
        usr = usr + this.teamsch.all[i][2].split(',') + ',';
        usr = usr.split(',')
        user.push({
          users: this.teamsch.all[i][2].split(','),
          team: this.teamsch.all[i][0]
        })
      }
      for (var i = 0; i < usr.length; i++) {
        if (this.info.id == usr[i]) {
          console.log('ура');

        }
      }
      for (var i = 0; i < user.length; i++) {}
      this.users = user;

      console.log(this.teamsch);
    },
    //
    //
    //
    //
    //
    //
    //

    // AddToTeamFunc() {
    //   let letThis = this;
    //   $.ajax({
    //     type: "POST",
    //     url: "http://91.201.54.66/AddToTeam",
    //     CrossDomain: true,
    //     async: false,
    //     data: {
    //       team_name: $("#team_name").val(),
    //       team_discribtion: $("#team_discribtion").val(),
    //       championat_id: this.championatinfo[0],
    //       team_nomination: $("#team_nomination").val(),
    //       captain_id: letThis.info.id,
    //     },
    //     success: function(data) {
    //       alert(data)
    //       $("#addTeam").removeClass("addTeamVisible");
    //       if (data == 'Команда создана!') {
    //         letThis.$emit('AddTooTeamFunc', '')
    //       }
    //     }
    //   });
    // },
    addTeams(data) {
      this.iduser = data;
      $("#addUserTeam").addClass("addTeamVisible");
      $(document).mouseup(function(e) {
        var addUserTeam = $("#addUserTeam");

        if (
          !addUserTeam.is(e.target) &&
          addUserTeam.has(e.target).length === 0
        ) {
          $("#addUserTeam").removeClass("addTeamVisible");
        } else {

        }
      });
    },
    // invite() {
    //   $("#addTeam").addClass("addTeamVisible");
    //   $(document).mouseup(function(e) {
    //     var addTeam = $("#addTeam");
    //
    //     if (!addTeam.is(e.target) && addTeam.has(e.target).length === 0) {
    //       $("#addTeam").removeClass("addTeamVisible");
    //     } else {}
    //   });
    // },
    // user(data) {
    //   $(".item").css({
    //     background: "#fff",
    //     color: "#000"
    //   });
    //   $("#" + data).css({
    //     background: "#ff7f00",
    //     color: "#fff"
    //   });
    //   //
    //   let lthis = this;
    //   this.teamnow = data;
    //   lthis.leave = false;
    //   $.ajax({
    //     type: "POST",
    //     url: "http://91.201.54.66/usersinteam",
    //     async: false,
    //     data: {
    //       users_id: data[2]
    //     },
    //     success: function(data) {
    //       lthis.ids = data.all;
    //     }
    //   });
    //   for (var i = 0; i < lthis.ids.length; i++) {
    //     if (lthis.ids[i][0][0] == lthis.info.id && lthis.info.id != lthis.teamnow[6]) {
    //       lthis.leave = true;
    //     }
    //   }
    // },
    championship() {
      this.$emit("championshipFun", "");
    },
    chMore() {}
  }
};
</script>

<style lang="css" scoped>

</style>
