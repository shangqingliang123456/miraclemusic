<template>
  <el-icon size="20"><User /></el-icon>
  <div class="container">
    <div class="nav">
    <div :class="aa==1?'tab click1 ':'tab'" @click="dianji(1)" >
      <el-icon><House /></el-icon>
      <div>音乐仓库</div>
    </div>
    <div :class="aa==2?'tab click1 ':'tab'" @click="dianji(2)">
      <el-icon><Document /></el-icon>
      <div>音乐列表</div>
    </div>
    <div :class="aa==3?'click1 tab ':'tab'" @click="dianji(3)">
      <el-icon size="20"><User /></el-icon>
      <div>miracle账户</div>
    </div>
  </div>
  <div class="show">
    <el-carousel type="card" :interval="4000" height="600px">
    <el-carousel-item v-for="item in kinds" :key="item">
      <div class="item">{{item.name}}</div>
    </el-carousel-item>
  </el-carousel>
  </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        kinds:[{name:"内地"},{name:"欧美"},{name:"港台"}],
        choose1:true,
        choose2:false,
        choose3:false,
        aa:1
      }

    },
    methods:{
      dianji(e){
        this.aa=e
      }
    }
  }
</script>
<style scoped>
.container{
  display: flex;
  background-image: url('../photo/background.jpg');
  padding: 50px 10px;
}
.nav{
  margin-right: 10px;
  text-align: center;
  width: 19%;
  line-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(231, 228, 228);
  border-radius: 10px;
}
.tab{
  font-size: 20px;
  border-radius: 20px;
  display: flex;
  line-height: 20px;
  margin: 0 auto;
  padding: 10px;
}
.tab:hover{
background-color: silver;
}
.show{
  width: 100%;
}
  .item{
    width: 99%;
    height: 99%;
    line-height: 599px;
    text-align: center;
    border: 1px solid black;
    font-size: 50px;
  }
  .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  background-image: url(../photo/europe.jpg);
  }
  .el-carousel__item:nth-child(3n) {
  background-color: greenyellow;
  background-image: url(../photo/china.jpg);
  }
  .el-carousel__item:nth-child(5n) {
  background-color: pink;
  background-image: url(../photo/hongkong.jpg);
  }
  .click1{
    background-color: #98FB98;
    color: green;
    font-size: 30px;
    line-height: 30px;
    animation-name: click;
    animation-duration: 0.4s;
  }
  @keyframes click{
    from{font-size: 20px;}
    to{font-size: 30px;}
  }
</style>