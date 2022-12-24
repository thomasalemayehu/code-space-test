import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "./Home";

import "./assets/main/styles/index.css";
import CommerceCart from "./components/day2/CommerceCart";
import Day1Layout from "./components/day1/Day1Layout";

import PomodoroTimer from "./components/day1/PomodoroTimer";
import PomodoroSetting from "./components/day1/PomodoroSetting";
import { Provider } from "react-redux";
import { appStore } from "./app/index";
import Piano from "./components/day3/Piano";
import Keyboard from "./components/day4/Keyboard";
import PodcastCheckbox from "./components/day5/PodcastCheckbox";
import PriceSlider from "./components/day6/PriceSlider";
import TipCalculator from "./components/day7/TipCalculator";
function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>

            {/* Pomodoro Timer */}
            <Route path="pomodoro-timer">
              <Route path="" element={<Day1Layout />}>
                <Route index element={<PomodoroTimer />} />
                <Route path="settings" element={<PomodoroSetting />} />
              </Route>
            </Route>

            {/* Commerce cart */}
            <Route path="cart">
              <Route index element={<CommerceCart />} />
            </Route>
          </Route>

          {/* Piano */}
          <Route path="piano">
            <Route index element={<Piano />} />
          </Route>

          {/* Keyboard */}
          <Route path="keyboard">
            <Route index element={<Keyboard />} />
          </Route>

          {/* Podcast Checkbox */}
          <Route path="podcast-checkbox">
            <Route index element={<PodcastCheckbox />} />
          </Route>

          {/* Price Slider */}
          <Route path="price-slider">
            <Route index element={<PriceSlider />} />
          </Route>

          {/* Tip Calculator */}
          <Route path="tip-calculator">
            <Route index element={<TipCalculator />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
