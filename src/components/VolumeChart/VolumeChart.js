import React from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "./VolumeChart.styles";

const VolumeChart = (props) => {
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

  const barData = {
    labels: props.dataLabel,
    datasets: [
      {
        label: "Volume 24h",
        data: props.dataPoint,
        fill: true,
        backgroundColor: "#2172E5",
        borderColor: "#00FF5F",
        borderRadius: 2,
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
