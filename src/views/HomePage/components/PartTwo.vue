<template>
  <div class="part-two-area">
    <div id='linechart' style="width: 100%; height: 300px"></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import { onBeforeUnmount, onMounted, reactive } from 'vue'

export default {
  setup () {
    let chart = null
    const drawChart = () => {
      chart = echarts.init(document.getElementById('linechart'))
      chart.setOption({
        backgroundColor: "rgba(	176,196,222, 0.2)",
        title: {
          text: '数据趋势图'
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data:['实际情况','理想']
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 50,
          containLabel: true
        },
        toolbox: {
          feature: {}
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'实际情况',
            type:'line',
            smooth: true,
            animationDuration: 2800,
            animationEasing: 'cubicInOut',
            data: [100, 120, 161, 134, 105, 160, 165]
          },
          {
            name:'理想',
            type:'line',
            itemStyle: {
              normal: {
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            smooth: true,
            animationDuration: 2800,
            animationEasing: 'quadraticOut',
            data:[120, 82, 91, 154, 162, 140, 145]
          }
        ]
      })
    }

    const resize = () => {
      chart && chart.resize()
    }

    onMounted (() => {
      drawChart()
      window.addEventListener('resize', resize)
    })

    onBeforeUnmount (() => {
      window.removeEventListener('resize', resize)
      chart && chart.dispose()
    })

  }
}
</script>

<style lang='less'>
.part-two-area {
  // border: 3px solid gold;
}
</style>