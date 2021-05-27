<template>
  <div class="beijing">
    <!-- <img src="../assets/img/1.jpg" alt=""> -->
    <div class="yi">
      <el-button type="primary">yi </el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="400px">
          <el-carousel-item v-for="item in r1" :key="item.url">
            <!-- <h3 class="small">{{ item }}</h3> -->
            <h3>{{item.img}}</h3>
            <img :src= 'item.img' >
            
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      r1:[{ url: "1",
         img:require('../assets/logo.png')},
         { url: "1",
         img:require('../assets/logo.png')},
         { url: "1",
         img:require('../assets/logo.png')},
      ]
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
// .box{
//             width: 0;
//             height: 0;
//             border: 30px solid;
//             border-color: red transparent transparent transparent;
//         }
.el-button {
  margin: 0px;
}
.beijing {
  height: 1000px;
  width: 1000px;
  background-repeat: no-repeat;
  background-image: url("../assets/img/1.jpg");
}
.yi {
  position: absolute;
  top: 80px;
  left: 80px;
}
.el-carousel{
  background-color: chartreuse;
}

</style>