import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useNavigate

const AdsInsights = () => {
  const [showChart, setShowChart] = useState(true);
  const [selectedMatrix, setSelectedMatrix] = useState('');
  const [textAdChecked, setTextAdChecked] = useState(false);
  const [mediaAdChecked, setMediaAdChecked] = useState(false);

  const navigate = useNavigate(); // Use the useNavigate hook to access navigation

  const handleMatrixSelect = (matrix) => {
    setSelectedMatrix(matrix);
  };

  const handleFillData = () => {
    if (textAdChecked || mediaAdChecked) {
      navigate('/fill-data'); // Use the navigate function to redirect to '/fill-data'
    } else {
      alert('Please select at least one Ad type.');
    }
  };

  return (
    <div>
      <h2>Ads Insights</h2>
      <button onClick={() => setShowChart(!showChart)}>Toggle Chart</button>

      {/* Rest of your component */}
    </div>
  );
};

export default AdsInsights;