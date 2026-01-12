import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import { px } from '../../shared/px'
import { createEchartsOptions } from '../../shared/create-echarts-options'
import { bindEchartsResize } from '../../shared/echarts-life'

export const Chart1 = () => {
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!divRef.current) return

    const chart = echarts.init(divRef.current)

    const districts = [
      'Central', 'Rampart', 'Southwest', 'Hollywood', 'Wilshire',
      'West LA', 'N Hollywood', 'Van Nuys', 'Pacific'
    ]

    chart.setOption(
      createEchartsOptions({
        grid: { left: px(40), right: px(20), top: px(40), bottom: px(60), containLabel: true },

        xAxis: {
          type: 'category',
          data: districts,
          axisTick: { show: false },
          axisLine: { lineStyle: { color: '#083B70' } },
          axisLabel: {
            interval: 0,
            fontSize: px(12),
            rotate: 20, // 英文长一点就旋转，别硬换行
          },
        },

        yAxis: {
          type: 'value',
          splitLine: { show: false },
          axisLine: { show: true, lineStyle: { color: '#083B70' } },
          axisLabel: { fontSize: px(12) },
        },

        series: [
          {
            type: 'bar',
            data: [12, 26, 18, 32, 15, 21, 28, 17, 23], // 9 个，和 districts 对齐
            itemStyle: { borderRadius: [2, 2, 0, 0] }, // ✅ 替代 barBorderRadius
          },
        ],
      })
    )

    const raf = requestAnimationFrame(() => chart.resize())
    const cleanup = bindEchartsResize(chart)

    return () => {
      cancelAnimationFrame(raf)
      cleanup?.()
    }
  }, [])

  return (
    <div className="panel">
      <h2>LAPD 分局事件统计</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}
