import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import api from './services/services';
import { useDispatch } from 'react-redux';
import { setTown } from './store/townSlice';
import { townConstuctor } from "./helpers"

function App() {
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);

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
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    });

  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Home isLoading={isLoading}/>
    </div>
  );
}

export default App;
