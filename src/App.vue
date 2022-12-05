<template>
  <div>
    <div class="playing">
      <div
        :class="
          this.state.store.playing == true ? 'playingbody1' : 'playingbody'
        "
      >
        <div
          :class="this.state.store.playing == true ? 'stop' : 'stop1'"
          @click="stop"
        >
          <div :class="this.state.store.playing == true ? 'one' : 'one1'"></div>
          <div :class="this.state.store.playing == true ? 'two' : 'two1'"></div>
          <div
            :class="this.state.store.playing == true ? 'disvisible' : 'three'"
          ></div>
        </div>
        <div class="sing">
          {{ state.store.name[state.store.i] }}
        </div>
      </div>
    </div>
    <div style="display: flex">
      <div :class="explain == true ? 'album' : 'album1'">
        <div class="detail3">
          <img
            :src="state.store.img[state.store.i]"
            :class="explain == true ? 'img' : 'disvisible'"
          />
          <div :class="explain == true ? 'name' : 'disvisible'">
            {{ state.store.name[state.store.i] }}<br />
            {{ state.store.singer[state.store.i] }}<br />
            <el-scrollbar class="ul">
              <!-- :style="test" -->
              <div class="contain" ref="contain">
                <div
                  id="musicListtext"
                  ref="singword"
                  v-for="(item, key, index) in state.store.singword[
                    state.store.i
                  ]"
                  :key="index"
                  :class="key < current ? 'current' : 'current1'"
                  :style="index <= state.store.index1 - 4 ? 'display:none' : ''"
                >
                  {{ item }}
                </div>
              </div>
            </el-scrollbar>
          </div>
        </div>
        <div :class="explain == true ? 'progress' : 'disvisible'">
          <input
            @change="change"
            type="range"
            :class="explain == true ? 'range' : 'disvisible'"
            min="0"
            :max="duration"
            v-model="current"
          />
          {{ current }}
        </div>
        <div :class="explain == true ? 'btns' : 'disvisible'">
          <div
            class="loop"
            :style="loop == true ? 'transform: rotate(90deg);' : ''"
            @click="changeloop"
          >
            U
          </div>
          <div class="previous" @click="previous">V</div>
          <svg
            @click="stop"
            :class="state.store.playing == true ? 'disvisible' : ''"
            t="1669523201483"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5439"
            width="128"
            height="128"
          >
            <path
              d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m164.717714 519.899429L427.081143 701.44a9.142857 9.142857 0 0 1-14.482286-7.460571V331.117714a9.142857 9.142857 0 0 1 14.482286-7.460571l249.636571 181.467428a8.996571 8.996571 0 0 1 0 14.774858z"
              fill="#1296db"
              p-id="5440"
            ></path>
          </svg>
          <svg
            @click="stop"
            :class="state.store.playing == true ? '' : 'disvisible'"
            t="1669523388355"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5629"
            width="128"
            height="128"
          >
            <path
              d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0zM420.571429 685.714286a9.142857 9.142857 0 0 1-9.142858 9.142857h-54.857142a9.142857 9.142857 0 0 1-9.142858-9.142857v-347.428572c0-5.046857 4.096-9.142857 9.142858-9.142857h54.857142c5.046857 0 9.142857 4.096 9.142858 9.142857v347.428572z m256 0a9.142857 9.142857 0 0 1-9.142858 9.142857h-54.857142a9.142857 9.142857 0 0 1-9.142858-9.142857v-347.428572c0-5.046857 4.096-9.142857 9.142858-9.142857h54.857142c5.046857 0 9.142857 4.096 9.142858 9.142857v347.428572z"
              fill="#13227a"
              p-id="5630"
            ></path>
          </svg>
          <div class="next" @click="next">V</div>
        </div>
      </div>
    </div>
    <div :class="explain == true ? 'down1' : 'down'" @click="down">v</div>
    <div class="disvisable">
      <div>
        <audio
          :src="state.store.url[state.store.i]"
          hidden
          autoplay
          ref="audio"
          @ended="over()"
          @canplay="time1"
          @timeupdate="time"
        ></audio>
      </div>
    </div>
    <div class="container">
      <div class="nav">
        <div class="suggest">
          <div class="start">miracle推荐</div>
          <div class="body">
            <router-link to="/" class="routerlink">
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
                <div>关于我们</div>
              </div>
            </router-link>
            <router-link to="/App2" class="routerlink">
              <div :class="aa == 1 ? 'click1 tab ' : 'tab'" @click="dianji(1)">
                <div>歌单推荐</div>
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
  </div>
</template>
<script>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useMainStore } from "../src/store/index";
export default {
  data() {
    return {
      loop: false,
      index1: -1,
      percentage: 0,
      explain: false,
      aa: Number(sessionStorage.getItem("aa")),
      playing: false,
      state: ref({
        store: useMainStore(),
      }),
      duration: 0,
      current: 0,
      test: {
        position: "relative",
        top: "0",
      },
      test1: 0,
    };
  },
  mounted() {
    if (sessionStorage.getItem("aa") == null) {
      this.aa = 4;
    }
    console.log(this.state.store.id);
    console.log(this.state.store.singword);
  },
  updated() {
    this.test1 = this.state.store.index1 * -20 + "px";
    this.test.top = this.test1;
    // console.log(this.test);
  },
  computed: {
    top() {
      return this.index * -70;
    },
  },
  watch: {
    current() {
      // console.log( this.state.store.time[this.state.store.i]);
      if(this.current!=0){
        for ( let i = 0; i < this.state.store.time[this.state.store.i].length; i++) {
        if (this.current == this.state.store.time[this.state.store.i][i]) {
          this.state.store.index1=i;
          console.log(this.state.store.index1)
        }
      }
      }else{
        this.state.store.index1=0
      }
    },
  },
  methods: {
    changeloop() {
      if (this.loop == true) {
        this.loop = false;
        ElMessage({
          message: "顺序播放",
          type: "success",
        });
      } else {
        this.loop = true;
        ElMessage({
          message: "单曲循环",
          type: "success",
        });
      }
    },
    print() {
      console.log(this.index);
    },
    change() {
      this.$refs.audio.currentTime = this.current;
    },
    time(event) {
      this.current = (Math.floor(event.target.currentTime) * 100) / 100;
    },
    time1(event) {
      this.duration = (Math.floor(event.target.duration) * 100) / 100;
    },
    clear() {
      this.state.store.clear();
    },
    dianji(e) {
      let e1 = e + "";
      sessionStorage.setItem("aa", e1);
      let a1 = sessionStorage.getItem("aa");
      this.aa = Number(a1);
    },
    play() {
      this.playing = !this.playing;
      let playingsing = sessionStorage.getItem("singname");
      console.log(sessionStorage.getItem("singname"));
      this.playingsing = playingsing;
    },
    stop() {
      if (this.state.store.name != "") {
        if (this.state.store.playing == true) {
          this.state.store.stopplaying();
          this.$refs.audio.pause();
        } else {
          this.state.store.setplaying();
          this.$refs.audio.play();
        }
      } else {
        ElMessage.error("选歌了？");
      }
    },
    over() {
      this.state.store.index1 = -1;
      if (this.loop == false) {
        if (this.state.store.i == this.state.store.name.length - 1) {
          this.state.store.clear();
          this.state.store.stopplaying();
          this.explain = false;
          console.log("ok");
        } else {
          this.state.store.i = this.state.store.i + 1;
        }
      } else {
        this.state.store.i = this.state.store.i;
        this.current = 0;
        this.$refs.audio.play();
      }
    },
    open() {
      this.visible = true;
    },
    down() {
      if (this.state.store.img != "") {
        this.explain = !this.explain;
      } else {
        ElMessage.error("歌呢？");
      }
    },
    previous() {
      this.state.store.index1 = -1;
      if (this.state.store.i != 0) {
        this.state.store.i = this.state.store.i - 1;
      } else {
        ElMessage.error("已经是第一个了,亲");
      }
    },
    next() {
      this.state.store.index1 = -1;
      if (this.state.store.i != this.state.store.name.length - 1) {
        this.state.store.i = this.state.store.i + 1;
      } else {
        ElMessage.error("已经是最后一个了,亲");
      }
    },
  },
};
</script>
<style scoped>
.detail3 {
  display: flex;
}
.sing {
  text-align: center;
  color: #800080;
  font-weight: 600;
}
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
  animation-name: show;
  animation-duration: 0.4s;
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
.playingbody1 {
  display: flex;
  justify-content: space-around;
  width: 40%;
  line-height: 70px;
  height: 70px;
  background-color: #fbcba3;
  border-radius: 10px;
  margin-top: 22px;
  animation-name: playing;
  animation-duration: 0.4s;
}
@keyframes playing {
  0% {
    width: 20%;
    height: 50px;
  }
  50% {
    width: 40%;
    height: 70px;
  }
}

.playing {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  height: 50px;
  margin-bottom: 25px;
}
.playingbody {
  display: flex;
  justify-content: space-around;
  width: 20%;
  height: 50px;
  line-height: 50px;
  background-color: #fbcba3;
  border-radius: 10px;
  margin-top: 22px;
  animation-name: playing1;
  animation-duration: 0.4s;
}
@keyframes playing1 {
  from {
    width: 40%;
    height: 70px;
  }
  to {
    width: 20%;
    height: 50px;
  }
}
.playbtn {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-top: 5px;
}
.music {
  text-align: center;
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
  background-color: #00ffff;
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
.shop {
  background-color: pink;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}
.one {
  margin-top: 20px;
  width: 3px;
  height: 30px;
  background-color: #98fb98;
  margin-right: 10px;
  /* transform: skew(-30deg, 0); */
}
.two {
  margin-top: 20px;
  width: 3px;
  height: 30px;
  background-color: skyblue;
  margin-left: 10px;
  /* transform: skew(34deg, 0); */
}
.one1 {
  margin-top: 10px;
  width: 3px;
  height: 20px;
  background-color: skyblue;
  margin-left: 10px;
  animation-name: stop;
  animation-duration: 0.4s;
  transform: skew(-30deg, 0);
}
@keyframes stop1 {
  from {
    transform: skew(0deg, 0);
  }
  to {
    transform: skew(-30deg, 0);
  }
}
.two1 {
  margin-top: 10px;
  margin-left: 10px;
  width: 3px;
  height: 21px;
  background-color: #98fb98;
  animation-name: stop2;
  animation-duration: 0.4s;
  transform: skew(30deg, 0);
}
@keyframes stop2 {
  from {
    transform: skew(0deg, 0);
  }
  to {
    transform: skew(30deg, 0);
  }
}
.stop {
  display: flex;
}
.stop1 {
  display: flex;
  transform: rotate(-90deg);
  margin-top: 10px;
}
.three {
  width: 3px;
  height: 23px;
  background-color: tomato;
  transform: rotate(90deg);
  position: absolute;
  top: 22px;
  left: 16px;
}
.disvisable {
  display: none;
}
.down {
  position: relative;
  top: 20px;
  color: white;
  text-align: center;
  margin: 0 auto;
  width: 2%;
  height: 25px;
  background-color: aquamarine;
  border-radius: 10px;
}
.down1 {
  position: relative;
  top: 20px;
  color: white;
  text-align: center;
  margin: 0 auto;
  width: 2%;
  height: 25px;
  background-color: aquamarine;
  border-radius: 10px;
  transform: rotate(180deg);
}
.album {
  overflow: hidden;
  width: 80%;
  height: 810px;
  background-color: pink;
  margin: 0 auto;
  border-radius: 20px;
  animation-name: explain;
  animation-duration: 0.8s;
}
@keyframes explain {
  from {
    width: 0;
    height: 0;
  }
  to {
    width: 80%;
    height: 810px;
  }
}
.album1 {
  background-color: pink;
  margin: 0 auto;
  border-radius: 20px;
  width: 0;
  height: 0;
  animation-name: album1;
  animation-duration: 0.8s;
}
@keyframes album1 {
  from {
    width: 80%;
    height: 810px;
  }
  to {
    width: 0;
    height: 0;
  }
}
.img {
  width: 20%;
  height: 330px;
  margin: 100px;
  border: 40px solid black;
  border-radius: 100%;
}
.name {
  font-size: 30px;
  font-weight: 600;
  width: 70%;
  margin-top: 50px;
  text-align: center;
}
.btns {
  display: flex;
  justify-content: space-around;
}
.previous {
  background-color: #98ff98;
  line-height: 128px;
  margin-top: 8px;
  width: 128px;
  text-align: center;
  border-radius: 100%;
  font-size: 50px;
  color: white;
  transform: rotate(90deg);
}
.next {
  background-color: #ffdab9;
  line-height: 128px;
  margin-top: 8px;
  width: 128px;
  text-align: center;
  border-radius: 100%;
  font-size: 50px;
  color: white;
  transform: rotate(-90deg);
}
.progress {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}
.range {
  width: 90%;
  background-color: skyblue;
}
.list {
  margin: 0 auto;
  width: 10%;
  height: 80px;
  background-color: #98fb98;
}
.ul {
  list-style: none;
  text-align: center;
  white-space: pre-wrap;
  height: 400px;
  overflow: hidden;
}
.current {
  color: #800080;
  position: relative;
  top: 30px;
}
.current1 {
  color: whitesmoke;
  position: relative;
  top: 30px;
}
.littlelist {
  margin-top: 10px;
  display: flex;
  background-color: skyblue;
  width: 400px;
  line-height: 50px;
  border-radius: 10px;
  justify-content: space-around;
}
.loop {
  background-color: #800080;
  line-height: 128px;
  margin-top: 8px;
  width: 128px;
  text-align: center;
  border-radius: 100%;
  font-size: 50px;
  color: white;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360);
  }
}
@media screen and (max-width: 600px) {
  .nav {
    margin-right: 10px;
    text-align: center;
    width: 450px;
    height: 300px;
    line-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 10px;
  }
  .container {
    display: block;
    padding: 50px 10px;
  }
  .img {
    border: 10px solid black;
    width: 80px;
    margin-left: 110px;
    margin-top: 10px;
    height: 80px;
    margin-bottom: 0px;
  }
  .next {
    background-color: #ffdab9;
    line-height: 88px;
    height: 70px;
    margin-top: 28px;
    width: 108px;
    text-align: center;
    border-radius: 100%;
    font-size: 50px;
    color: white;
    transform: rotate(-90deg);
  }
  .previous {
    height: 70px;
    background-color: #98ff98;
    line-height: 88px;
    margin-top: 25px;
    width: 108px;
    text-align: center;
    border-radius: 100%;
    font-size: 50px;
    color: white;
    transform: rotate(90deg);
  }
  .loop {
    height: 108px;
    background-color: #800080;
    line-height: 98px;
    margin-top: 8px;
    width: 108px;
    text-align: center;
    border-radius: 100%;
    font-size: 30px;
    color: white;
  }
  .detail3 {
    display: block;
  }
  .name {
    margin-left: 55px;
    margin-top: 0px;
  }
  .album {
    height: 900px;
  }
  .playingbody {
    width: 70%;
  }
}
/* .contain{
  position: relative;
  top: v-bind(top)px;
} */
/* .container{
  position: relative;
  
} */

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