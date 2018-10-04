<template>
  <div class="container">
    <div class="container_body">
        <div class="logo-container">
          <img src="" alt="">
          <div class="logo-title">登录</div>
        </div>
      <div class="form-container">
        <el-form class="form" ref="loginForm" :model="loginForm" :rules="rules"  label-position="top" label-width="5rem">
            <el-row>
              <el-form-item label="用户名" prop="loginId">
                  <el-input v-model="loginForm.loginId"></el-input>
                </el-form-item>

            </el-row>
            <el-row>
              <el-form-item label="密码" prop="password">
                  <el-input v-model="loginForm.password" type="password"></el-input>
              </el-form-item>
            </el-row>
            <el-row class="buttons">
              <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <a>忘记密码?</a>
              </el-form-item>

            </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        // loginId: "",
        // password: ""
      },
      rules: {
        loginId: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到20个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          login(this.loginForm).then(res => {
            this.setInfo(res.data.data)
            this.$router.push('/dashboard')
          })
        }
      })
    },
    setInfo(data) {
      sessionStorage.setItem('user',JSON.stringify(data))
    }
  }
}
</script>
<style lang="scss" scoped>

$logo-container-top:0.4rem;
$logo-container-height:2.0rem;
$form-top:$logo-container-height + $logo-container-top - 0.4rem;
$form-height:2.4rem;
$footer-top: $form-top + $form-height + 1.4rem;
$footer-height:0.6rem;
$theme-color:#054b88;

.container {
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  width: 100%;
  height:100%;
  z-index:2;

  & .container_body {
    height: $form-height + $logo-container-height + 0.4rem;

    & .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: $logo-container-height;

      & img{
        width: 120px;
        height: 120px;
      }

      & .logo-title {
        font-size: 0.3rem;
        line-height: 0.3rem;
        padding: 0.1rem 0 0.1rem 0;
        color: #fff;
      }

      & .logo-sub-title{
        font-size: 0.2rem;
        line-height: 0.2rem;
        font-weight:300;
        padding:0 0.1rem 0;
        color: #fff;
      }
      
    }

    & .form-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

     

      & .form {
        height: $form-height;
        width: 3rem;
        padding: 0.16rem 0.52rem 0.26rem 0.52rem;
        border: 1px solid #e8e8e8;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

        & .buttons {
          & a{
            float:right;
            color:#3c6df0;
          }
        }

        & /deep/ .el-form-item__label{
          padding-bottom: 0;
        }
      }
    }
  }
}
</style>

