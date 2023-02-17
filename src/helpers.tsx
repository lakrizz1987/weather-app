
interface TownData {
    name: string;
    main: { temp: number, temp_max: number, temp_min: number, feels_like: number };
    weather: [{ icon: string }];
    wind: { speed: number };
};

export class Town {
    icon: string;
    temp: string;
    town: string;
    items: Object[]; 
    
    constructor(data:TownData) {
        this.town = data.name;
        this.temp= Math.round(data.main.temp).toString();
        this.icon= data.weather[0].icon;
        this.items= [{ maxTemp: Math.round(data.main.temp_max).toString() },
        { minTemp: Math.round(data.main.temp_min).toString() },
        { wind: data.wind.speed.toString() },
        { feels: Math.round(data.main.feels_like) }];
    }
}



export function setAppClassName(icon: string) {
    let classAtr;

    if (icon === '01d') {
        classAtr = 'sun';
    } else if (icon === '02d') {
        classAtr = 'cloudsEx';
    } else if (icon === '03d' || icon === '04d') {
        classAtr = 'clouds';
    } else if (icon === '09d' || icon === '10d') {
        classAtr = 'rain';
    } else if (icon === '11d') {
        classAtr = 'storm';
    } else if (icon === '13d') {
        classAtr = 'snow';
    } else if (icon === '50d') {
        classAtr = 'fog';
    } else {
        classAtr = 'night';
    }

    return `App ${classAtr}`;
};
