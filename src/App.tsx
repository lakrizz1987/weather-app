import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import getCurrentWeatherByLat from './services/services';

let lat: number;
let lon: number;

navigator.geolocation.getCurrentPosition(position => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
});



function App() {
  const [town, setTown] = useState({
    town: '---',
    temp: '---',
    icon: '---',
    maxTemp: '---',
    minTemp: '---',
    wind: '---'
  });

  useEffect(() => {
    getCurrentWeatherByLat(lat, lon)
      .then(data => {
        let currentTown = {
          town: data.name,
          temp: Math.round(data.main.temp).toString(),
          icon: data.weather[0].icon,
          maxTemp: Math.round(data.main.temp_max).toString(),
          minTemp: Math.round(data.main.temp_min).toString(),
          wind: data.wind.speed
        }
        setTown(currentTown)
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <div className="App">
      <Header />
      <Home town={town.town} 
      temp={town.temp} 
      icon={town.icon} 
      maxTemp={town.maxTemp} 
      minTemp={town.minTemp} 
      wind={town.wind} />
    </div>
  );
}

export default App;
