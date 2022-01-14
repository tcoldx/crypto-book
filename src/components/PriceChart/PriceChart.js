import React from "react";
import { Line } from "react-chartjs-2";
import { Container } from "App.css";

const PriceChart = (props) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(1, "rgba(0,255,102,0.1)");
    gradient.addColorStop(0.5, "rgba(17,121,9, 0.4)");
    gradient.addColorStop(0, "rgba(2,0,36, 1)");
    return {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          label: "BTC",
          borderWidth: 1,
          pointRadius: 2,
          data: [1, 2, 3, 4, 5, 6],
          fill: true,
          backgroundColor: gradient,
          borderColor: "#00FF5F",
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      layout: {
        padding: 15,
        maintainAspectRatio: true,
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
          display: true,
          borderWidth: 0,
        },
        ticks: {
          display: true,
        },
      },
    },
  };
  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  );
};

export default PriceChart;
