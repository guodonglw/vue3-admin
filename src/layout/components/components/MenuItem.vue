<template>
  <el-menu-item :index="menu.path">
    <div style="display: block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis">
      <i :class="menu.iconCls"></i>
      <slot name="title">
        {{menu.name || '未命名菜单'}}
      </slot>
    </div>
  </el-menu-item>
</template>

<script>
import { computed, onMounted } from 'vue'

export default {
  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const menu = props.menu
    const id = computed(() => menu.path.substring(1))

    return {
      id
    }
  }
}
</script>

<style>

</style>