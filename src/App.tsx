import React, { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import getCurrentWeatherByLat from './services/services';
import { useDispatch } from 'react-redux';
import { setTown } from './store/townSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let lat: number;
    let lon: number;

    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      getCurrentWeatherByLat(lat, lon)
        .then(data => {
          let currentTown = {
            town: data.name,
            temp: Math.round(data.main.temp).toString(),
            icon: data.weather[0].icon,
            items:[{maxTemp: Math.round(data.main.temp_max).toString()},
              {minTemp: Math.round(data.main.temp_min).toString()},
              {wind: data.wind.speed.toString()},
              {seaLevel: data.main.sea_level.toString()},
            
            ]
            
          }
          dispatch(setTown(currentTown));
        })
        .catch(err => console.log(err))
    });

  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
