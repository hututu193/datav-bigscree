import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
const px = (n: number) => n / 2420 * window.pageWidth 

export const Chart1 = ()=>{
    const divRef = useRef(null)
    useEffect(()=>{

        // console.log(divRef.current)
        // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(divRef.current);
// 绘制图表
myChart.setOption({
    textStyle:{
        fontSize: px(12),
        color: '#79839E'
    },
  title: {
    show: false
  },
  legend: {show: false},
  tooltip: {},
  xAxis: {
    data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
    axisTick: {show: false},
    axisLine: {
      lineStyle: {color: '#083B70'}
    },
    axisLabel:{
        fontSize: px(12),
        formatter(val: string){
          // console.log(val)
          if(val.length > 2){
            const array = val.split('')
            array.splice(2, 0, '\n')
            return array.join('')
          }else{
            return val
          }
        }
    }
  },

  grid:{
    x: px(40),
    y: px(40),
    x2: px(40),
    y2: px(40)
  },

  yAxis: {
    splitLine: {show: false},
    axisLine: {
      show: true,
      lineStyle: {color: '#083B70'}
    },
    axisLabel:{
        fontSize: px(12),     
    }
  },
  
  series: [
    {
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
    }, [])

    return (
        <div className="bordered 管辖统计">
        <h2>案发派出所管辖统计</h2>
                        <div ref={divRef} className="chart">

                        </div>
                        </div>
    )
}