<template>
  <div class="head-container">
    <section :class="['front', fold ? 'front-fold' : '']">
      <i class="el-icon-platform-eleme" v-if='fold'></i>
      <span v-else>Vue3后台系统</span>
    </section>

    <section class="middle margin-left-twenty">
      <i class="el-icon-s-unfold" v-if='fold' @click="updateFold"></i>
      <i class="el-icon-s-fold" v-else @click="updateFold"></i>
    </section>

    <section class="end">
      {{name}}
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore() // 获取vuex实例
    const name = computed(() => sessionStorage.getItem('name') || 'admin')
    const fold = computed(() => store.state.fold)

    const updateFold = () => {
      store.dispatch('UpdateFold')
    }

    return {
      name,
      fold,
      updateFold
    }
  }
}
</script>

<style lang="less" scoped>
.head-container {
  // border: 1px solid red;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(105,105,105,0.1);
}

.front, .middle, .end {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.front {
  flex: 0 0 200px;
  // border: 1px solid #0f1b36;
  background-color: #0f1b36;
  color: white;
}

.front-fold {
  flex: 0 0 60px;
  color: grey;
}

.middle {
  flex: 1 0 auto;
  justify-content: flex-start;
}

.end {
  flex: 0 0 200px;
  border-left: 1px solid #0f1b36;
}
</style>