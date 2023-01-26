import React from "react";
import {useDispatch} from 'react-redux';
import styles from "./Header.module.css";
import api from "../../services/services";
import {townConstuctor} from '../../helpers';
import { setTown } from "../../store/townSlice";

const Header: React.FC = () => {
    const dispatch = useDispatch();

    async function submitHadler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        let { town } = Object.fromEntries(new FormData(event.currentTarget));
        event.currentTarget.reset();

        const searchedTown = await api.getCurrentWeatherByName(town.toString());

        dispatch(setTown(townConstuctor(searchedTown)));
        
    }

    return (
        <header className={styles['site-header']}>
            <h1>WeatherApp</h1>
            <section className="site-search-container">
                <form onSubmit={submitHadler} method="post">
                    <input className={styles.searchInput} type="text" id="search" placeholder="Search a town..." name="town" />
                    <input className={styles.searchBtn} type="submit" name="submit" value='&#128269;' />
                </form>
            </section>
        </header>
    )
}

export default Header;