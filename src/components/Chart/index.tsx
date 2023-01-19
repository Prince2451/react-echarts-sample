import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { EChartsReactProps } from "echarts-for-react";
import * as echarts from "echarts/core";
import { ECOption } from "../../echarts";

interface ChartProps extends Omit<EChartsReactProps, "echarts"> {
  option: ECOption;
}

const Chart: React.FC<ChartProps> = (props) => {
  return (
    <ReactEChartsCore
      style={{
        // resetting default height of ReactECharts
        // so, can be set while using component
        height: undefined,
      }}
      echarts={echarts}
      {...props}
    />
  );
};

export default Chart;
