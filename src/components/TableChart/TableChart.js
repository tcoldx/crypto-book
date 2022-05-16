import React from "react";
import { Line } from "react-chartjs-2";
import { Container, ChartWrap } from "./TableChart.styles";

const TableChart = ({ dataPoint }) => {
  const price = dataPoint?.price.map((el) => el);
  const newPrice = price.slice(0, 6);

  const data = (canvas) => {
    let borderColor = "";
    if (price[0] > price[price.length - 1]) {
      borderColor = "rgba(254, 16, 64, 1)";
    } else {
      borderColor = "rgba(0, 255, 95, 1)";
    }
    return {
      labels: "currency",
      datasets: [
        {
          tension: 0.4,
          data: newPrice,
          fill: false,
          borderColor: borderColor,
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };
  return (
    <Container>
      <ChartWrap>
        <Line data={data} options={options} width={125} height={70} />
      </ChartWrap>
    </Container>
  );
};

export default TableChart;
