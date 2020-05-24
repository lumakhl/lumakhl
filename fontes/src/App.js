import './App.scss';

import React from 'react';

import MenuItems from './components/menu';
import MouthView from './components/mouthArea';
import Inventory from './components/inventory';
import ToothState from './context/tooth/ToothState';

function App() {
  return (
    <ToothState>
      <div className="container">
        <MouthView />
        <Inventory />
        <MenuItems />
      </div>
    </ToothState>
  );
}

export default App;
