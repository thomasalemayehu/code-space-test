import React from "react";
import { useSelector } from "react-redux";
import "../../assets/day2/styles/price.css";
const PriceDisplay = () => {
  const totalSubPrice = useSelector((state) =>
    state.foodCart.cart.reduce((sum, item) => {
      return (sum = sum + item.count * item.price);
    }, 0)
  );
  const tax = (totalSubPrice * 0.35);
  console.log(totalSubPrice);
  return (
    <div className="price-display-container">
      <div className="flex">
        <label htmlFor="">Subtotal: </label>
        <p>${totalSubPrice.toFixed(2)}</p>
      </div>

      <div className="flex">
        <label htmlFor="">Tax: </label>
        <p>${tax.toFixed(2)}</p>
      </div>

      <div className="flex">
        <label htmlFor="">Total: </label>
        <p>${(tax+totalSubPrice).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PriceDisplay;