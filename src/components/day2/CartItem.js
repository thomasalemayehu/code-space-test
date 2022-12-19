import React from "react";
import PropTypes from "prop-types";
import "../../assets/day2/styles/cart.css";
import Chevron from "../../assets/day2/icons/chevron.svg";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./features/foodCartSlice";
const CartItem = ({ id, name, imagePath, count, price }) => {
  console.log(id);
  const dispatch = useDispatch();

  const addSameItem = () => {
    dispatch(addToCart({ name, price, id, imagePath }));
  };

  const removeSameItem = () => {
    dispatch(removeFromCart({ name, price, id, imagePath }));
  };
  return (
    <div className="cart-item-container">
      <div className="cart-item-image-display">
        <img
          src={imagePath}
          className="cart-item-image absolute-center"
          alt=""
        />
        <div className="cart-item-image-count absolute-center">{count}</div>
      </div>

      <div className="cart-item-content-display">
        <div className="cart-item-content-display-top">
          <p className="cart-item-name">{name}</p>
          <p className="cart-item-unit-price">${price}</p>
        </div>
        <div className="cart-item-content-display-bottom">
          <div className="cart-item-icon-wrapper">
            <img src={Chevron} alt="" onClick={removeSameItem} />
          </div>

          <p className="cart-item-count">{count}</p>

          <div className="cart-item-icon-wrapper">
            <img
              src={Chevron}
              className="reverse"
              alt=""
              onClick={addSameItem}
            />
          </div>

          <p className="cart-item-price">${(count * price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

export default CartItem;
