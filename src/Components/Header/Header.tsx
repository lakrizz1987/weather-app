import React from "react";
import styles from "./Header.module.css";


const Header: React.FC = () => {
    return (
        <header className={styles['site-header']}>
            <h1>WeatherApp</h1>
            <section className="site-search-container">
                <form method="post">
                    <input className={styles.searchInput} type="text" id="search" placeholder="Search a town..." />
                    <input className={styles.searchBtn} type="submit" name="submit" value='&#128269;' />
                </form>
            </section>
        </header>
    )
}

export default Header;