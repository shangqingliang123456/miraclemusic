<template>
  <div>
    <div style="display: flex; flex-direction: column; align-items: center">
    <div class="searchbg">
      <div class="seachinput">
        <el-input class="input" v-model="searchname"></el-input>
        <el-button type="primary" @click="search">搜索</el-button>
      </div>
    </div>
    <div :class="loading == true ? 'loading' : 'disvisible'">
      <div class="loadinginit">loading</div>
    </div>
    <div style="width: 100%" :class="loading == true ? 'disvisible' : ''">
      <el-table :data="result" @row-click="play">
        <el-table-column label="歌曲名称" prop="name"></el-table-column>
        <el-table-column label="歌手" prop="ar.0.name"></el-table-column>
      </el-table>
    </div>
  </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useMainStore } from "../src/store/index.js";
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      loading: false,
      url: "",
      searchname: "",
      result: [],
      state: ref({
        store: useMainStore(),
      }),
    };
  },
  methods: {
    search() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      console.log("点击搜索成功");
      fetch("http://39.103.209.93:3000/search?keywords=" + this.searchname)
        .then((resp) => resp.json())
        .then((info) => {
          this.result = info.result.songs;
          console.log(this.result);
        });
    },
    play(row) {
      console.log("点击成功");
      let uid = row.id;
      fetch("http://39.103.209.93:3000/song/url?id=" + uid)
        .then((resp) => resp.json())
        .then((info) => {
          this.singurl = info.data[0].url;
          this.state.store.seturl(info.data[0].url);
        });
      this.state.store.setplaying();
      this.state.store.setname(row.name);
      this.state.store.setimg(row.al.picUrl);
      this.state.store.setsinger(row.ar[0].name);
      this.state.store.setsingid(row.id);
      fetch("http://39.103.209.93:3000/lyric?id=" + row.id)
        .then((res) => res.json())
        .then((info) => {
          console.log(info);
          let lyricArr = info.lrc.lyric.split("[").slice(1); // 先以[进行分割
          let lrcObj = {};
          let time=[]
         if(info.lrc.lyric!=null){
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
         }else{
          lrcObj ="暂无歌词"
         }
          this.state.store.settime(time)
          this.state.store.setsingword(lrcObj)
        });
      ElMessage({
        message: "添加歌曲成功",
        type: "success",
      });
    },
    // over:function (){
    //   this.state.store.clear()
    //   this.state.store.playing=false
    //   debugger
    //   alert("skjda")
    //   console.log("播放结束");
    // }
  },
};
</script>
<style>
.searchinput {
  display: flex;
  justify-content: center;
  background-color: aquamarine;
}
.input {
  width: 60%;
  margin-left: 15%;
}
.searchbg {
  width: 100%;
  background-color: skyblue;
  padding: 20px 0px;
  border-radius: 20px;
}
</style>