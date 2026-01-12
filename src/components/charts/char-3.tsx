import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import { px } from '../../shared/px'
import { createEchartsOptions } from '../../shared/create-echarts-options'
import { bindEchartsResize } from '../../shared/echarts-life'

export const Chart3 = () => {
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = divRef.current
    if (!el) return

    const chart = echarts.init(el)

    // X 轴：12 周（你后面接接口就替换这些 label）
    const weeks = ['W01','W02','W03','W04','W05','W06','W07','W08','W09','W10','W11','W12']

   
    const seriesData = [
      { name: '盗窃', data: [120, 132, 101, 134, 90, 160, 150, 170, 140, 155, 165, 180] },
      { name: '故意伤人', data: [60, 72, 68, 75, 66, 70, 82, 90, 88, 76, 80, 92] },
      { name: '抢劫', data: [22, 25, 18, 20, 19, 24, 26, 21, 23, 27, 25, 28] },
      { name: '入室盗窃', data: [40, 38, 35, 42, 45, 50, 46, 44, 48, 52, 49, 55] },
      { name: '酒驾', data: [15, 18, 16, 14, 13, 17, 20, 19, 21, 18, 16, 22] },
    ]

    chart.setOption(
      createEchartsOptions({
        legend: {
          bottom: px(10),
          textStyle: { color: 'white' },
          itemWidth: px(24),
          itemHeight: px(10),
          data: seriesData.map(s => s.name),
        },
        
        grid: {
          left: px(20),
          right: px(20),
          top: px(20),
          bottom: px(60),
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: weeks,
          splitLine: { show: true, lineStyle: { color: '#073E78' } },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { color: 'rgba(255,255,255,.75)', fontSize: px(12) },
        },
        yAxis: {
          type: 'value',
          splitLine: { lineStyle: { color: '#073E78' } },
          axisLabel: {
            color: 'rgba(255,255,255,.75)',
            fontSize: px(12),
            formatter: (val: number) => String(val),
          },
        },
        series: seriesData.map(s => ({
          name: s.name,
          type: 'line',
          data: s.data,
          symbol: 'circle',
          symbolSize: px(8),
          lineStyle: { width: px(2) },
          smooth: true,
        })),
      })
    )

    // flex/grid 初次渲染尺寸不稳：补一次 resize
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
      <h2>洛杉矶事件趋势(周数量)</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}
