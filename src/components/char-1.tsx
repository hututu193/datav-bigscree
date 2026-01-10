import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { px } from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';
import { bindEchartsResize } from '../shared/echarts-life';

export const Chart1 = ()=>{
    const divRef = useRef(null)
    useEffect(()=>{

        // console.log(divRef.current)
        // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(divRef.current);
// 绘制图表
myChart.setOption(createEchartsOptions({


xAxis: {
  data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
  axisTick: {show: false},
  axisLine: {
    lineStyle: {color: '#083B70'}
  },
  // grid: { left: px(40), right: px(40), top: px(40), bottom: px(150) },
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
}));

bindEchartsResize(myChart)
    }, [])

    return (
        <div className="管辖统计">
        <h2>案发派出所管辖统计</h2>
                        <div ref={divRef} className="chart">

                        </div>
                        </div>
    )
}