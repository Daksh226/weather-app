import { useState } from "react";
import Search from "./Search";  // Import the Search component
import "./style.css"; // Import styles

const API_KEY = "b14e6bb1d8f94c39b8864355252401"; // Replace with your WeatherAPI Key

function App() {
  const [weather, setWeather] = useState(null);  // State to store weather data

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      if (!response.ok) {
        throw new Error('City not found or API issue.');
      }
      const data = await response.json();
      setWeather(data);  // Update state with weather data
    } catch (error) {
      alert(error.message);  // Show an error message
    }
  };

  return (
    <div className="app-container">
      <h1 className="weather-heading">Weather App</h1>
      <Search onSearch={fetchWeather} />  {/* Pass fetchWeather function to Search component */}

      {/* Render weather details if available */}
      {weather && weather.location && weather.current && (
        <div className="weather-info">
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Weather: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default App;
