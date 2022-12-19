
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "./Home";


import "./assets/main/styles/index.css";
import CommerceCart from "./components/day2/CommerceCart";
import Day1Layout from "./components/day1/Day1Layout";

import PomodoroTimer from "./components/day1/PomodoroTimer";
import PomodoroSetting from "./components/day1/PomodoroSetting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>

          {/* Pomodoro Timer */}
          <Route path="pomodoro-timer">
            <Route path="" element={<Day1Layout/>}>
              <Route index element={<PomodoroTimer />} />
              <Route path="settings" element={<PomodoroSetting />} />
            </Route>
          </Route>

          {/* Commerce cart */}
          <Route path="cart">
            <Route index element={<CommerceCart />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
