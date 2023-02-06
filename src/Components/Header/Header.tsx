import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isEmptySearchInput, setIsEmptySearchInput] = useState(false);

    async function submitHadler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let { town } = Object.fromEntries(new FormData(event.currentTarget));
        if (town === '') {
            setIsEmptySearchInput(true)
        } else {
            event.currentTarget.reset();
            navigate(`/search/${town}`);
        }
    }

    let styleWarningSpan = styles.errMsg;
    let styleWarningInput = styles.searchInput;
    if (isEmptySearchInput) {
        styleWarningSpan = styles.errMsg + ' ' + styles.errMsgShow;
        styleWarningInput = styles.searchInput + ' ' + styles.errInput;
    }

 
    return (
        <header className={styles['site-header']}>
           <Link className={styles.title} to={'/'}><h1>WeatherApp</h1></Link> 
            <section className="site-search-container">
                <form onSubmit={submitHadler} method="post">
                <span className={styleWarningSpan}>&#10007;</span>
                    <input onFocus={() => setIsEmptySearchInput(false)} className={styleWarningInput} type="text" id="search" placeholder="Search a town..." name="town" />
                    <input className={styles.searchBtn} type="submit" name="submit" value='&#128269;' />
                </form>
            </section>
        </header>
    )
}

export default Header;