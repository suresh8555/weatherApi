import React from "react";

const weatherCodes = {
  0: "Clear Sky ",
  1: "Mainly Clear ",
  2: "Partly Cloudy",
  3: "Overcast ",
  45: "Fog ",
  48: "Rime Fog ",
  51: "Light Drizzle ",
  61: "Rain ",
  71: "Snow ",
  95: "Thunderstorm ",
};

function WeatherCard({ weather }) {
  return (
    <div className="weather-card fade-in">
      <h2>{weather.city}</h2>
      <p><i className="bi bi-thermometer-high"></i> <b>{weather.temperature}°C</b></p>
      <p><i className="bi bi-wind"></i> Wind: {weather.wind} km/h</p>
      <p><i className="bi bi-globe-americas"></i> {weatherCodes[weather.condition] || "Unknown"}</p>
    </div>
  );
}

export default WeatherCard;
