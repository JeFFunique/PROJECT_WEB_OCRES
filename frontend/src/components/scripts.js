import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["bitcoin", "ethereum", "solana", "binance", "litecoin", "avalanche", "chainlick", "wrapped bitcoin"]

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [16972.25, 1249.99, 14.012, 288.52, 77.88, 13.53, 7.066, 16922.17],
      fill: false,
      tension: 0.1
    }]
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
