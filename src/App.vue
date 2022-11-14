<template>
  <div class="playing">
    <div class="playingbody">
      <div>
        <img src="../photo/back.jpg" class="playbtn" />
        <img
          :src="playing == true ? '../photo/stop.jpg' : '../photo/continue.jpg'"
          @click="play()"
          class="playbtn"
        />
        <img src="../photo/go.jpg" class="playbtn" />
      </div>
    </div>
  </div>
  <div :class="playing == true ? 'music' : 'disvisable'"></div>
  <div class="container">
    <div class="nav">
      <div class="suggest">
        <div class="start">miracle推荐</div>
        <div class="body">
          <router-link to="/App5" class="routerlink">
            <div :class="aa == 4 ? 'click1 tab' : 'tab'" @click="dianji(4)">
              <div>音乐推荐</div>
            </div>
          </router-link>
          <router-link to="/App6" class="routerlink">
            <div :class="aa == 5 ? 'click1 tab' : 'tab'" @click="dianji(5)">
              <div>音乐馆</div>
            </div>
          </router-link>
          <router-link to="/App7" class="routerlink">
            <div :class="aa == 6 ? 'click1 tab' : 'tab'" @click="dianji(6)">
              <div>播放列表</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="shop">
        <div class="start">miracle商城</div>
        <div class="body">
          <router-link to="/App9" class="routerlink">
            <div :class="aa == 8 ? 'click1 tab' : 'tab'" @click="dianji(8)">
              <div>周边商城</div>
            </div>
          </router-link>
          <router-link to="/" class="routerlink">
            <div :class="aa == 1 ? 'click1 tab ' : 'tab'" @click="dianji(1)">
              <div>音乐商城</div>
            </div>
          </router-link>
          <router-link to="/App10" class="routerlink">
            <div :class="aa == 9 ? 'click1 tab' : 'tab'" @click="dianji(9)">
              <div>音乐人</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="mymusic">
        <div class="start">我的miracle</div>
        <div class="body">
          <router-link to="/App3" class="routerlink">
            <div :class="aa == 2 ? 'click1 tab ' : 'tab'" @click="dianji(2)">
              <div>我的音乐</div>
            </div>
          </router-link>
          <router-link to="/App8" class="routerlink">
            <div :class="aa == 7 ? 'click1 tab' : 'tab'" @click="dianji(7)">
              <div>搜索</div>
            </div>
          </router-link>
          <router-link to="App4" class="routerlink">
            <div :class="aa == 3 ? 'tab click1 ' : 'tab'" @click="dianji(3)">
              <div>miracle账户</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <router-view class="routerview"></router-view>
  </div>
</template>
<script>
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      aa: Number(sessionStorage.getItem("aa")),
      playing: false,
    };
  },
  methods: {
    dianji(e) {
      let e1=e+""
      sessionStorage.setItem("aa",e1)
      let a1=sessionStorage.getItem("aa")
      this.aa=Number(a1)
    },
    play() {
      this.playing = !this.playing;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  padding: 50px 10px;
}
.nav {
  margin-right: 10px;
  text-align: center;
  width: 230px;
  height: 600px;
  line-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
}
.routerlink {
  padding-left: 10px;
  text-decoration: none;
  text-align: center;
}
.routerview {
  width: 100%;
}
.tab {
  font-size: 20px;
  border-radius: 20px;
  display: flex;
  line-height: 20px;
  margin: 0 auto;
  padding: 10px;
}
.tab:hover {
  background-color: silver;
}
.show {
  width: 87%;
  animation-name: show;
  animation-duration: 0.4s;
}
@keyframes show {
  0% {
    opacity: 20%;
  }
  10% {
    opacity: 25%;
  }
  20% {
    opacity: 28%;
  }
  30% {
    opacity: 30%;
  }
  40% {
    opacity: 40%;
  }
  50% {
    opacity: 50%;
  }
  60% {
    opacity: 60%;
  }
  70% {
    opacity: 70%;
  }
  80% {
    opacity: 80%;
  }
  90% {
    opacity: 90%;
  }
  100% {
    opacity: 100%;
  }
}
.disvisable {
  display: none;
}
/* .list {
  width: 87%;
  height: 600px;
  animation-name: show;
  animation-duration: 0.4s;
} */
.click1 {
  background-color: #98fb98;
  color: green;
  font-size: 30px;
  line-height: 30px;
  animation-name: click;
  animation-duration: 0.4s;
}
@keyframes click {
  from {
    font-size: 20px;
  }
  to {
    font-size: 30px;
  }
}

.playing {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  height: 50px;
  margin-bottom: 50px;
}
.playingbody {
  width: 20%;
  height: 50px;
  background-color: #fbcba3;
  border-radius: 10px;
  margin-top: 22px;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
}
.playbtn {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-top: 5px;
}
.music {
  margin: 0 auto;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  background-color: #98fb98;
  animation-name: show;
  animation-duration: 0.4s;
}
.logo {
  width: 100px;
  height: 50px;
}
.mymusic {
  background-color: #00FFFF;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}
.start {
  font-size: 30px;
}
.body {
  display: flex;
}
.suggest {
  background-color: #fffacd;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}
.shop{
  background-color: pink;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}
/* .administrator {
  width: 100%;
  height: 600px;
  background-image: url("../photo/administartor.jpg");
  border-radius: 10px;
  animation-name: show;
  animation-duration: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.username {
  width: 40%;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
}
.password {
  width: 40%;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
}
.login {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.loginput {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.me {
  position: absolute;
  top: 30%;
  left: 20%;
}
.avatar {
  display: flex;
}
.namecenter{
  margin-top: 10px;
}
.quit{
  margin-top: 100%;
  margin-left: 20%;
}
.registerbtn{
  display: flex;
  justify-content: center;
  margin-top: 15px;
} */
</style>