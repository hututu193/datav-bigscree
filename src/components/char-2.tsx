import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import {createEchartsOptions} from '../shared/create-echarts-options';
import { bindEchartsResize } from '../shared/echarts-life';
import { px } from '../shared/px';

export const Chart2 = ()=>{
    const divRef = useRef(null)

    useEffect(()=>{
      
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
          legend: {
            show: false
           },
          
          grid: { left: px(40), right: px(40), top: px(20), bottom: px(20) },
          xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01],
              splitLine: { show: false }, // 隐藏X轴方向的分割线（竖线
              axisLabel:{
                show: false,
                fontSize: px(12),     
              }
            },

          yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],

            axisLabel:{
              
              fontSize: px(12),     
          }
          },
          series: [
            {
              // name: '破案排名1',
              type: 'bar',
              data: [18, 23, 29, 70, 44, 63],
              itemStyle: {
                borderRadius: [2, 2, 0, 0], //柱体圆角   
                color: new echarts.graphic.LinearGradient(
                    //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                    //通过修改前4个参数，可以实现不同的渐变方向
                    /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                      每项为一个对象，包含offset和color两个参数
                    */
                    0, 0, 1, 0, [{//代表渐变色从正上方开始
                            offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                            color: '#2043f9'
                        }, //柱图渐变色
                        { 
                            offset: 1, //指100%处的颜色
                            color: '#04a1ff'
                        }
                    ]
                ),
            }

            },
            {
              // name: '破案排名',
              type: 'bar',
              data: [19, 23, 31, 124,41, 68],
              itemStyle: {
                borderRadius: [2, 2, 0, 0], //柱体圆角   
                color: new echarts.graphic.LinearGradient(
                    //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                    //通过修改前4个参数，可以实现不同的渐变方向
                    /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                      每项为一个对象，包含offset和color两个参数
                    */
                    0, 0, 1, 0, [{//代表渐变色从正上方开始
                            offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                            color: '#b92ae8'
                        }, //柱图渐变色
                        { 
                            offset: 1, //指100%处的颜色
                            color: '#6773e7'
                        }
                    ]
                ),
            }
            }
          ]

      }))
      return bindEchartsResize(myChart)
    })

     

    return (
        <div className="破获排名">
          <h2>案件破获排名</h2>
          <div ref={divRef} className="chart"></div>
          <div className="legend">
              <span className="first"></span>破案排名1
              <span className="second"></span>破案排名
          </div> 
        </div>
    )
}