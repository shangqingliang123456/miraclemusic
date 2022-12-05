<template>
  <div>
    <div style="text-align:center;color:skyblue;font-size:30px;background-color:pink;border-radius: 10px;">{{rankingkind}}</div>
    <el-table :data="rankingsing" @row-click="play" :style="loading1 == true ? 'display:none' : ''">
      <el-table-column label="名字" prop="al.name"></el-table-column>
      <el-table-column label="歌手名字" prop="ar[0].name"></el-table-column>
    </el-table>
    <div class="mainloading" :style="loading1 == true ? '' : 'display:none'">
      <div class="mainload">loading</div>
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
      uid1: 0,
      rankingsing: [],
      state: ref({
        store: useMainStore(),
      }),
      loading1: true,
      rankingkind:""
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading1 = false;
    }, 5000);
    console.log(this.$route.query.id);
    this.uid1 = this.$route.query.id;
    this.rankingkind=this.$route.query.name
    fetch("http://39.103.209.93:3000/playlist/detail?id=" + this.uid1)
      .then((res) => res.json())
      .then((info) => {
        // console.log(info.privileges);
        info.privileges.forEach((item) => {
          // console.log(item.id);
          fetch("http://39.103.209.93:3000/song/detail?ids=" + item.id)
            .then((res) => res.json())
            .then((info) => {
              // console.log(info.songs[0]);
              this.rankingsing.push(info.songs[0]);
            });
        });
      });
  },
  methods: {
    play(row) {
      // console.log(row.id);
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
          let time = [];
          if (info.lrc.lyric != null) {
            lyricArr.forEach((item) => {
              let arr = item.split("]"); // 再分割右括号
              // 时间换算成秒
              let m = parseInt(arr[0].split(":")[0]);
              let s = parseInt(arr[0].split(":")[1]);
              arr[0] = m * 60 + s;
              time.push(arr[0]);
              if (arr[1] != "\n") {
                // 去除歌词中的换行符
                lrcObj[arr[0]] = arr[1];
              }
            });
          } else {
            lrcObj = "暂无歌词";
          }
          this.state.store.settime(time);
          this.state.store.setsingword(lrcObj);
        });
      ElMessage({
        message: "添加歌曲成功",
        type: "success",
      });
    },
  },
};
</script>