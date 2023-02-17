import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

import { setTown } from '../../store/townSlice';

import Indicators from "../UI/Indicator";
import Spinner from "../Spinner/Spinner";

import api from "../../services/services";
import { Town } from "../../helpers";

import styles from "./Home.module.css";

interface Props {
    isDataLoaded: boolean
    setIsLoaded?: any
}


const Home: React.FC<Props> = ({ isDataLoaded, setIsLoaded }) => {
    const currentTown = useSelector((state: any) => state.town.value);
    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        let lat: number;
        let lon: number;

        if (param.name === undefined) {
            setIsLoaded(false)
            navigator.geolocation.getCurrentPosition(position => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;

                api.getCurrentWeatherByLat(lat, lon)
                    .then(data => {
                        let currentTown = new Town(data)
                        dispatch(setTown({ ...currentTown }));
                        setIsLoaded(true)
                    })
                    .catch(err => {
                        navigate('/404', { state: { message: err.message } })
                    })
            }, err => {
                lon = 23.3242;
                lat = 42.6975;

                api.getCurrentWeatherByLat(lat, lon)
                    .then(data => {
                        let currentTown = new Town(data)
                        dispatch(setTown({ ...currentTown }));
                        setIsLoaded(true)
                    })
                    .catch(err => {
                        navigate('/404', { state: { message: err.message } })
                    })
            });
        }
    }, [dispatch, param.name, setIsLoaded,navigate])



    let imgURL = `http://openweathermap.org/img/wn/${currentTown.icon}@2x.png`;



    return (
        <section className={styles['data-container']}>
            <div className={styles['temp-container']}>
                <h3 className="town-name">{currentTown.town}</h3>
                <img className="weather-icon" src={imgURL} alt="icon" />
            </div>
            <h2 className="town-temp">{isDataLoaded ? `${currentTown.temp} °C` : <Spinner />}</h2>
            <div className={styles.stats}>
                {currentTown.items.map((item: {}) => <Indicators key={Math.random().toString()} data={Object.entries(item)} />)}
            </div>
        </section>
    )
}

export default Home;