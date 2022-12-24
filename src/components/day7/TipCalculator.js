import React, { useEffect, useState } from "react";
import "../../assets/day7/styles/index.css";
import TipCalculatorDisplaySection from "./TipCalculatorDisplaySection";
import MoneyIcon from "../../assets/day7/icons/dollar.svg";
import PeopleIcon from "../../assets/day7/icons/people.svg";
const TipCalculator = () => {
  const [selectedTipPercentage, setSelectedTipPercentage] = useState(5);

  const [numberOfPeople, setNumberOfPeople] = useState(3);
  const [billAmount,setBillAmount] = useState(21);

  const [tipAmount,setTipAmount] = useState(0);
  const [total,setTotal] = useState(billAmount + tipAmount);


  useEffect(() => {
    if(numberOfPeople !== 0 && billAmount !== 0){
      const calculatedTip = (billAmount * (selectedTipPercentage / 100));
      const totalBill = (calculatedTip + billAmount);

      setTipAmount(calculatedTip);
      setTotal(totalBill);
    }
  },[numberOfPeople,billAmount,selectedTipPercentage]);




  //   event
  const onTipPercentageSelect = (selectedValue) => {
    setSelectedTipPercentage(selectedValue);
  };

  const onNumberOfPeopleChange = (e) => {
    setNumberOfPeople(parseInt(e.target.value));
  };

  const onBillAmountChange = (e) => {
    setBillAmount(parseFloat(e.target.value));
  };
  return (
    <div className="tip-calculator-container">
      <div className="tip-calculator-wrapper">
        {/*  */}
        <div className="tip-calculator-inner-wrapper">
          <TipCalculatorDisplaySection
            label="Tip Amount"
            value={tipAmount ? tipAmount.toFixed(2) : 0}
          />
          <TipCalculatorDisplaySection
            label="Total Per Person"
            value={
              total
                ? numberOfPeople
                  ? (total / numberOfPeople).toFixed(2)
                  : total.toFixed(2)
                : 0
            }
          />
          {/* <TipCalculatorDisplaySection /> */}

          <div className="tip-calculator-input-container">
            <div className="tip-calculator-bill-input  tip-calculator-input-wrapper">
              <div>
                <img src={MoneyIcon} alt="" />
                <input
                  type="number"
                  value={billAmount}
                  onChange={onBillAmountChange}
                />
              </div>
              <p>Bill Amount</p>
            </div>
            <div className="tip-calculator-people-input  tip-calculator-input-wrapper">
              <div>
                <img src={PeopleIcon} alt="" />
                <input
                  type="number"
                  value={numberOfPeople}
                  onChange={onNumberOfPeopleChange}
                />
              </div>
              <p>Number of People</p>
            </div>
          </div>
        </div>

        <div className="tip-calculator-tip-selection-container">
          <div
            className={`tip-calculator-tip-selection ${
              selectedTipPercentage === 5
                ? "tip-calculator-tip-selection-selected"
                : ""
            }`}
            onClick={() => {
              onTipPercentageSelect(5);
            }}
          >
            5%
          </div>
          <div
            className={`tip-calculator-tip-selection ${
              selectedTipPercentage === 10
                ? "tip-calculator-tip-selection-selected"
                : ""
            }`}
            onClick={() => {
              onTipPercentageSelect(10);
            }}
          >
            10%
          </div>
          <div
            className={`tip-calculator-tip-selection ${
              selectedTipPercentage === 15
                ? "tip-calculator-tip-selection-selected"
                : ""
            }`}
            onClick={() => {
              onTipPercentageSelect(15);
            }}
          >
            15%
          </div>
          <div
            className={`tip-calculator-tip-selection ${
              selectedTipPercentage === 20
                ? "tip-calculator-tip-selection-selected"
                : ""
            }`}
            onClick={() => {
              onTipPercentageSelect(20);
            }}
          >
            20%
          </div>
        </div>

        <div className="tip-calculator-bottom-display">
          <p>
            <span>Total</span> : ${total?total.toFixed(2):0}
          </p>
          {/* <button className="tip-calculator-button">Calculate</button> */}
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
