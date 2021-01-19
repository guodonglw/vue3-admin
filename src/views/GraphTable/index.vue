<template>
  <section class="top-area">
    <div>
      <el-input placeholder="请输入id" v-model="params.id"></el-input>
      <el-button type="info" size="small" style="margin-left: 20px" @click="search">查询</el-button
      >
    </div>
  </section>

  <section class="middle-area margin-top-twenty">
    <el-table :data="showData" border cellspacing="0" cellpadding="0">
      <el-table-column
        v-for="(item, index) in tableRow"
        :prop="item.prop"
        :label="item.label"
        :align="item.align || 'center'"
        :key="index"
      >
        <template v-slot:header v-if="item.prop === 'tag'">
          <span
            style="background-color: rgba(176, 196, 222, 0.6); padding: 8px"
            >{{ item.label }}</span
          >
        </template>
      </el-table-column>
    </el-table>
  </section>

  <section class="bottom-area margin-top-twenty">
    <MyPage :total='total' v-model:currentPage='currentPage'/>
  </section>
</template>

<script>
import { computed, nextTick, onMounted, reactive, toRefs, watch } from "vue"
import MyPage from '/@/components/MyPage/index.vue'

export default {
  components: {
    MyPage
  },
  setup() {
    const data = reactive({
      params: {
        id: ''
      },
      tableData: [],
      showData: [],
      tableRow: [
        {
          prop: "id",
          label: "序号id"
        },
        {
          prop: "date",
          label: "日期"
        },
        {
          prop: "province",
          label: "省份"
        },
        {
          prop: "tag",
          label: "标签"
        }
      ],
      currentPage: 1
    })

    const total = computed(() => {
      if (data.params.id) {
        return data.showData.length
      } else {
        return data.tableData.length
      }
    })

    watch(() => data.currentPage, (newValue, oldValue) => {
      pageData()
    })

    const pageData = () => {
      data.showData = data.tableData.slice(10 * (data.currentPage - 1), 10 * data.currentPage)
    }

    const search = () => {
      if (data.params.id) {
        data.showData = data.tableData.filter((item) => item.id == data.params.id)
      } else {
        data.showData = data.tableData
      }
    }

    const init = () => {
      for (let i = 0; i < 20; i++) {
        data.tableData.push(
          {
            id: i + 1,
            date: "2016-05-02",
            province: "上海",
            city: "普陀区",
            tag: "家" + i
          }
        )
      }
      pageData()
    }

    onMounted(() => {
      init()
    })

    return {
      ...toRefs(data),
      total,
      search
    };
  },
};
</script>

<style lang='less'>
.top-area {
  // height: 120px;
  // border: 1px solid red;
  background-color: rgba(105, 105, 105, 0.2);
  padding: 10px;
}

.middle-area {
  // height: 300px;
  // border: 1px solid blue;
}

.bottom-area {
  // height: 100px;
  // border: 1px solid gold;
}
</style>