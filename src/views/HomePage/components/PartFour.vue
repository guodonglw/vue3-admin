<template>
  <div class="part-four-area">
    <section class="left-area">
      <el-table :data="tableData">
        <el-table-column
          v-for="(item, index) in tableRow"
          :prop="item.prop"
          :label="item.label"
          :align="item.align || 'center'"
          :key="index">
          <template v-slot:header v-if="item.prop === 'tag'">
            <span style="background-color: rgba(	176,196,222, 0.6); padding: 8px">{{item.label}}</span>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <section class="right-area">
      <div>
        <img src='/@/assets/photo.svg' style="width: 20%"/>
      </div>
      <div class="welcome">
        欢迎来到Vue3的世界！
      </div>
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, reactive, toRefs } from 'vue'

export default {
  setup () {
    const data = reactive({
      tableData:[
        {
          date: '2016-05-02',
          province: '上海',
          city: '普陀区',
          tag: '家'
        },
        {
          date: '2016-05-04',
          province: '上海',
          city: '普陀区',
          tag: '公司'
        },
        {
          date: '2016-05-01',
          province: '上海',
          city: '普陀区',
          tag: '家'
        },
        {
          date: '2016-05-03',
          province: '上海',
          city: '普陀区',
          tag: '公司'
        }
      ],
      tableRow: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'province',
          label: '省份'
        },
        {
          prop: 'tag',
          label: '标签'
        }
      ]
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang='less'>
.part-four-area {
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;

  .left-area {
    flex: 0 1 64%;
    padding: 10px;
    // border: 1px solid blue;
    background-color: rgba(	176,196,222, 0.2);
    box-shadow: 1px 1px 1px rgba(0,0,0,.4);
  }

  .right-area {
    flex: 0 1 34%;
    // border: 1px solid blue;
    min-height: 100px;
    text-align: center;

    .welcome {
      font-size: 2rem;
      background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #00FFFF 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,blue 100%);
      -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
      -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
      -webkit-background-size: 200% 100%; 
      -webkit-animation: masked-animation 4s linear infinite;
      font-size: 35px;
    }

    @keyframes masked-animation {
      0% {
        background-position: 0  0;
      }
      100% {
        background-position: -100%  0;
      }
    }
  }
}
</style>