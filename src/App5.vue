<template>
  <div class="container1">
    <div class="tuijian">推荐</div>
    <div>
      <el-scrollbar max-height="400px">
        <div class="songs">
          <div class="kind">内地:</div>
          <div class="song" v-for="(song, index) in chinasongs" :key="index">
            <img :src="song.img" class="img" />
            <div>{{ song.name }}</div>
            <div>{{ song.singers }}</div>
          </div>
        </div>
        <div class="songs">
          <div class="kind">港台:</div>
          <div class="song" v-for="(song, index) in hongkongsongs" :key="index">
            <img :src="song.img" class="img" />
            <div>{{ song.name }}</div>
            <div>{{ song.singers }}</div>
          </div>
        </div>
        <div class="songs">
          <div class="kind">欧美:</div>
          <div class="song" v-for="(song, index) in europesongs" :key="index">
            <img :src="song.img" class="img" />
            <div>{{ song.name }}</div>
            <div>{{ song.singers }}</div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "http://39.103.209.93:3002/albums/",
      chinasongs: [],
      hongkongsongs: [],
      europesongs: [],
    };
  },
  mounted() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((info) => {
        for (let i = 0; i < info.length; i++) {
          if (info[i].area == "内地") {
            this.chinasongs.push(info[i]);
          }
          if (info[i].area == "港台") {
            this.hongkongsongs.push(info[i]);
          }
          if (info[i].area == "欧美") {
            this.europesongs.push(info[i]);
          }
        }
        console.log(this.chinasongs);
      });
  },
};
</script>
<style>
.container1 {
  background-color: aquamarine;
  border-radius: 15px;
}
.tuijian {
  font-size: 45px;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
}
.kind {
  width: 20px;
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  color: red;
}
.songs {
  text-align: center;
  display: flex;
  margin-left: 40px;
}
.song {
  margin-right: 20px;
}
.img:hover{
 box-shadow: 8px 8px 8px whitesmoke; 
 position: relative;
 bottom: 8px;
 right: 8px;
}
</style>