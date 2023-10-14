import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'; // Import your main application CSS file
import ColorPicker from './ColorPicker'; // Import the ColorPicker component

function App() {
  const colorOptions = ['Orange', 'Blue', 'Green', 'Yellow', 'Red', 'Black', 'Grey'];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colorOptions} />
    </div>
  );
}

export default App;
