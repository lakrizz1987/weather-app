import React from "react";
import styles from "./Home.module.css";

type Props = {
    town: string,
    temp: string,
    icon: string,
    maxTemp: string,
    minTemp: string,
    wind: string
}


const Home: React.FC<Props> = (props) => {
    
    let imgURL = '';
    if(props.icon !== '---'){
         imgURL = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    }
    

    return (
        <section className={styles['data-container']}>

            <div className={styles['temp-container']}>
                <h3 className="town-name">{props.town}</h3>
                <img className="weather-icon" src={imgURL} alt="icon" />
            </div>
            <h2 className="town-temp">{props.temp}°C</h2>
            <div className={styles.stats}>
                <div className={styles.box}>
                    <i className="fa-solid fa-wind"></i>
                    <p>{props.wind} m/s</p>
                </div>
                <div className={styles.box}>
                    <i className="fa-solid fa-temperature-arrow-up"></i>
                    <p>{props.maxTemp} C</p>
                </div>
                <div className={styles.box}>
                    <i className="fa-solid fa-temperature-arrow-down"></i>
                    <p>{props.minTemp} C</p>
                </div>
            </div>
        </section>
    )
}

export default Home;