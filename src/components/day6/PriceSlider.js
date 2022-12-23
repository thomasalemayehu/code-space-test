import React from "react";
import "../../assets/day6/styles/index.css";

import { useState } from "react";
const PriceSlider = () => {
  const [selectedValue,setSelectedValue] = useState(5);

  const onSliderChange = (e) => {
    setSelectedValue(parseFloat(e.target.value));
  };
  return (
    <div className="price-slider-container">
      <div className="price-slider-wrapper">
        <p className="price-slider-price-info">
            $ {selectedValue.toFixed(2)}
        </p>

        <div className="price-slider-slider-container">
          <input type="range" min='0' max='100' value={selectedValue} onChange={onSliderChange} step='0.1'/>
        </div>

        <button className="price-slider-buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default PriceSlider;
