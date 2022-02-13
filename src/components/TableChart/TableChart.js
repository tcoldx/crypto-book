import React from "react";
import { Line } from "react-chartjs-2";
import { Container, ChartWrap } from "./TableChart.styles";

const TableChart = ({ dataPoint }) => {
  const price = dataPoint?.price.map((el) => el);

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(1, "rgba(0,255,102,0.1)");
    gradient.addColorStop(0.5, "rgba(17,121,9, 0.4)");
    gradient.addColorStop(0, "rgba(2,0,36, 1)");
    return {
      labels: "currency",
      datasets: [
        {
          lineTension: 0.3,
          label: "BTC",
          pointRadius: 0,
          data: price,
          fill: false,
          backgroundColor: gradient,
          borderColor: "#00FF5F",
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
        padding: 20,
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
          drawTicks: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <Container>
      <ChartWrap>
        <Line data={data} options={options} />
      </ChartWrap>
    </Container>
  );
};

export default TableChart;
