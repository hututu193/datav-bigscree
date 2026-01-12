import * as echarts from 'echarts'
import { px } from '../../shared/px'
import { useEffect, useRef } from 'react'
import { createEchartsOptions } from '../../shared/create-echarts-options'
import { bindEchartsResize } from '../../shared/echarts-life'

export const Chart4 = () => {
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = divRef.current
    if (!el) return

    const chart = echarts.init(el)

    const hours = ['00','02','04','06','08','10','12','14','16','18','20','22','24']
    const rate = [0.15, 0.13, 0.11, 0.13, 0.14, 0.15, 0.16, 0.18, 0.21, 0.19, 0.17, 0.16, 0.15]

    chart.setOption(
      createEchartsOptions({
        tooltip: { trigger: 'axis' },

        grid: { left: px(20), right: px(20), top: px(20), bottom: px(40), containLabel: true },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: hours,
          splitLine: { show: true, lineStyle: { color: '#073E78' } },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { color: 'rgba(255,255,255,.75)', fontSize: px(12) }
        },

        yAxis: {
          type: 'value',
          splitLine: { lineStyle: { color: '#073E78' } },
          axisLabel: {
            color: 'rgba(255,255,255,.75)',
            fontSize: px(12),
            formatter: (val: number) => `${Math.round(val * 100)}%`
          }
        },

        series: [
          {
            name: '事件占比',
            type: 'line',
            data: rate,
            smooth: true,
            symbol: 'circle',
            symbolSize: px(8),
            lineStyle: { width: px(2) },
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#414a9f' },
                { offset: 1, color: '#1b1d52' }
              ])
            }
          }
        ]
      })
    )

    const raf = requestAnimationFrame(() => chart.resize())
    const unbind = bindEchartsResize(chart)

    return () => {
      cancelAnimationFrame(raf)
      unbind?.()
      chart.dispose()
    }
  }, [])

  return (
    <div className="panel">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}