import React from "react";
import { Line } from "react-chartjs-2";
import { ChartWrapper } from "./CoinPageChart.styles";

const CoinPageChart = (props) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, "rgba(105, 105, 105)");
    gradient.addColorStop(0.5, "rgba(1, 65, 34)");
    gradient.addColorStop(1, "#191B1F");
    return {
      labels: props.dataLabel,
      datasets: [
        {
          lineTension: 0.3,
          label: "BTC",
          pointRadius: 0,
          data: props.dataPoint,
          fill: true,
          backgroundColor: gradient,
          borderColor: "#707070",
          borderWidth: 2,
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      layout: {
        padding: 15,
        maintainAspectRatio: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawTicks: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <ChartWrapper>
      <Line height="100%" options={options} data={data} />
    </ChartWrapper>
  );
};

export default CoinPageChart;
