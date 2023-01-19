import "./styles/App.css";

import Chart from "./components/Chart";
import data from "./data/Wine-Data.json";
import { ECOption } from "./echarts";

const App: React.FC = () => {
  const getBarChartOptions = (): ECOption => {
    const xAxisLabels: string[] = [];
    const malicAcidForAlcohol: Record<string, number> = {};
    const totalMalicAcidForAlcohol: Record<string, number> = {};
    data.forEach((ele) => {
      const alcoholValue = ele.Alcohol.toString();
      if (!xAxisLabels.includes(alcoholValue)) {
        xAxisLabels.push(alcoholValue);
        malicAcidForAlcohol[alcoholValue] = 0;
        totalMalicAcidForAlcohol[alcoholValue] = 0;
      }
      malicAcidForAlcohol[alcoholValue] += ele["Malic Acid"];
      totalMalicAcidForAlcohol[alcoholValue]++;
    });

    return {
      series: [
        {
          type: "bar",
          data: xAxisLabels.map((ele) =>
            (malicAcidForAlcohol[ele] / totalMalicAcidForAlcohol[ele]).toFixed(
              2
            )
          ),
        },
      ],
      xAxis: {
        type: "category",
        data: xAxisLabels,
        name: "Alcohol",
        nameLocation: "middle",
        nameGap: 30,
      },
      grid: {
        containLabel: true,
        left: "7.5%",
        right: "7.5%",
      },
      yAxis: {
        type: "value",
        name: "Malic Acid",
        nameLocation: "middle",
        nameGap: 30,
      },
    };
  };

  const getScatterChartOptions = (): ECOption => {
    return {
      xAxis: {
        name: "Color intensity",
        nameLocation: "middle",
        nameGap: 30,
      },
      grid: {
        containLabel: true,
        left: "7.5%",
        right: "7.5%",
      },
      yAxis: {
        name: "Hue",
        nameLocation: "middle",
        nameGap: 30,
      },
      series: {
        type: "scatter",
        symbolSize: 15,
        data: data.map((ele) => [ele["Color intensity"], ele.Hue]),
      },
    };
  };

  return (
    <div className="app">
      {/* Bar chart */}
      <Chart className="chart alcohol-chart" option={getBarChartOptions()} />
      {/* Scatter chart */}
      <Chart
        className="chart color-intensity-chart"
        option={getScatterChartOptions()}
      />
    </div>
  );
};

export default App;
