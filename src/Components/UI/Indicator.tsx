import styles from './Indicator.module.css';

interface Icon { [key: string]: JSX.Element };
interface Unit { [key: string]: string };

const icons: Icon = {
    "minTemp": <i className="fa-solid fa-temperature-arrow-down"></i>,
    "maxTemp": <i className="fa-solid fa-temperature-arrow-up"></i>,
    "wind": <i className="fa-solid fa-wind"></i>,
    "feels": <i className="fa-solid fa-temperature-three-quarters"></i>
};

const unit: Unit = {
    "minTemp": "C",
    "maxTemp": "C",
    "wind": "m/s",
    "feels": "C"
};

const title: Unit = {
    "minTemp": "LOW",
    "maxTemp": "HIGH",
    "wind": "WIND",
    "feels": "FEELS LIKE"
};

const Indicators = (props: { data: any }) => {
    const name: string = props.data[0][0];
    const units: string = props.data[0][1];
   
    return (
        <div className={styles.box}>
            <p>{title[name]}</p>
            {icons[name]}
            <p>{units} {unit[name]}</p>
        </div>
    )
};

export default Indicators;