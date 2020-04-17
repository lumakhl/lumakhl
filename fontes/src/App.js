import React from 'react';
import './App.css';
import MenuItems from './MenuItems';
import MouthView from './MouthView';
import MiddleView from './MiddleView';

function App() {
  return (
    <>
      <div className="container">
        <MouthView />
        <MiddleView />
        <MenuItems />
      </div>
    </>
  );
}

export default App;
