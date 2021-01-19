<template>
  <div class="bottom-page-container">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MyPage',
  props: {
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  setup (props, context) {
    const handleSizeChange = (size) => {
      console.log(`每页 ${size} 条`)
    }

    const handleCurrentChange = (page) => {
      console.log(`当前页: ${page}`)
      context.emit('update:currentPage', page)
    }

    return {
      handleSizeChange,
      handleCurrentChange
    }
  }
}
</script>

<style lang='less'>
.bottom-page-container {
  width: 100%;
  text-align: right;
}
</style>