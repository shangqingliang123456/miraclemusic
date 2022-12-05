<template>
  <div>
    <router-view>
      <div :class="loading == true ? 'loading' : 'disvisible'">
        <div class="loadinginit">loading</div>
      </div>
      <div :class="loading == true ? 'disvisible' : ''">
        <div class="start">miracle歌单推荐</div>
        <div class="tabs">
          <div v-for="(tab, index) in tabs" :key="index">
            <div
              @click="change(index)"
              :class="page == index ? 'toptab1' : 'toptab'"
            >
              {{ tab.name }}
            </div>
          </div>
        </div>
        <div v-for="item in all" :key="item">
          <router-link to="/App12" @click="todetail(item)" class="item">
            <img :src="item.coverImgUrl" class="itemurl" />
            <div class="singname">{{ item.name }}</div>
          </router-link>
        </div>
      </div>
    </router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      all: [],
      tabs: [
        { name: "全部", click: true },
        { name: "华语", click: false },
        { name: "古风", click: false },
        { name: "流行", click: false },
        { name: "欧美", click: false },
      ],
      page: 0,
    };
  },
  mounted() {
    this.load();
    fetch("http://39.103.209.93:3000/top/playlist/highquality")
      .then((res) => res.json())
      .then((info) => {
        this.all = info.playlists;
      });
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    change(index) {
      this.load();
      this.page = index;
      let kind = "";
      switch (index) {
        case 0:
          kind = "";
          break;
        case 1:
          kind = "华语";
          break;
        case 2:
          kind = "古风";
          break;
        case 3:
          kind = "流行";
          break;
        case 4:
          kind = "欧美";
          break;
      }
      fetch("http://39.103.209.93:3000/top/playlist/highquality?cat=" + kind)
        .then((res) => res.json())
        .then((info) => {
          console.log(info.playlists);
          this.all = info.playlists;
          console.log(this.all);
        });
      let arr = this.all;
      for (let i = 0; i < arr.length; i++) {
        arr[i].click = false;
        arr[index].click = true;
      }
      this.all = arr;
    },
    todetail(a) {
      console.log(a);
      this.$router.push({
        path: "/App12",
        query: a,
      });
    },
  },
};
</script>
<style>
.tabs {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: pink;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
}
.item {
  text-decoration: none;
  background-color: skyblue;
  border-radius: 10px;
  padding: 10px 0;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.item:hover {
  animation-name: choose;
  animation-duration: 1s;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@keyframes choose {
  from {
    width: 100%;
  }
  to {
    width: 80%;
  }
}
.itemurl {
  width: 20%;
  border-radius: 10px;
  margin-left: 10px;
}
.singname {
  font-size: 60px;
  line-height: 300px;
  color: yellow;
}
.toptab {
  color: #9098d0;
  font-weight: 700;
  border-radius: 100%;
  padding-left: 9px;
  padding-right: 9px;
}
.toptab:hover {
  background-color: #f5fffa;
  animation-name: clicking;
  animation-duration: 0.4s;
  font-size: 40px;
}
.toptab1 {
  color: #9098d0;
  animation-name: clicking;
  animation-duration: 0.4s;
  font-size: 40px;
  border-radius: 100%;
}
.toptab1:hover {
  background-color: #f5fffa;
}
@keyframes clicking {
  from {
    font-size: 30px;
  }
  to {
    font-size: 40px;
  }
}
.disvisible {
  display: none;
}
.loading {
  position: absolute;
  left: 800px;
  top: 400px;
  width: 400px;
  height: 50px;
  border: 7px solid skyblue;
  border-radius: 10px;
}
.loadinginit {
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
  animation-duration: 2s;
}
@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.start {
  text-align: center;
  font-size: 50px;
  color: #c38bbf;
}
@media screen and (max-width: 600px) {
  .itemurl {
    width: 20%;
    border-radius: 10px;
    margin-left: 10px;
    height: 100px;
  }
  .singname{
    font-size: 15px;
    line-height: 20px;
  }
  .loading{
    position: absolute;
    left: 30px;
    top: 620px;
  }
}
</style>