import React from "react";
import styles from "./Header.module.css";
import service from "../../services/services"

const Header: React.FC = () => {

    async function submitHadler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        let { town } = Object.fromEntries(new FormData(event.currentTarget));
        event.currentTarget.reset();

        const searchedTown = await service.getCurrentWeatherByName(town.toString());
        console.log(searchedTown)
        
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