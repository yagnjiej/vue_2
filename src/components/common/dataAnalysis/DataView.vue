<template>
  <div class="data-view">
    <el-card>
      <div id="main1"></div>
    </el-card>

    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>
  
<script>
import { dataview } from '@/api/api'
export default {
  data() {
    return {}
  },
  created() {
    // 第二个图表
    dataview().then(res => {
      if (res.data.status === 200) {
        let { legend, xAxis, series } = res.data.data
        this.draw(legend, xAxis, series)
      }
    })
  },
  mounted() {
    // 初始化实例
    console.log(this.$echarts);
    let myChart = this.$echarts.init(document.getElementById('main1'))
    myChart.setOption({
      title: {
        text: '大佬进阶班'
      },
      tooltip: {},

      xAxis: {
        data: ['一班', '二班', '三班', '四班', '五班', '六班',]
      },
      yAxis: {},
      series: [{
        name: '人数',
        type: 'bar',
        data: [45, 48, 46, 51, 49, 36]
      }]
    })
  },
  methods: {
    draw(legend, xAxis, series) {
      let myChart = this.$echarts.init(document.getElementById('main2'))
      let option = {
        title: {
          text: '会话量'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legend
        },
        xAxis: {
          type: 'category',
          data: xAxis
        },
        yAxis: {
          type: 'value'
        },
        series: series
      }
      myChart.setOption(option)
    }
  }
}
</script>
  
<style scoped lang="scss">
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .el-card {
    width: 50%;

    #main1,
    #main2 {
      height: 500px;
    }
  }
}
</style>