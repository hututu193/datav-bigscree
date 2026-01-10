import * as echarts from 'echarts'
import { px } from '../shared/px'
import { useEffect, useRef } from 'react'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { bindEchartsResize } from '../shared/echarts-life'

export const Chart4 = () => {
    const divRef = useRef(null)
    useEffect(() =>{
        var myChart = echarts.init(divRef.current)
        myChart.setOption(createEchartsOptions({

        }))

        bindEchartsResize(myChart)
    }, [])

    return (
        <div className='案发时段'>
            <h2></h2>
            <div ref={divRef} className='chart chart4'></div>
        </div>
    )
}