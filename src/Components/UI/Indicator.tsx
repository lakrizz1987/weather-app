
import styles from './Indicator.module.css';

interface Icon { [key: string]: JSX.Element }
interface Unit { [key: string]: string }

const icons: Icon = {
    "minTemp": <i className="fa-solid fa-temperature-arrow-down"></i>,
    "maxTemp": <i className="fa-solid fa-temperature-arrow-up"></i>,
    "wind": <i className="fa-solid fa-wind"></i>,
    "seaLevel": <i className="fa-solid fa-water"></i>
}

const unit: Unit = {
    "minTemp": "C",
    "maxTemp": "C",
    "wind": "m/s",
    "seaLevel": "m"
}

const Indicators = (props: { data: any }) => {
    const name: string = props.data[0][0]
    const count: string = props.data[0][1]
   
    return (
        <div className={styles.box}>
            {icons[name]}
            <p>{count} {unit[name]}</p>
        </div>
    )
}

export default Indicators;