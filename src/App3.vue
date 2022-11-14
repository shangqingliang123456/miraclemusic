<template>
    <el-table :data="albums" max-height="600px" class="listtable show">
        <el-table-column fixed label="购买" width="80px">
          <el-button type="success" round>购买</el-button>
        </el-table-column>
        <el-table-column
          prop="name"
          label="歌曲名称"
          width="300px"
        ></el-table-column>
        <el-table-column
          prop="singers"
          label="歌手"
          width="300px"
        ></el-table-column>
        <el-table-column
          prop="area"
          label="分类"
          width="300px"
        ></el-table-column>
        <el-table-column
          prop="releaseDate"
          label="发行日期"
          width="300px"
        ></el-table-column>
        <el-table-column
          prop="price"
          label="价格(元)"
          width="300px"
        ></el-table-column>
        <el-table-column label="播放" width="80px" fixed="right">
          <el-button type="primary" round>播放</el-button>
        </el-table-column>
      </el-table>
</template>
<script>
export default{
    data(){
        return{
            url: "http://39.103.209.93:3002/albums/",
            albums: [],
        }
    },
    mounted() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((info) => {
        this.albums = info;
        console.log(this.albums);
      });
  },
}
</script>
<style>
.listtable {
  width: 100%;
}
.show {
  animation-name: show;
  animation-duration: 0.4s;
}
</style>