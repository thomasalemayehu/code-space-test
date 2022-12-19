import React from "react";
import PropTypes from "prop-types";
import "../../assets/day2/styles/menu.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./features/foodCartSlice";

const MenuItem = ({ imagePath, name, price, id, colorClass }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({ name, price, id, imagePath }));
  };


  return (
    <div className={`menu-container ${colorClass}`}>
      <img src={imagePath} className="menu-image" alt="" />

      <div className="menu-info">
        <p className="menu-info-description">{name}</p>
        <p className="menu-info-price">${price}</p>
      </div>

      <button className="menu-button" onClick={addItemToCart}>
        Add to cart
      </button>
    </div>
  );
};

MenuItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  colorClass:PropTypes.string.isRequired,
};

export default MenuItem;
