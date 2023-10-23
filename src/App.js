
import { useState } from 'react';
import TopNav from './Components/TopNav';
import "./App.css";
import DataTable from './Components/DataTable';
import AdsInsights from './Components/AdsInsights';
import CreateAd from './Components/CreateAd';
import AdsSubmitted from './Components/AdsSubmitted';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'; // Import Routes instead of Route

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 5 },
    { id: 3, name: 'Item 3', value: 15 },
    // Add more data
  ]);

  const [sortDirection, setSortDirection] = useState('lowToHigh');
  const [showAdsInsights, setShowAdsInsights] = useState(false);
  const [textAdChecked, setTextAdChecked] = useState(false);
  const [mediaAdChecked, setMediaAdChecked] = useState(false);

  const handleSort = () => {
    setSortDirection(sortDirection === 'lowToHigh' ? 'highToLow' : 'lowToHigh');
  };

  const toggleAdsInsights = () => {
    setShowAdsInsights(!showAdsInsights);
  };

  const handleTextAdToggle = () => {
    setTextAdChecked(!textAdChecked);
  };

  const handleMediaAdToggle = () => {
    setMediaAdChecked(!mediaAdChecked);
  };

  return (
    <div className="App">
      <Router>
        <TopNav
          onTextAdToggle={handleTextAdToggle}
          onMediaAdToggle={handleMediaAdToggle}
          textAdChecked={textAdChecked}
          mediaAdChecked={mediaAdChecked}
        />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Table with Sorting</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSort}
          >
            Toggle Sort
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleAdsInsights}
          >
            Toggle Ads Insights
          </button>

          <Routes>
            <Route path="/create-ad" element={<CreateAd />} />
            <Route path="/ads-submitted" element={<AdsSubmitted />} />
            <Route
              path="/dashboard"
              element={
                <>
                  {showAdsInsights && <AdsInsights />}
                  <DataTable data={data} sortDirection={sortDirection} />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
