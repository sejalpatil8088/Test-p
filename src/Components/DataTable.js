import React, { useState } from 'react';

const DataTable = ({ data }) => {
  const [sortDirection, setSortDirection] = useState('lowToHigh');

  // Function to handle sorting
  const handleSort = () => {
    setSortDirection(sortDirection === 'lowToHigh' ? 'highToLow' : 'lowToHigh');
  };

  // Sort the data based on the selected direction
  const sortedData = data.slice().sort((a, b) => {
    return sortDirection === 'highToLow' ? b.value - a.value : a.value - b.value;
  });

  return (
    <div>
      <button onClick={handleSort}>Toggle Sort</button>
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;