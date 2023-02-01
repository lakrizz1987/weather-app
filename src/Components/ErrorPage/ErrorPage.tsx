import { Link, useLocation } from "react-router-dom";
import styles from './ErrorPage.module.css';

const ErrorPage = () =>{
    const location = useLocation();
    const err = location.state.message;

    return (
        <section className={styles.errContainer}>
            <h1>{err}</h1>
            <h2>404</h2>
            <p>We couldn't find what you looking for!</p>
            <Link className={styles.errLink} to={'/'}>GO TO HOME PAGE</Link>
        </section>
    )
}

export default ErrorPage;