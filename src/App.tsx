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

type Props = {
  town: string,
  temp: string,
  icon: string,
  maxTemp: string,
  minTemp: string,
  wind: string
}

function App() {
  const [town, setTown] = useState<Props>({
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

  }, [])

  return (
    <div className="App">
      <Header />
      <Home town={town!.town} temp={town!.temp} icon={town!.icon} maxTemp={town!.maxTemp} minTemp={town!.minTemp} wind={town!.wind} />
    </div>
  );
}

export default App;
