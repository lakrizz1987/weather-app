import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import api from './services/services';
import { useDispatch } from 'react-redux';
import { setTown } from './store/townSlice';
import { townConstuctor } from "./helpers"
import {setAppClassName} from './helpers'


function App() {
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  const currentTown = useSelector((state: any) => state.town.value);

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

  const classApp = setAppClassName(currentTown.icon);
  
  return (
    <div className={classApp}>
      <Header />
      <Home isLoading={isLoading}/>
    </div>
  );
}

export default App;
