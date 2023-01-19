// File exporting registerEcharts function
// which registers echarts required components

// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from "echarts/core";
// Import charts, all with Chart suffix
import { BarChart, ScatterChart } from "echarts/charts";
// import components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  DatasetComponent,
} from "echarts/components";
// Import renderer
import { CanvasRenderer } from "echarts/renderers";
import {
  BarSeriesOption,
  DatasetComponentOption,
  GridComponentOption,
  ScatterSeriesOption,
  TooltipComponentOption,
} from "echarts";

type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | ScatterSeriesOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

function registerEcharts() {
  // Register the required components
  echarts.use([
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    BarChart,
    ScatterChart,
    CanvasRenderer,
  ]);
}

export default registerEcharts;
export type { ECOption };
