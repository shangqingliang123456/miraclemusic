<template>
     <div>
      <div class="administrator show">
        <div :class="afterlogin == '登录成功' ? 'disvisable' : 'loginput'">
        <input
          type="text"
          placeholder="请输入miracle账户名"
          class="username"
          v-model="username"
        />
        <input
          type="text"
          placeholder="请输入密码"
          class="password"
          v-model="password"
        />
        <div class="login">
          <el-button type="success" size="40px" @click="login()"
            >登录</el-button
          >
          <el-button type="primary" size="40px" @click="register()">注册</el-button>
        </div>
      </div>
      <div :class="afterlogin == '登录成功' ? 'me' : 'disvisable'">
        <div class="avatar">
          <el-avatar :size="100" src="../photo/choose.jpg" />
          <div class="namecenter">
            <div style="font-size:25px">昵称:{{ user.name }}</div>
            <div>用户星级:{{ user.status }}</div>
            <div>账户余额:{{ user.money }}</div>
          </div>
        </div>
        <el-button type="danger" class="quit" @click="quit">退出登录</el-button>
      </div>
      <el-dialog v-model="visible" title="注册ing" width="30%">
        <el-input v-model="user2.username" placeholder="请输入你要注册的用户名"></el-input>
        <el-input v-model="user2.password" placeholder="请输入你要注册的密码" style="margin-top:10px"></el-input>
        <div class="registerbtn">
          <el-button type="danger" @click="cancel()">取消</el-button>
          <el-button type="success" @click="registeruser()">注册</el-button>
        </div>
      </el-dialog>
      </div>
     </div>
</template>
<script>
import { ElMessage } from 'element-plus'
export default{
    data(){
        return{
            visible:false,
            loging: false,
            myurl:"http://39.103.209.93:4001/",     
            username: "",
            password: "",
            afterlogin: sessionStorage.getItem("afterlogin"),
            user: {
                name: "miracle用户",
                status: sessionStorage.getItem("status"),
                money: sessionStorage.getItem("money"),
            },
            user2:{
                username:"",
                password:"",
                status:"",
                monry:0,
                judge:1
            },
            register1:""
        }
    },
    methods:{
        login() {
      fetch(this.myurl + this.username)
        .then((resp) => resp.json())
        .then((info) => {
          if (info.judge == 2) {
            sessionStorage.setItem("afterlogin", "用户不存在");
            ElMessage.error("用户不存在")
          } else {
            if (this.password == info.password) {
              sessionStorage.setItem("afterlogin", "登录成功");
              sessionStorage.setItem("status",info.status)
              this.user.status = sessionStorage.getItem("status")
              sessionStorage.setItem("money",info.money+"")
              this.user.money = sessionStorage.getItem("money")
              ElMessage({
                message:"登录成功",
                type:'success'
              })
            } else {
              sessionStorage.setItem("afterlogin", "密码错误");
              ElMessage.error("密码错误")
            }
          }
          this.afterlogin = sessionStorage.getItem("afterlogin");
          
        });
    },
    quit(){
      sessionStorage.setItem("afterlogin","")
      this.afterlogin=sessionStorage.getItem("afterlogin")
    },
    register(){
      this.visible=true
    },
    registeruser(){
      fetch(this.myurl+"add",{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(this.user2)
      })
      .then(resp=>resp.json())
      .then(info=>{
        if(info==1){
          this.register1="注册成功"
          ElMessage({
            message:this.register1,
            type:'success'
          })
        }else{
          this.register1="注册失败"
          ElMessage.error(this.register1)
        }
      })
    },
    cancel(){
      this.visible=false
    }
    }
}
</script>
<style>
.disvisable {
  display: none;
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
.login {
  margin-top: 20px;
  display: flex;
  justify-content: center;
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
.administrator {
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
.show {
  animation-name: show;
  animation-duration: 0.4s;
}
@media screen and (max-width: 600px){
  .avatar{
    position: absolute;
    top: 300px;
  }
  .quit{
    position: absolute;
    top: 600px;
  }
}
</style>