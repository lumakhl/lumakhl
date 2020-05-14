import './App.scss';

import React from 'react';
import MenuItems from './MenuItems';
import MouthView from './MouthView';
import Inventory from './Inventory';

function App() {
  return (
    <>
      <div className="container">
        <MouthView />
        <Inventory />
        <MenuItems />
      </div>
    </>
  );
}

export default App;
