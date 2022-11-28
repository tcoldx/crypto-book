import React from "react";
import { Line } from "react-chartjs-2";
import { Container } from "./PriceChart.styles";
const PriceChart = (props) => {
      const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, 223);
        gradient.addColorStop(0, "rgba(2,0,36, 0)");
        gradient.addColorStop(0.5, "rgba(13,119,33, 0.5)");
        gradient.addColorStop(1, "rgba(25,26,30, 1)");
    
        return {
          labels: props.dataLabel,
          datasets: [
            {
              lineTension: 0,
              label: "BTC",
              data: props.dataPoint,
              fill: true,
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
        padding: 1,
      },
      responsive: true,
      maintainAspectRatio: false,
    },
    elements: {
      point: {
        radius: 2,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        //min: 60,
        //max: 200,
        grid: {
          display: false,
        },
        ticks: {
          display: window.innerWidth < 699 ? true : false,
        },
      },
    },
  };
console.log(window.innerWidth);
  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  );
};

export default PriceChart;
