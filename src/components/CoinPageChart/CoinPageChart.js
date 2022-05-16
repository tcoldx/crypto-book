import React from "react";
import { Line } from "react-chartjs-2";
import { ClipLoader } from "react-spinners";
import { ChartWrapper } from "./CoinPageChart.styles";

const CoinPageChart = (props) => {
  console.log(props);
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
          label: "BTC",
          pointRadius: 0,
          data: props.dataPoint,
          fill: true,
          backgroundColor: gradient,
          borderColor: "#707070",
          borderWidth: 1,
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
        padding: 0,
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
  if (props.loading) {
    return <ClipLoader color="#00FC2A" />;
  }
  return (
    <ChartWrapper>
      <Line height={80} options={options} data={data} />
    </ChartWrapper>
  );
};

export default CoinPageChart;
