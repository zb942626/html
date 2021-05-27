<template>
  <div class="all">
    <div class="login">
      <el-input
        placeholder="请输入用户名"
        v-model="user"
        clearable
        class="user"
      >
      </el-input>
      <el-input
        class="password"
        placeholder="请输入密码"
        v-model="password"
        show-password
      >
      </el-input>
      <el-button class="Registration" @click="registration">登录</el-button>
      <el-button class="Reset" @click="reset">重置</el-button>
      <div class="forget">
        <el-button type="text" @click="forget">找回密码</el-button>
        <el-button type="text" @click="note">注册账号</el-button>
      </div>

      <div class="avatar">
        <img src="../assets/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      user: "123456",
      password:"wa123456"
    };
 
  },
  methods:{
     reset(){
     this.user="",
     this.password=""
  },
    registration(){
      if(this.user=='123456'&&this.password=='wa123456'){
        this.$router.push('/neck')
      }else{
        alert("用户名或密码错误")
      }
    },
   forget(){
      this.$router.push('/forget')
        }
      
 }
};
</script>
<style lang="less" scoped>
.all {
  height: 100%;
  background-color: rgb(86, 86, 129);
}
.login {
  height: 300px;
  width: 500px;
  position: absolute;
  border-radius: 3px;
  background-color: pink;
  top: 50%;
  left: 50%;
  border: 2px solid pink;
  transform: translate(-50%, -50%);
}
.avatar {
  height: 130px;
  width: 130px;
  border: 1px solid pink;
  position: absolute;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  box-shadow: 0 0 10px #dddd;
  background-color: tomato;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid pink;
    background-color: yellow;
  }
}
.user {
  position: absolute;
  top: 120px;
  width: 70%;
  left: 15%;
}
.password {
  position: absolute;
  top: 180px;
  width: 70%;
  left: 15%;
}
.Registration {
  position: absolute;
  top: 240px;

  left: 15%;
}
.Reset {
  position: absolute;
  top: 240px;

  left: 70%;
}
.forget {
  position: absolute;
  top: 250px;
  left: 190px;
}
</style>