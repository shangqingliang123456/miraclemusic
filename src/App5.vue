<template>
  <router-view>
    <div>
      <div class="titletext">音乐推荐:</div>
      <div>
        <div style="margin-top: 10px" class="swiperbox">
          <el-carousel :interval="4000" type="card" >
            <el-carousel-item v-for="(item, index) in banners" :key="index" >
              <img :src="item.imageUrl" class="suggestswiperimg"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="titletext" style="background-color: #f0e68c; color: skyblue">
        新歌专区:
      </div>
      <div class="mainloading" :style="loading1 == true ? '' : 'display:none'">
        <div class="mainload">loading</div>
      </div>
      <el-scrollbar
      class="scrollbar"
        :style="loading1 == true ? 'display:none' : ''"
      >
        <div style="display: flex">
          <div
            v-for="(item, index) in newsing"
            :key="index"
            class="itembox"
            @click="
              playsuggest(
                item.id,
                item.name,
                item.album.blurPicUrl,
                item.alias[0]
              )
            "
          >
            <img :src="item.album.blurPicUrl" class="newsing" />
            <div style="text-align: center">{{ item.name }}</div>
          </div>
        </div>
      </el-scrollbar>
      <div class="titletext" style="background-color: pink; color: #973e95">
        排行榜:
      </div>
      <router-link to="/App11" @click="todetail(upranking.id,'飙升榜')">
        <div class="rankings">
          <img :src="upranking.coverImgUrl" class="ranking" />
          <div class="description">{{ upranking.description }}</div>
        </div>
      </router-link>
      <router-link to="/App11" @click="todetail(newranking.id,'新歌榜')">
        <div class="rankings">
          <img :src="newranking.coverImgUrl" class="ranking" />
          <div class="description">{{ newranking.description }}</div>
        </div>
      </router-link>
      <router-link to="/App11" @click="todetail(hotranking.id,'热歌榜')">
        <div class="rankings">
          <img :src="hotranking.coverImgUrl" class="ranking" />
          <div class="description">{{ hotranking.description }}</div>
        </div>
      </router-link>
    </div>
  </router-view>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
import { ref } from "vue";
import { useMainStore } from "../src/store/index.js";
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      banners: [],
      newsing: [],
      state: ref({
        store: useMainStore(),
      }),
      loading1: true,
      upranking: [],
      newranking: [],
      hotranking: [],
    };
  },
  methods: {
    todetail(id,name){
      this.$router.push({
        path:"/App11",
        query:{id:id,name:name}
      })
    },
    playsuggest(uid, name, img, singer) {
      console.log(uid);
      fetch("http://39.103.209.93:3000/song/url?id=" + uid)
        .then((resp) => resp.json())
        .then((info) => {
          this.singurl = info.data[0].url;
          this.state.store.seturl(info.data[0].url);
        });
      this.state.store.setplaying();
      this.state.store.setname(name);
      this.state.store.setimg(img);
      this.state.store.setsinger(singer);
      this.state.store.setsingid(uid);
      fetch("http://39.103.209.93:3000/lyric?id=" + uid)
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
  mounted() {
    setTimeout(() => {
      this.loading1 = false;
    }, 5000);
    fetch("http://39.103.209.93:3000/banner?type=0")
      .then((res) => res.json())
      .then((info) => {
        this.banners = info.banners;
      });
    fetch("http://39.103.209.93:3000/top/song?type=0")
      .then((res) => res.json())
      .then((info) => {
        this.newsing = info.data;
      });
    fetch("http://39.103.209.93:3000/toplist")
      .then((res) => res.json())
      .then((info) => {
        console.log(info.list[3]);
        this.upranking = info.list[0];
        this.newranking = info.list[1];
        this.hotranking = info.list[3];
      });
  },
};
</script>
<style>
.titletext {
  font-size: 40px;
  color: pink;
  background-color: skyblue;
  padding: 10px;
  border-radius: 20px;
}

.newsing {
  width: 160px;
  height: 180px;
  margin: 20px;
  border-radius: 100%;
  border: 20px solid black;
}
.itembox {
  margin: 10px;
}
.mainloading {
  margin: 20px auto;
  width: 50%;
  height: 120px;
  border: 20px solid skyblue;
  border-radius: 20px;
}
.mainload {
  width: 100%;
  line-height: 120px;
  background-color: pink;
  border-radius: 20px;
  color: yellow;
  font-size: 80px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  animation-name: mainloading;
  animation-duration: 5s;
}
@keyframes mainloading {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.ranking {
  width: 10%;
  border-radius: 15px;
}
.rankings {
  margin-top: 20px;
  background-color: skyblue;
  padding: 10px;
  padding-left: 30px;
  border-radius: 50px;
  display: flex;
  font-size: 30px;
  animation-name: ranking1;
  animation-duration: 0.6s;
}
.rankings:hover {
  width: 80%;
  margin-top: 20px;
  background-color: skyblue;
  padding: 10px;
  padding-left: 30px;
  border-radius: 50px;
  display: flex;
  font-size: 30px;
  animation-name: ranking;
  animation-duration: 0.6s;
}
@keyframes ranking {
  from {
    width: 100%;
  }
  to {
    width: 80%;
  }
}
@keyframes ranking1 {
  from {
    width: 80%;
  }
  to {
    width: 100%;
  }
}
.description {
  color: pink;
  line-height: 180px;
}
.scrollbar{
  height: 320px;width: 1920px;
}
@media screen and (max-width: 600px) {
  .suggestswiperimg{
    height: 120px;
  }
  .suggestswiper{
    height: 200px;
  }
  .swiperbox{
    height: 130px;
    overflow: hidden;
  }
  .scrollbar{
    width: 100%;
    height: 150px;
  }
  .newsing{
    width: 80px;
    height: 80px;
  }
  .ranking{
    width: 120px;
    height: 120px;
  }
  .rankings{
    width: 100%;
    font-size: 20px;
    
  }
  .description{
    line-height: 30px;
  }
}
</style>