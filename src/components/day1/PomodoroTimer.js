import React, { useEffect, useState } from "react";
import "../../assets/day1/styles/index.css";
import SettingsIcon from "../../assets/day1/icons/gear.svg";
import CheckIcon from "../../assets/day1/icons/check.svg";

//
import EndAudio from "../../assets/day1/audios/audio-1.mp3";
// import { useNavigate } from "react-router-dom";
const PomodoroTimer = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isTimerComplete, setIsTimerComplete] = useState(false);

  //   event handlers
  const onMinuteInputChange = (e) => {
    setMinutes(parseInt(e.target.value));
    setTotalCount(seconds + parseInt(e.target.value) * 60);
  };

  const onSecondsChange = (e) => {
    setSeconds(parseInt(e.target.value));
    setTotalCount(minutes + parseInt(e.target.value));
  };

  const toggleStartTimer = () => {
    if (seconds === 0 && minutes === 0) {
      setSeconds(totalCount % 60);
      setMinutes(Math.floor(totalCount / 60));
    }
    setIsEditMode(false);
    setIsTimerComplete(false);
    setIsTimerStarted(!isTimerStarted);
    if (totalCount === 0) {
      setTotalCount(seconds + minutes * 60);
    }
  };

  const onSetEditMode = () => {
    if (isTimerStarted) {
      setIsTimerStarted(false);
    }
    setIsEditMode(true);
  };

  const getEndAudio = () => {
    const audio = new Audio(EndAudio);

    return audio;
  };

  useEffect(() => {
    const playEndSound = () => {
      return getEndAudio().play();
    };

    if (isTimerStarted) {
      const interval = setInterval(() => {
        if (minutes > 0 || seconds > 0) {
          if (seconds === 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setSeconds(seconds - 1);
          }
        } else {
          setIsEditMode(true);
          setIsTimerComplete(true);
          setIsTimerStarted(!isTimerStarted);
          playEndSound().then(() => alert("Timer ended."));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds, minutes, isTimerStarted]);

  const getAngle = () => {
    const countedTime = totalCount - (minutes * 60 + seconds);
    return (countedTime * 360) / totalCount;
  };

  let halfTurnSemiCircle = {};
  let fakeSemiCircle = {};

  if (getAngle() > 180) {
    fakeSemiCircle = {
      display: "none",
    };
    halfTurnSemiCircle = {
      transform: "rotate(180deg)",
    };
  } else {
    halfTurnSemiCircle = {
      transform: `rotate(${getAngle()}deg)`,
    };
  }

  const fullTurnSemiCircle = {
    transform: `rotate(${getAngle()}deg)`,
  };

  // const navigate = useNavigate();

  return (
    <section className="pomodoro-container">
      {/* <div className="settings_page" onClick={()=>{
        navigate("/pomodoro-timer/settings");
      }}>
        <img
          src={SettingsIcon}
          alt="Settings"
          onClick={() => {
            onSetEditMode();
            console.log(isEditMode);
          }}
        />
      </div> */}
      <div className={`circle  ${isTimerComplete ? "complete" : ""}`}>
        <div
          className={`semicircle ${isTimerComplete ? "hide" : "live"}`}
          style={halfTurnSemiCircle}
        ></div>
        <div
          className={`semicircle ${isTimerComplete ? "hide" : "live"}`}
          style={fullTurnSemiCircle}
        ></div>
        <div
          className={`semicircle ${isTimerComplete ? "hide" : "live"}`}
          style={fakeSemiCircle}
        ></div>
        <div className="inner_circle">
          {/* time */}
          <div className="time">
            <input
              type="text"
              className="minutes"
              disabled={!isEditMode}
              value={minutes > 9 ? minutes : `0${minutes}`}
              onChange={onMinuteInputChange}
            />
            <div className="colon">:</div>
            <input
              type="text"
              disabled={!isEditMode}
              className="seconds"
              value={seconds > 9 ? seconds : `0${seconds}`}
              onChange={onSecondsChange}
            />
          </div>

          {/* Start/Stop */}
          <div className="start_stop" onClick={toggleStartTimer}>
            {isTimerStarted ? "Stop" : "Start"}
          </div>

          {/* Setting/Check */}
          <div className="settings_check">
            {isTimerComplete ? (
              <img src={CheckIcon} alt="Complete" />
            ) : (
              <img
                src={SettingsIcon}
                alt="Settings"
                onClick={() => {
                  onSetEditMode();
                  console.log(isEditMode);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PomodoroTimer;
