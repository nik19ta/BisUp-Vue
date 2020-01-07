<template>
<div class="partner">
  <div class="flex">
    <!--  -->
    <div class="main">
      <h1>Партнерам и инвесторам</h1>
      <p>BusinessUp каждый день работает на повышение эффективности своей деятельности. Для нас <br>
        важно делать качественные продукты для наших потребителей, поэтому мы находимся в <br>
        постоянном поиске надёжных партнёров для наших проетов. Компания реализует несколько <br>
        проектов в области девелопмента и ресторанного бизнеса. В каждой из этих сфер деятельности <br>
        появляеться всё новые проекты, поэтому мы всё время ищем подрячиков разных <br>
        направленностей.

      </p>
      <p>Со своей стороны мы предлагаем вам выгодные условия сотрудничества, которые <br>
        разрабатываються с учётом ваших и наших потребностей. Если у вас есть интересное предложение <br>
        для нас, мы будем рады рассмотреть его и, возможно, начать работаьб именно с вами.
      </p>
      <p style="line-height: 40px;font-size: 17px;">Дополнительная информация: <b>invest@BusinessUp.com</b></p>
      <hr class='hr-bottom'>
    </div>
    <hr class='hr-right'>
    <div class="statistics">
      <p class='statistic'> <span class='statistic_num'>124 857 </span><br>
        <span class='statistic_text'>Предпринемателей зарегестриованы </span></p>
      <p class='statistic'> <span class='statistic_num'>+ 279 </span><br>
        <span class='statistic_text'>Ежедневно регестрируються </span></p>
      <p class='statistic'> <span class='statistic_num'>180% </span><br>
        <span class='statistic_text'>На столько процентов в среднем увеличилась <br> эффективность предпринимателей после <br>взаимодействия с платформой*</span></p>
      <p class='statistic'> <span class='statistic_num'> 720 911</span><br>
        <span class='statistic_text'>средняя ежемесячная аудитория платфоры </span></p>

    </div>
  </div>
</div>
</template>

<script>
</script>

<style scoped>
.hr-bottom {
  width: 450px;
  float: left;
  margin-top: -15px;
  height: 3px;
  background: #1d3e51;
}

.hr-right {
  width: 3px;
  border: solid 2px #ff7f00;
  height: 520px;
  background: #ff7f00;
  color: #ff7f00;
  margin-left: 40px;
  margin-right: 40px;
}

.statistics {
  width: 32%;
  /* 36 */
}

.main {
  width: 670px;
}

.statistic {
  margin-bottom: 30px;
  margin-top: 10px;
}

.statistic_num {
  font-size: 53px;
  color: #1d3e51;
}

.statistic_text {
  font-size: 17px;
  margin-top: 200px;
}

.partner {
  font-family: 'Roboto', sans-serif;
  /* margin-top: 60px; */
  padding-top: 100px;
  font-size: 16px;
  margin-top: 20px;
}

.main p {
  line-height: 25px;
  font-size: 15px;
}

.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}

@media screen and (max-width: 1140px) {
  .hr-right {
    display: none;
  }

  .main {
    width: 70%;
  }
}

@media screen and (max-width: 900px) {
  .hr-right {
    display: none;
  }

  .hr-bottom {
    /* display: none; */
    /* width: 50%; */
  }

  .main {
    width: 85%;
  }

  .statistics {
    width: 80%;
    padding-bottom: 30px;
  }

  h1 {
    width: 100%;
    text-align: center;
  }

  .hr-bottom {
    width: 100%;
    float: left;
    border: solid 2px #ff7f00;
    height: 4px;
    background: #ff7f00;
    color: #ff7f00;
  }

}
</style>
