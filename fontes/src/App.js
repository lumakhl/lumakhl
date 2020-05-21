import './App.scss';

import React from 'react';
import MenuItems from './components/menu';
import MouthView from './components/mouthArea';
import Inventory from './components/inventory';

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
