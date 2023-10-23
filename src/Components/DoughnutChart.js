import React, { useEffect } from 'react';

const DoughnutChart = ({ selectedMatrix }) => {
  useEffect(() => {
    // Fetch data for the selected metric and update the chart
    // You can use a charting library like Chart.js to create the chart
  }, [selectedMatrix]);

  return <div>Doughnut Chart Placeholder</div>;
};

export default DoughnutChart;