import React, { useState } from 'react';
import './ColorPicker.css'; 

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    toggleColorList();
  };

  return (
    <div className="color-picker">
      <button className="pick-color-button" onClick={toggleColorList}>
        {selectedColor ? `Selected Color: ${selectedColor}` : 'Pick a color'}
      </button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => selectColor(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;

