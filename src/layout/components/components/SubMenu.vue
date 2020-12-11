<template>
  <el-submenu :index='menu.name' :popper-append-to-body="false">
    <template v-slot:title>
      <div style="display: block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis">
        <i :class="menu.iconCls"></i>
        <span>{{menu.name}}</span>
      </div>
    </template>
    <!-- 子级菜单 -->
    <template v-for="(child, childIndex) in menu.children">
      <MenuItem  v-if="!child.children" :menu='child' :key="'item' + childIndex"/>
      <SubMenu v-else :menu="child" :key="'sub' + childIndex"/>
    </template>
  </el-submenu>
</template>

<script>
import { onMounted } from 'vue'
import MenuItem from './MenuItem.vue'

export default {
  name: 'SubMenu',
  components: {
    MenuItem
  },
  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>