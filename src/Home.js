import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display:"flex", flexDirection:"column" }}>
      <Link to='/pomodoro-timer'>Pomodoro Timer </Link>
      <Link to='/cart'>Restaurant Cart</Link>
    </div>
  );
};

export default Home;