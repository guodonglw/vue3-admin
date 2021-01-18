<template>
  <div class="layout-container">
    <!-- 头部 -->
    <section class="head-area">
      <HeadBar />
    </section>

    <!-- 侧边栏/内容 -->
    <section class="body-area">
      <!-- 侧边栏 -->
      <section :class="['side-bar', fold ? 'side-bar-fold' : '']">
        <NavBar />
      </section>

      <!-- 内容 -->
      <section class="content-area">
        <div class="main-area">
          <router-view></router-view>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import HeadBar from './components/HeadBar.vue'
import NavBar from './components/NavBar.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    HeadBar,
    NavBar
  },
  setup () {
    const store = useStore() // 获取vuex实例
    const fold = computed(() => store.state.fold)

    return {
      fold
    }
  }

}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100vw;
  height: 100vh;
}

.head-area {
  // border: 2px solid blue;
  height: 50px;
}

.body-area {
  // border: 2px solid gold;
  height: calc(100vh - 50px);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  .side-bar {                                                       
    flex: 0 0 200px;
    overflow-y: auto;
    overflow-x: hidden;
    // border: 2px solid red; 
  }

  .side-bar-fold {
    flex: 0 0 60px;
  }

  .content-area {
    flex: 1 1 auto;
    // border: 2px solid blue;
    padding: 20px 20px;
    overflow: auto;

    .main-area {
      background-color: #fff;
      border-radius: 10px;
      // height: 100%;
      min-height: 100%;
      padding: 20px 20px;
    }
  }
}

/*控制整个滚动条*/
::-webkit-scrollbar {
  background-color: #fff;
  width: 8px;
  background-clip: padding-box;
}

/*滚动条中间滑动部分*/
::-webkit-scrollbar-thumb {
  background-color: #C0C0C0;
  border-radius: 5px;
}
</style>