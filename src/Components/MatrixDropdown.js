import React, { useState } from 'react';

const MatrixDropdown = ({ onSelectMatrix }) => {
  const [selectedMatrix, setSelectedMatrix] = useState('');

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedMatrix(selectedValue);
    onSelectMatrix(selectedValue);
  };

  return (
    <div>
      <label htmlFor="matrixSelect">Select a Metric: </label>
      <select
        id="matrixSelect"
        onChange={handleSelect}
        value={selectedMatrix}
      >
        <option value="">-- Select Matrix --</option>
        <option value="metric1">Metric 1</option>
        <option value="metric2">Metric 2</option>
        <option value="metric3">Metric 3</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default MatrixDropdown;