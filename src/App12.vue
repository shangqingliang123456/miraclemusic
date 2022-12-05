<template>
  <div>
    <div class="title">
      <img :src="detail.coverImgUrl" class="itemimg" />
      <text class="desc">简介:{{ detail.description }}</text>
    </div>
    <div :class="loading1 == true ? 'loading1' : 'disvisible'">
      <div class="loadinginit1">loading</div>
    </div>
    <div :class="loading1 == true ? 'disvisible' : ''">
      <el-table :data="list" @row-click="cli">
        <el-table-column label="歌曲名称" prop="al.name"></el-table-column>
        <el-table-column label="歌手名称" prop="ar[0].name"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import {useMainStore} from '../src/store/index.js'
export default {
  data() {
    return {
    loading1:true,
      detail: {},
      list: [],
      state:ref({
        store:useMainStore()
      })
    };
  },
  methods:{
    load(){
      this.loading1=true
      setTimeout(()=>{
        this.loading1=false
      },1000)
    },
    cli(row){
      console.log(row);
      let uid
      if(row.id== 21393066){
        uid=row.al.id
      }
      else{
        uid = row.id;
      }
      fetch("http://39.103.209.93:3000/song/url?id=" + uid)
        .then((resp) => resp.json())
        .then((info) => {
        this.state.store.seturl(info.data[0].url)
        console.log(info.data[0].url);
        });
        this.state.store.setplaying()
        this.state.store.setname(row.name)
        this.state.store.setsinger(row.ar[0].name)
        this.state.store.setimg(row.al.picUrl)
        this.state.store.setsingid(row.id)
        fetch("http://39.103.209.93:3000/lyric?id=" + row.id)
        .then((res) => res.json())
        .then((info) => {
          console.log(info);
          let lyricArr = info.lrc.lyric.split("[").slice(1); // 先以[进行分割
          let lrcObj = {};
          let time=[]
          lyricArr.forEach((item) => {
            let arr = item.split("]"); // 再分割右括号
            // 时间换算成秒
            let m = parseInt(arr[0].split(":")[0]);
            let s = parseInt(arr[0].split(":")[1]);
            arr[0] = m * 60 + s;
            time.push(arr[0])
            if (arr[1] != "\n") {
              // 去除歌词中的换行符
              lrcObj[arr[0]] = arr[1];
            }
          });
          console.log(time);
          this.state.store.settime(time)
          this.state.store.setsingword(lrcObj)
        });
    }
  },
  mounted() {
    this.load()
    console.log(this.$route.query);
    this.detail = this.$route.query;
    fetch(
      "http://39.103.209.93:3000/playlist/detail?id=" + this.$route.query.id
    )
      .then((res) => res.json())
      .then((info) => {
        console.log(info.playlist.tracks);
        this.list = info.playlist.tracks;
      });
  },
};
</script>
<style>
.itemimg {
  width: 15%;
  height: 270px;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.title {
  background-color: #ffdab9;
  border-radius: 20px;
  display: flex;
}
.desc {
  margin-left: 10px;
  margin-top: 10px;
  white-space: pre-wrap;
}
.loading1 {
  position: absolute;
  left: 800px;
  top: 600px;
  width: 400px;
  height: 50px;
  border: 7px solid skyblue;
  border-radius: 10px;
}
.loadinginit1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 40px;
  color: yellow;
  background-color: pink;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  animation-name: loading;
  animation-duration: 1s;
}
@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
@media screen and (max-width: 600px){
  .itemimg{
    height: 100px;
  }
}
</style>
