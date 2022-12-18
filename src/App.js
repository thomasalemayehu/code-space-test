import PomodoroTimer from "./day1/PomodoroTimer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "./Home";
import PomodoroSetting from "./day1/PomodoroSetting";
import Day1Layout from "./day1/Day1Layout";

import "./assets/main/styles/index.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="pomodoro-timer">
            <Route path="" element={<Day1Layout/>}>
              <Route index element={<PomodoroTimer />} />
              <Route path="settings" element={<PomodoroSetting />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
