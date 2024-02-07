import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function generateRandomIntArray(length, min, max) {
            const randomArray = [];
            for (let i = 0; i < length; i++) {
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                randomArray.push(randomNumber);
            }
            return randomArray;
        }

const RadarChart = () => {
  const data = {
    labels: [
      'Linguistic',
      'Logical-Mathematical',
      'Spatial',
      'Musical',
      'Bodily-Kinesthetic',
      'Interpersonal',
      'Intrapersonal',
      'Naturalistic',
    ],
    datasets: [
      {
        label: 'Intelligence Scores',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
        data: generateRandomIntArray(8, 60, 90), // Hypothetical scores for each intelligence
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, max: 100 },
    },
  };

  return (
    <div>
      <h2>Radar Chart Example (Multiple Intelligences)</h2>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
