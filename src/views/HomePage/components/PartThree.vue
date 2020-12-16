<template>
  <div class="part-three-area">
    <section class="one-item" v-for="(item, index) in id" :key="index">
      <div :id='item' style="width: 100%; height: 300px"></div>
    </section>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive, toRefs } from 'vue'

const chart1Options = {
  tooltip:{},
  legend: {
    data: ['预算分配', '实际开销'],
  },
  grid:{top:'25%',left:'25%',right:'25%',bottom:'25%'},
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5],
      }
    },
    radius: '60%',
    indicator: [
      { name: '销售', max: 6500},
      { name: '管理', max: 16000},
      { name: '信息技术', max: 30000},
      { name: '客服', max: 38000},
      { name: '研发', max: 52000},
      { name: '市场', max: 25000}
    ]
  },
  series: [{
    name: '预算 vs 开销',
    type: 'radar',
    // areaStyle: {normal: {}},
    data : [{
      value : [4300, 10000, 28000, 35000, 50000, 19000],
      name : '预算分配'
    },
    {
      value : [5000, 14000, 28000, 31000, 42000, 21000],
      name : '实际开销'
    }]
  }]
}

const chart2Options = {
  title : {
    text: '用户访问来源',
    subtext: '纯属虚构',
    x:'center'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series : [
    {
      name: '访问来源',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

const chart3Options = {
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : ['周一','周二','周三','周四','周五','周六','周日']
    }
  ],
  yAxis : [
    {
      type : 'value'
    }
  ],
  series : [
    {
      name:'直接访问',
      type:'bar',
      data:[320, 332, 301, 334, 390, 330, 320]
    },
    {
      name:'邮件营销',
      type:'bar',
      stack: '广告',
      data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
      name:'联盟广告',
      type:'bar',
      stack: '广告',
      data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
      name:'视频广告',
      type:'bar',
      stack: '广告',
      data:[150, 232, 201, 154, 190, 330, 410]
    },
    {
      name:'搜索引擎',
      type:'bar',
      data:[862, 1018, 964, 1026, 1679, 1600, 1570],
      markLine : {
        lineStyle: {
          normal: {
            type: 'dashed'
          }
        },
        data : [
          [{type : 'min'}, {type : 'max'}]
        ]
      }
    }
  ]
}

export default {
  setup () {
    const data = reactive({
      id: ['chart1', 'chart2', 'chart3']
    })
    let chart1 = null
    let chart2 = null
    let chart3 = null

    const drawChart = () => {
      chart1 = echarts.init(document.getElementById('chart1'))
      chart1.setOption(chart1Options)
      chart2 = echarts.init(document.getElementById('chart2'))
      chart2.setOption(chart2Options)
      chart3 = echarts.init(document.getElementById('chart3'))
      chart3.setOption(chart3Options)
    }

    const resize = () => {
      chart1 && chart1.resize()
      chart2 && chart2.resize()
      chart3 && chart3.resize()
    }

    onMounted(() => {
      setTimeout(() => {
        drawChart()
      })
      window.addEventListener('resize', resize)
    })

    onBeforeMount(() => {
      window.removeEventListener('resize', resize)
      chart1 && chart1.dispose()
      chart2 && chart2.dispose()
      chart3 && chart3.dispose()
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang='less'>
.part-three-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;

  .one-item {
    flex: 0 0 33%;
    min-width: 300px;
    // border: 1px solid blue;
    background-color: rgba(	176,196,222, 0.2);
    margin-bottom: 10px;
    box-shadow: 1px 1px 1px rgba(0,0,0,.4);
  }
}
</style>