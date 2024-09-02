import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TabNavigation from './TabNavigation';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="left-half"></div>
        <div className="right-half">
          <TabNavigation />
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
