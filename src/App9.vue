<template >
  <div>
    <div class="team">
        <h1>miracle团队</h1>
    </div>
    <div class="shang" style="color:pink">
        <h1>商清亮:33%(贡献率)</h1>
    </div>
    <div class="shang" style="color:aquamarine">
        <h1>郭玉玺:33%(贡献率)</h1>
    </div>
    <div class="shang" style="color:#FFA500">
        <h1>杜悦:33%(贡献率)</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.team{
    width: 100%;
    padding: 10px;
    background-color: pink;
    border-radius: 20px;
}
.shang{
    text-align: center;
    width: 40%;
    padding: 10px;
    margin: 10px auto;
    background-color: skyblue;
    border-radius: 20px;
}
</style>