import React from "react";
import "../../assets/day1/styles/settings.css";
import BackButton from "../../assets/day1/icons/back.svg";
import { useNavigate } from "react-router-dom";
const PomodoroSetting = () => {
  const navigate = useNavigate();
  return (
    <section className="settings_container">
      <div className="settings_app_bar">
        <div
          className="back_button"
          onClick={() => navigate("/pomodoro-timer")}
        >
          <img src={BackButton} alt="Back" />
        </div>
        <h1>Pomodoro Settings</h1>
      </div>

      <div className="settings_section">
        <div>
          <div className="toggle-switch">
            <label>
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div>Play sound counter</div>
      </div>
    </section>
  );
};

export default PomodoroSetting;
