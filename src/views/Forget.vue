<template>
    <div>
       <div>
    <div  @click="show=!show" >ssxxxxxxxx</div>

    <div style="display: flex;  ">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box"></div>
      </transition>
    </div>
  </div>
      
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:true
        }
    },
    methods:{

    },
    mounted:{}
}
</script>
<style lang="less" scoped>
.transition-box {
    height: 100px;
    width: 100px;
   background-color: blueviolet;
   position: absolute;
   top:50px;
   
  }
</style>