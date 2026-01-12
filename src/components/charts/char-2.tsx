import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import { createEchartsOptions } from '../../shared/create-echarts-options'
import { bindEchartsResize } from '../../shared/echarts-life'
import { px } from '../../shared/px'

export const Chart2 = () => {
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!divRef.current) return

    const myChart = echarts.init(divRef.current)

    const raw = [
      { name: 'Hollywood', calls: 312, cleared: 168 },
      { name: 'Downtown',  calls: 286, cleared: 142 },
      { name: 'South LA',  calls: 355, cleared: 190 },
      { name: 'West LA',   calls: 240, cleared: 121 },
      { name: 'Valley',    calls: 278, cleared: 156 },
      { name: 'Harbor',    calls: 210, cleared: 98  }
    ]
    
    // ✅ 按报警量降序
    raw.sort((a, b) => b.calls - a.calls)
    
    // ✅ 取 Top6（你要 top6 就是 6；以后数据更多也一样）
    const top = raw.slice(0, 6)
    
    const districts = top.map(i => i.name)
    const callsThisWeek = top.map(i => i.calls)
    const clearedThisWeek = top.map(i => i.cleared)
    
    myChart.setOption(
      createEchartsOptions({
        legend: { show: false },

        grid: { left: px(40), right: px(40), top: px(20), bottom: px(20), containLabel: true },

        xAxis: {
          type: 'value',
          splitLine: { show: false },
          axisLabel: { show: false, fontSize: px(12) }
        },

        yAxis: {
          type: 'category',
          data: districts,
          inverse: true, // 让 Top 在上面（更像“排名”）
          axisLabel: { fontSize: px(12) }
        },

        series: [
          {
            name: '本周报警量',
            type: 'bar',
            data: callsThisWeek,
            barWidth: px(10),
            itemStyle: {
              borderRadius: [2, 2, 2, 2],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#2043f9' },
                { offset: 1, color: '#04a1ff' }
              ])
            }
          },
          {
            name: '本周结案量',
            type: 'bar',
            data: clearedThisWeek,
            barWidth: px(10),
            itemStyle: {
              borderRadius: [2, 2, 2, 2],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#b92ae8' },
                { offset: 1, color: '#6773e7' }
              ])
            }
          }
        ]
      })
    )

    const cleanup = bindEchartsResize(myChart)
    return () =>{
      cleanup?.()
      myChart.dispose()
    }
  }, [])

  return (
    <div className="panel">
      <h2>辖区报警 vs 结案(本周 Top6)</h2>
      <div ref={divRef} className="chart"></div>

      <div className="legend">
        <span className="first"></span>本周报警量
        <span className="second"></span>本周结案量
      </div>
    </div>
  )
}
