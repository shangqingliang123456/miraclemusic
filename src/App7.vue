<template>
  <div>
    <div :class="list.length == 0 ? 'nosing' : 'disvisible'">
      <div>列表中暂无可播放的歌曲</div>
    </div>
    <div v-for="(item, index) in list" :key="index">
      <div class="soundedlist" @click="listchange(index)">
        <div>{{ item }}</div>
        <div>{{ state.store.singer[index] }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useMainStore } from "../src/store/index.js";
export default {
  data() {
    return {
      state: ref({
        store: useMainStore(),
      }),
      list: [],
    };
  },
  mounted() {
    this.list = this.state.store.name;
    console.log(this.list);
  },
  methods: {
    listchange(index) {
        this.state.store.index1=-1
      this.state.store.i = index;
    },
  },
};
</script>
<style>
.soundedlist {
  padding: 10px;
  margin: 20px auto;
  width: 90%;
  line-height: 70px;
  background-color: aquamarine;
  border-radius: 10px;
  font-size: 40px;
  color: #973e95;
  display: flex;
  justify-content: space-between;
  animation-name: cancel;
  animation-duration: 1s;
}
.soundedlist:hover {
  padding: 10px;
  margin: 20px auto;
  width: 70%;
  line-height: 70px;
  background-color: pink;
  border-radius: 10px;
  font-size: 40px;
  color: #973e95;
  animation-name: choosesing;
  animation-duration: 1s;
}
@keyframes choosesing {
  from {
    width: 90%;
    background-color: aquamarine;
  }
  to {
    width: 70%;
    background-color: pink;
  }
}
@keyframes cancel {
  from {
    width: 70%;
    background-color: pink;
  }
  to {
    width: 90%;
    background-color: aquamarine;
  }
}
.nosing {
  margin: 0 auto;
  font-size: 70px;
  line-height: 600px;
  color: pink;
  padding: 20px;
  background-color: antiquewhite;
  border-radius: 100%;
  text-align: center;
}
@media screen and (max-width: 600px){
  .nosing {
    width: 100%;
    line-height: 120px;
    font-size: 30px;
    margin-top: 120px;
  }
  .soundedlist {
    font-size: 10px;
  }
}
</style>