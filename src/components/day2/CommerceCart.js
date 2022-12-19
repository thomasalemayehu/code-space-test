import React from "react";
import TopRightImage from "../../assets/day2/icons/bg__top-right.svg";
import LeftImage from "../../assets/day2/icons/bg__left.svg";
import BottomRightImage from "../../assets/day2/icons/bg__btm-right.svg";
import "../../assets/day2/styles/index.css";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import PriceDisplay from "./PriceDisplay";
import { menuItemColors } from "./menuItems";
// import PriceDisplay from "./PriceDisplay";
const CommerceCart = () => {
  const items = useSelector((state) => state.foodCart.items);

  const cartItems = useSelector((state) => state.foodCart.cart);

  return (
    <div className="container">
      <img src={LeftImage} className="bg-image left-image" alt="" />
      <img src={TopRightImage} className="bg-image top-right-image" alt="" />
      <img
        src={BottomRightImage}
        className="bg-image bottom-right-image"
        alt=""
      />

      <div className="menus-container">
        <div className="menu larger">
          <h1>to go menu</h1>

          {items.map((item, index) => (
            <MenuItem key={item.id} {...item} colorClass={menuItemColors[index]} />
          ))}
        </div>
        <div className="menu smaller">
          <h1>your cart</h1>
          {cartItems.length > 0 ? (
            [
              cartItems.map((item) => <CartItem key={item.id} {...item} />),
              <div className="breaker" key="breaker"></div>,
              <PriceDisplay key="price-display" />,
            ]
          ) : (
            <h4>no items</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommerceCart;
