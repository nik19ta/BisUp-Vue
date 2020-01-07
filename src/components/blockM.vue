<template lang="html">
  <div :id='mess.id' class="M">
    <!-- <div  class=""> -->
    <p >{{mess.mess}}</p>
  <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'people',
  props: ['mess'],
  data(){
    return{
      // publicPath: process.env.BASE_URL,
    }
  },
}
</script>

<style lang="css" scoped>

#you{
  padding-left: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
#you p{
  max-width: 80%;
  margin: 10px;
  padding: 9px;
  border-radius: 5px;
  background: #fff3cd;
}
#oth{
  /* margin: 10px; */
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
#oth p{
  max-width: 80%;
  margin: 10px;
  padding: 9px;
  background: #f5f5f5;
  border-radius: 5px;
}
.M{
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
}
</style>
