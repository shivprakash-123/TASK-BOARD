import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Status from './component/Filter';
import Navbar from './component/Navbar';
import FilterByUser from './component/FilterByUser';
import Priority from './component/Prority';

function App() {
  
  const [data, setData] = useState() // Set an initial value for the state as an empty array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.tickets);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
    console.log(data)
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='home-display'>
          <Routes>
            {data && <Route exact path="/Status" element={<Status data={data}/>} />}
            <Route exact path="/User" element={<FilterByUser data={data} />} />
            <Route exact path="/priority" element={<Priority data = {data}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
