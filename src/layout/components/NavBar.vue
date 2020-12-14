<template>
  <div class="nav-container">
    <el-menu
      :default-active='active'
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :collapse="fold"
      router>
      <template v-for="(item, index) in routes">
        <!-- 一级菜单渲染 -->
        <MenuItem v-if="!item.hidden && item.leaf" :menu='item.children[0]' :key="'item-menu' + index" />
        <!-- 多级菜单渲染 -->
        <SubMenu v-else-if="!item.hidden" :menu='item' :key="'sub-menu' + index" />
      </template>
    </el-menu>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import $ from 'jquery'
import SubMenu from './components/SubMenu.vue'
import MenuItem from './components/MenuItem.vue'

export default {
  components: {
    SubMenu,
    MenuItem
  },
  setup () {
    const store = useStore() // 获取vuex实例
    const router = useRouter() // 获取router实例
    const route = useRoute() // 获取当前route信息
    const fold = computed(() => store.state.fold)
    const routes = computed(() => router.options.routes)
    const active = computed(() => route.path)

    // 处理菜单栏选择事件
    const handleSelect = (item) => {
      console.log(item)
    }

    return {
      active,
      fold,
      routes,
      handleSelect
    }
  }
}
</script>

<style lang="less" scoped>
.nav-container {
  height: 100%;
  background-color: #0f1b36;
}
</style>