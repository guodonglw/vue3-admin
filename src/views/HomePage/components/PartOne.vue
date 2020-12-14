<template>
  <div class="part-one-area">
    <section class="one-item" v-for="(item, index) in obj" :key="index">
      <span class="left-area">
        {{item.label}}
        <br />
        {{item.value}}
      </span>
      <span class="right-area">
        <div class="icon-box">
          {{item.icon}}
        </div>
      </span>
    </section>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const data = reactive({
      obj: [
        {
          label: '新增数据',
          value: 1000,
          icon: 'C'
        }, {
          label: '删除数据',
          value: 2000,
          icon: 'D'
        }, {
          label: '修改数据',
          value: 1000,
          icon: 'U'
        }, {
          label: '查询数据',
          value: 5000,
          icon: 'R'
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
.part-one-area {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  // border: 1px solid blue;
}

.one-item {
  // border: 1px solid red;
  padding: 5px;
  flex: 0 0 24%;
  background-color: rgba(	176,196,222, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  margin-bottom: 10px;

  &:hover {
    .right-area {
      .icon-box {
        transform: rotate(0deg);
        color: #7b1fa2;
        border: 3px solid #8e44ad;
        opacity: 1;
        font-weight: bold;
      }
    }
  }

  .left-area {
    flex: 0 0 60%;
    // border: 1px solid gold;
    text-align: center;
    color: rgba( 	47,79,79, 1);
    font-weight: 500;
  }

  .right-area {
    flex: 1 0 auto;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-box {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #64b5f6;
      border: 2px solid #71787e;
      transform: rotate(-50deg);
      opacity: 0.5;
    }
  }
}
</style>