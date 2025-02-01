'use client'
import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Barchat = () => {
    const data = {
        labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juillet", "Aout", "Septembre", 'Octobre', "Nevembre", "Decembre"],
        datasets: [
          {
            label: "Ventes",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90,100,110,120],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      };
      return <Bar data={data} />;
  
}
