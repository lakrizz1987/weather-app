import React from "react";

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <h1>WeatherApp</h1>
            <section className="site-search-container">
                <form method="post">
                    <input type="text" id="search" />
                    <input type="submit" name="submit" value='&#128269;' />
                </form>
            </section>
        </header>
    )
}

export default Header;