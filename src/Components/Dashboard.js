import React from 'react';
import DataTable from './DataTable';

const data = [
  { id: 1, name: 'Item 1', value: 10 },
  { id: 2, name: 'Item 2', value: 5 },
  { id: 3, name: 'Item 3', value: 15 },
  // Add more data
];

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DataTable data={data} />
    </div>
  );
};

export default Dashboard;