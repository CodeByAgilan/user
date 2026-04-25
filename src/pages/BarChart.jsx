import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ data }) {
 const options = {

   responsive: true,
   plugins: {
     title: { display: true, text: "Quarterly Revenue" },
     legend: { position: "top" }
   },
   scales: {
     y: { beginAtZero: true }
   }
   
 };
 return <Bar data={data} options={options}/>;
}