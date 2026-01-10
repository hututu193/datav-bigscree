import { baseEchartsOptions } from "./base-chart-options"; 
import * as echarts from 'echarts';
import { px } from "./px";



export const createEchartsOptions = (options: echarts.EChartsCoreOption) => {

    const opt = options as any;

const result = ({ ...baseEchartsOptions, ...options } as any);
   
    if(!opt?.xAxis?.axisLabel?.fontSize){
        result.xAxis = result.xAxis || {}
        result.xAxis.axisLabel = result.xAxis.axisLabel || {}
        result.xAxis.axisLabel.fontSize = px(12)
    }

    if(!opt?.yAxis?.axisLabel?.fontSize){
        result.yAxis = result.yAxis || {}
        result.yAxis.axisLabel = result.yAxis.axisLabel || {}
        result.yAxis.axisLabel.fontSize = px(12)
    }
    return result;
}