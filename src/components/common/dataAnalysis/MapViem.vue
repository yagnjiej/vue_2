<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>
  
<script>
import geoJson from '@/assets/data.json'
export default {
  data() {
    return {
    }
  },
  mounted() {
    let myChart = this.$echarts.init(document.querySelector('#main'))
    this.$echarts.registerMap('china', geoJson)//注册可用的地图,必须包括geo组件或者map图表类型的时候才可以使用
    console.log(geoJson);
    let option = {
      backgroundColor: '#00bfff',
      geo: {
        map: 'china',
        aspectScale: 1,//scale地图长宽比
        zoom: 1.1,//缩放比
        //每个样式
        itemStyle: {
          normal: {
            areaColor: {
              //径向渐变
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgb(64 224 208)'
                },
                {
                  offset: 1,
                  color: 'rgb(0 255 255)'
                }
              ],
              globalCoord: true
            },
            shadowColor:'rgb(127 255 212)',
            shadowOffsetX:10,
            shadowOffsetY:10,
          }
        },
        regions: [{
          name: '南海诸岛',
        }]
      },
      series: [//配置地图 图表相关参数 绘制地图 
        {
          type: 'map', 
          label: {
            normal: {
              show: true,
              textStyle:{
                color:'rgb(139 101 8)'
              }
            },
            emphasis:{
              textStyle:{
                 color:'rgb(144 238 144)'
              }
            }
          },
           aspectScale: 1,
          zoom:1.1,
          map: 'china',
          itemStyle: {
            normal: {
              backgroundColor: '#0ff',
              borderWidth: 1,
              areaColor: {
                //径向渐变
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgb(84,255,159)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(144,238,144)'
                  }
                ],
                globalCoord: true
              }
            },
            emphasis: {
              areaColor: 'rgb(46,229,206)',
              borderWidth: 0.1
            }
          }
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>
  
<style scoped lang="scss">
.map-view {
  width: 100%;

  #main {
    width: 100%;
    height: 800px;
    margin: 0px auto;

  }
}
</style>