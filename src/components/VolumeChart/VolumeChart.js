import React from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "./VolumeChart.styles";

const VolumeChart = () => {
  const options = {
    plugins: {
      legend: {
        display: true,
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
          display: true,
          borderWidth: 0,
        },
        ticks: {
          display: true,
        },
      },
    },
  };

  const barData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Volume 24h",
        data: [1, 2, 3, 4, 5],
        fill: true,
        backgroundColor: "#2172E5",
        borderColor: "#00FF5F",
      },
    ],
  };
  return (
    <Container>
      <Bar data={barData} options={options} />
    </Container>
  );
};

export default VolumeChart;
