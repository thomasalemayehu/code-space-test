import React from "react";
import "../../assets/day8/styles/display.css";

const WeatherDisplay = ({
  dayOfWeek,
  date,
  displayIcon,
  colorClass,
  textColorClass,
  temperature,
  rainPercent,
  lowestTemp,
}) => {
  return (
    <div className="weather-app-display-container">
      <div className="weather-app-display-day-info">
        <div className="weather-app-display-day-of-week">{dayOfWeek}</div>
        <div className="weather-app-display-day">{date}</div>
      </div>

      <div className={`weather-app-display-show ${colorClass}`}>
        <div className="weather-app-icon-display">{displayIcon}</div>
        <div className="weather-app-weather-info-container">
          <div className="weather-app-weather-info-main">
            {temperature} <sup>°</sup>
          </div>

          <div className={`weather-app-weather-info-sub ${textColorClass}`}>
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="weather-app-weather-info-sub-icon"
              >
                <path d="M30.5363 15.355C28.9868 9.16 23.7398 4.705 17.4998 4.0825V1H14.4998V4.0825C8.25982 4.705 3.01282 9.16 1.46332 15.355C1.32382 15.913 1.51582 16.504 1.95982 16.8715C2.40382 17.239 3.01732 17.3215 3.54232 17.0845C7.07332 15.475 11.1953 15.73 14.4953 17.635V27.25C14.4953 29.3185 16.1783 31 18.2453 31C20.3123 31 21.9953 29.3185 21.9953 27.25V26.5H18.9953V27.25C18.9953 27.664 18.6593 28 18.2453 28C17.8313 28 17.4953 27.664 17.4953 27.25V17.6425C20.7968 15.7315 24.9263 15.472 28.4603 17.0845C28.9838 17.323 29.5988 17.2405 30.0428 16.8715C30.4868 16.5025 30.6758 15.913 30.5363 15.355ZM15.9998 15.01C13.7243 13.693 11.1518 13 8.49982 13C7.46482 13 6.44182 13.1065 5.43982 13.318C7.49032 9.4915 11.5013 7 15.9998 7C20.4983 7 24.5093 9.4915 26.5598 13.318C22.9943 12.5665 19.1633 13.1785 15.9998 15.01Z" />
              </svg>

              <p>{rainPercent}%</p>
            </div>
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="weather-app-weather-info-sub-icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8917 6.91939C19.8917 4.77378 18.1456 3.02771 16 3.02771C13.8544 3.02771 12.1083 4.77378 12.1083 6.91939V18.7916C10.8785 19.8943 10.1625 21.4704 10.1625 23.1347C10.1625 26.3545 12.7816 28.9723 16 28.9723C19.2184 28.9723 21.8375 26.3545 21.8375 23.1347C21.8375 21.4717 21.1215 19.893 19.8917 18.7916V6.91939ZM16 26.3778C14.2124 26.3778 12.7569 24.9236 12.7569 23.1347C12.7569 22.0814 13.2771 21.089 14.1489 20.478L14.7028 20.0902V6.91939C14.7028 6.20462 15.2852 5.62217 16 5.62217C16.7148 5.62217 17.2972 6.20462 17.2972 6.91939V20.0915L17.8511 20.4793C18.7229 21.0877 19.2431 22.0814 19.2431 23.1347C19.2431 24.9236 17.7876 26.3778 16 26.3778Z"
                  fill="black"
                />
                <circle cx="16" cy="23.176" r="1.75506" fill="black" />
              </svg>
              <p>
                {lowestTemp} <sup>°</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
