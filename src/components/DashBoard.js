import React from 'react';
import '../App.css';
import { Bar, Doughnut,Line } from 'react-chartjs-2'; 
import {
  Chart as ChartJSR, ArcElement, BarElement,LineElement,PointElement,
  CategoryScale,
  LinearScale,Tooltip, Legend,
} from 'chart.js';
ChartJSR.register(ArcElement, BarElement, CategoryScale, PointElement, LinearScale,LineElement,Tooltip, Legend);
const data = {
  labels: ["Active", "pending", "progressive","Terminated"],
  datasets: [
    {
      label: "Projects Status",
      data: [50, 10, 20,30],
      backgroundColor: ["#070269ff", "#03009cff", "#0339c3ff","#170bfdff"],
      bordercolor: ["green"],
      borderWidth: 3,
      hoverOffset: 15,
      innerradius: 0,
      outerRadius: 100,
    }
  ]
};

const BarData = {
  labels:["2020","2021","2022","2023","2024","2025"],
  datasets:[
    {
      label:"Yearly Stats",
      data:[200, 250, 150,50,100,300],
      barPercentage:0.5,
      backgroundColor:["#070269ff", "#03009cff", "#0339c3ff","#170bfdff","#4646d6ff","#5801faff"],
      barThickness:20,
      maxBarThickness:30,
      hoverBorderWidth:5,
      hoverBorderColor:data.datasets[0].backgroundColor,
    }
  ]
};

function DashBoard() {
  return (
    <>
      <div className='dashBoard-container'>
        <div className="doughNut">
        <div className='doughNutComponent'>
         <h2> <Doughnut data={data} />
          👉Projects</h2>
          </div>
        </div>

        <div className="barChartComponent">
          <h2 className='barChartOverlFlow'>
            <Bar data={BarData} />
            Bar Chart</h2>
        </div>
        <div className="LineChartComponent">
<h2>
LineChartComponent 
<Line data={BarData} />
  
</h2>
        </div>
      </div>  
    </>
  );
}
export default DashBoard;