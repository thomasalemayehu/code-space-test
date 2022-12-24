import React from "react";
import "../../assets/day7/styles/display.css";
const TipCalculatorDisplaySection = ({ label,value }) => {
  return (
    <div className="tip-calculator-display-container">
      <p>
        <span>{label}</span> $ {value}
      </p>
    </div>
  );
};

export default TipCalculatorDisplaySection;
