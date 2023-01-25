import React from "react";
import styles from "./Home.module.css";
import { useSelector } from 'react-redux';
import Indicators from "../UI/Indicator";




const Home: React.FC = () => {
    const currentTown = useSelector((state: any) => state.town.value);

    let imgURL = '';
    if (currentTown.icon !== '---') {
        imgURL = `http://openweathermap.org/img/wn/${currentTown.icon}@2x.png`;
    }

    //let myStyle = styles['data-container'] + ' ' + styles['rain']
    return (
        <section className={styles['data-container']}>
            <div className={styles['temp-container']}>
                <h3 className="town-name">{currentTown.town}</h3>
                <img className="weather-icon" src={imgURL} alt="icon" />
            </div>
            <h2 className="town-temp">{currentTown.temp}°C</h2>
            <div className={styles.stats}>
                {currentTown.items.map((item: {}) => <Indicators key={Math.random().toString()} data={Object.entries(item)} />)}
            </div>
        </section>
    )
}

export default Home;