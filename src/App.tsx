import React, { useEffect } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import api from './services/services';
import { useDispatch } from 'react-redux';
import { setTown } from './store/townSlice';
import { townConstuctor } from "./helpers"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let lat: number;
    let lon: number;

    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      api.getCurrentWeatherByLat(lat, lon)
        .then(data => {
          let currentTown = townConstuctor(data)
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
