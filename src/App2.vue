<template>
   <div class="list">
    <el-carousel type="card" :interval="4000" height="600px">
        <el-carousel-item v-for="item in kinds" :key="item">
          <div class="item">{{ item.name }}</div>
        </el-carousel-item>
    </el-carousel>
   </div>
</template>
<script>
export default{
    data(){
        return{
            kinds: [{ name: "内地" }, { name: "欧美" }, { name: "港台" }],
        }
    }
}
</script>
<style>
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
.item {
  width: 100%;
  height: 100%;
  line-height: 599px;
  text-align: center;
  border: 1px solid black;
  font-size: 50px;
}
.list {
  border-radius: 15px;
  width: 87%;
  height: 600px;
  animation-name: show;
  animation-duration: 0.4s;
}

</style>