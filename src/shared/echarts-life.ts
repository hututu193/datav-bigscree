// src/shared/echarts-life.ts

type EChartsLike = {
    resize: () => void;
    dispose: () => void;
  };
  
  export function bindEchartsResize(chart: EChartsLike) {
    const onResize = () => chart.resize();
  
    window.addEventListener("resize", onResize);
    
    onResize();
  
    return () => {
      window.removeEventListener("resize", onResize);
      chart.dispose();
    };
  }
  