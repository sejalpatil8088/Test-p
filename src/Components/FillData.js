import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FillData = () => {
  const [textAdData, setTextAdData] = useState('');
  const [mediaAdData, setMediaAdData] = useState('');

  const history = useHistory();

  const handleSubmit = () => {
    // Your form submission logic goes here

    // Redirect to "Ads Submitted" page
    history.push('/ads-submitted');

    // Wait for 0.6 seconds (600 milliseconds) and then redirect to "Create Ads" page
    setTimeout(() => {
      history.push('/create-ad');
    }, 600);
  };

  return (
    <div>
      <h2>Fill Data</h2>
      <div>
        <label htmlFor="textAdData">Text Ad Data:</label>
        <input
          type="text"
          id="textAdData"
          value={textAdData}
          onChange={(e) => setTextAdData(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mediaAdData">Media Ad Data:</label>
        <input
          type="text"
          id="mediaAdData"
          value={mediaAdData}
          onChange={(e) => setMediaAdData(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FillData;




