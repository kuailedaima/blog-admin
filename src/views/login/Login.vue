<template>
  <div id="login">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
        label-width="0px"
        class="login_form"
      >
        <!-- 登陆表单输入框 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            clearable
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            show-password
            prefix-icon="iconfont icon-3702mima"
            placeholder="请输入密码"
          />
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div>账号：<input type="text" placeholder="邮箱" v-model="useraccount"/></div>
      <div>密码：<input type="password" v-model="userpassword"/></div>
      <button @click="login">登陆</button>
      <div>第一次使用？<a href="" @click="register">创建一个账户</a></div> -->
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      //form表单绑定对象
      loginForm: {
        username: "",
        password: "",
      },
      //表单验证规则
      loginFormRules: {
        //姓名验证规则
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20个字符", trigger: "blur" },
        ],
        //密码验证规则
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20个字符", trigger: "blur" },
        ],
      },
      useraccount: null,
      userpassword: null,
    };
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate((valid) => {
        console.log(valid);
        if (!valid) return;
      });

      this.$axios
        .post("/login", this.loginForm)
        .then((res) => {
          console.log(res);
          switch (res.meta.status) {
            case 202:
              this.$message.error("用户名或密码错误");
              break;
            case 200:
              this.$message.success("登录成功");
              //登录成功后存储token
              window.sessionStorage.setItem("token", res.data.token);
              this.$router.push("/home");
              break;
            case 404:
              this.$message.error("出错了请稍后!");
              break;
          }
        })
        .catch((err) => {
          console.log(err);
        });

      //************************************************************************ */
      //     let data = {
      //         useraccount:this.useraccount,
      //         userpassword:this.userpassword
      //     }

      //     if(this.useraccount === null || this.useraccount.length ==0) {
      //         alert("账号不能为空");
      //     } else {
      //         if(this.userpassword === null || this.userpassword.length ==0) {
      //             alert("密码不能为空");
      //         } else{
      //             this.$axios.post("/login",qs.stringify(data)).then(res=>{
      //             //回调处理
      //             // console.log(res)
      //                 switch(res){
      // 			    case 0:
      // 				    alert("用户名或密码错误!");
      // 				    break;
      // 			    case 1:
      //                     alert("登陆成功！")
      //                     this.$router.push('/')
      // 				    break;
      // 			    case 2:
      //                     alert("出错了请稍后！")
      // 				    break;
      // 		        }
      //             }).catch(err=>{
      //                 console.log(err)
      //              })
      //         }
      //     }
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  background: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

#login > div {
  margin: 4px;
}

input {
  width: 30%;
  height: 20px;
  border: 1px solid rgb(122, 89, 211);
  border-radius: 10px;
  background-color: #f8f8f8;
  /* outline: none; */
}
input :focus {
  width: 30%;
  height: 20px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
