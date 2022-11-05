<template>
  <div class="trave-map">
    <div id="main"></div>
  </div>
</template>
  
<script>
import geoJson from '@/assets/data.json'
import { travel } from '@/api/api'
export default {
  data() {
    return {
    }
  },
  created() {
    travel().then(res => {
      if (res.data.status === 200) {
        let { points, linesData } = res.data.data;
        this.draw(points,linesData)
      }
    })
  },
  methods: {
    draw(points,linesData) {
      {
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
                shadowColor: 'rgb(127 255 212)',
                shadowOffsetX: 10,
                shadowOffsetY: 10,
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
                  textStyle: {
                    color: 'rgb(139 101 8)'
                  }
                },
                emphasis: {
                  textStyle: {
                    color: 'rgb(144 238 144)'
                  }
                }
              },
              aspectScale: 1,
              zoom: 1.1,
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
            },
            // 散点图配置
            {
              type: 'effectScatter',//散点图
              coordinateSystem: 'geo',//选择geo坐标系
              showEffectOn: 'render',//何时显示特效
              // 'render' 绘制完成后显示特效。
              // 'emphasis' 高亮（hover）的时候显示特效。
              symbolSize: 10, //散点大小
              zlevel: 1,//层级关系
              // 数据
              data: points,
              rippleEffect: {
                period: 15,//动画的周期，秒数。
                scale: 4,// 动画中波纹的最大缩放比例。
                brushType: 'fill',//波纹的绘制方式，可选 'stroke' 和 'fill'。
              },//涟漪特效
            },
            // 关于地图线路动画
            {
              type: 'lines',
              zlevel: 2,
              effect: {
                show: true,
                period: 4,//周期时长
                symbol: 'arrow',//以什么样的样式流动
                symbolSize: 7,
                trailLength: 0.4//拖尾
              },
              lineStyle:{
                normal:{
                  color:'#1DE9B6',
                  width:1,
                  opacity:.1,//透明度
                  curveness:.6//弯曲程度
                }
              },
              data:linesData
            }
          ],
        }
        myChart.setOption(option)
      }
    }
  }
}
</script>
  
<style scoped lang="scss">
.trave-map {
  width: 100%;

  #main {
    width: 100%;
    height: 800px;
    margin: 0px auto;

  }
}
</style>