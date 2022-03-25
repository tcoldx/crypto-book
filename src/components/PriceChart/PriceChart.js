import React from "react";
import { Line } from "react-chartjs-2";
import { Container } from "./PriceChart.styles";
import { ClipLoader } from "react-spinners";

const PriceChart = (props) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(1, "rgba(0,255,102,0.1)");
    gradient.addColorStop(0.5, "rgba(17,121,9, 0.4)");
    gradient.addColorStop(0, "rgba(2,0,36, 1)");
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
          borderColor: "#00FF5F",
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
          display: true,
        },
      },
    },
  };
  if (!props.dataPoint && !props.dataLabel) {
    return (
      <Container>
        <ClipLoader color="#00FC2A" />
      </Container>
    );
  }
  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  );
};

export default PriceChart;
