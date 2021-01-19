<template>
  <div class="container">
    <div class="login-info">
      <section class="title">
        <h2>Vue3后台系统</h2>
      </section>

      <!-- 输入区 -->
      <section class="input-area">
        <p class="one-item">
          <el-input v-model="name" clearable placeholder="请输入账号 / admin"></el-input>
        </p>
        <p class="one-item">
          <el-input v-model="password" clearable type="password" placeholder="请输入密码 / admin"></el-input>
        </p>
      </section>

      <!-- 提交区 -->
      <section class="submit-area margin-top-twenty">
        <el-button type="primary" @click="onSubmit" style="width: 120px">登录</el-button>
      </section>
    </div>
  </div>
</template>

<script>
import { reactive , toRefs} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { openMsg } from '/@/utils/elementUtil.js'

export default {
  setup(){
    const store = useStore() // 获取vuex实例
    const router = useRouter() // 获取router实例
    const data = reactive({
      name: '',
      password: ''
    })
    // 提交（登录功能）
    const onSubmit = () => {
      const { name, password } = data
      if (name === 'admin' && password === 'admin') {
        sessionStorage.setItem('name', 'admin')
        sessionStorage.setItem('password', 'admin')
        router.push({
          path: '/homepage'
        })
      } else {
        openMsg('请输入正确的账号和密码！', 'info')
      }
    }
    
    return {
      ...toRefs(data),
      onSubmit
    }
  }
}
</script>

<style lang='less' scoped>
:deep(.el-input) {
  width: 100%;
}

.container {
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/background.jpeg');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-info {
    // border: 1px solid red;
    width: 350px;
    padding: 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right, rgba(	245,245,220,0.9), rgba(255,255,224,0.85));

    .title {
      font-weight: bold;
      text-align: center;
    }

    .input-area {
      // border: 1px solid blue;
      display: flex;
      flex-flow: row wrap;

      .one-item {
        flex: 1 0 100%;
        // border: 1px solid red;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;

        .label {
          flex: 0 0 60px;
          border: 1px solid gold;
        }
      }
    }

    .submit-area {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>