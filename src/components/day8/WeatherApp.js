import React from "react";
import "../../assets/day8/styles/index.css";
import CloudyIcon from "./components/CloudyIcon";
import WeatherDisplay from "./WeatherDisplay";
import SunnyIcon from "./components/SunnyIcon";
import StormyIcon from "./components/StormyIcon";
import SnowyIcon from "./components/SnowyIcon";
import PartyCloud from "./components/PartyCloud";
import RainyIcon from "./components/RainyIcon";

const WeatherApp = () => {
  const weatherInfo = [
    {
      id: 1,
      dayOfWeek: "Wed",
      date: 8,
      displayIcon: <CloudyIcon />,
      colorClass: "weather-app-cloudy",
      textColorClass: "weather-app-cloud-text",
      temperature: 71,
      rainPercent: 84,
      lowestTemp: 28,
    },
    {
      id: 2,
      dayOfWeek: "Thu",
      date: 9,
      displayIcon: <SunnyIcon />,
      colorClass: "weather-app-sunny",
      textColorClass: "weather-app-sunny-text",
      temperature: 65,
      rainPercent: 84,
      lowestTemp: 28,
    },
    {
      id: 3,
      dayOfWeek: "Fri",
      date: 10,
      displayIcon: <StormyIcon />,
      colorClass: "weather-app-stormy",
      textColorClass: "weather-app-stormy-text",
      temperature: 67,
      rainPercent: 84,
      lowestTemp: 28,
    },
    {
      id: 4,
      dayOfWeek: "Sat",
      date: 11,
      displayIcon: <SnowyIcon />,
      colorClass: "weather-app-snowy",
      textColorClass: "weather-app-snowy-text",
      temperature: 32,
      rainPercent: 84,
      lowestTemp: 28,
    },
    {
      id: 5,
      dayOfWeek: "Sun",
      date: 12,
      displayIcon: <PartyCloud />,
      colorClass: "weather-app-part-cloudy",
      textColorClass: "weather-app-part-cloudy-text",
      temperature: 57,
      rainPercent: 84,
      lowestTemp: 28,
    },
    {
      id: 6,
      dayOfWeek: "Mon",
      date: 13,
      displayIcon: <RainyIcon />,
      colorClass: "weather-app-rainy",
      textColorClass: "weather-app-rainy-text",
      temperature: 63,
      rainPercent: 84,
      lowestTemp: 28,
    },
    {
      id: 7,
      dayOfWeek: "Tue",
      date: 13,
      displayIcon: <SunnyIcon />,
      colorClass: "weather-app-sunny",
      textColorClass: "weather-app-sunny-text",
      temperature: 71,
      rainPercent: 84,
      lowestTemp: 28,
    },
  ];
  return (
    <div className="weather-app-container">
      {weatherInfo.map((weatherInfo) => <WeatherDisplay key={weatherInfo.id} {...weatherInfo}/>)}
    </div>
  );
};

export default WeatherApp;