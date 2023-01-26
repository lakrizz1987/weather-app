interface Town {
    name: string;
    main: { temp: number, temp_max: number, temp_min: number, feels_like: number };
    weather: [{ icon: string }];
    wind: { speed: number }
}


export function townConstuctor(data: Town) {
    console.log(data)
    let currentTown = {
        town: data.name,
        temp: Math.round(data.main.temp).toString(),
        icon: data.weather[0].icon,
        items: [{ maxTemp: Math.round(data.main.temp_max).toString() },
        { minTemp: Math.round(data.main.temp_min).toString() },
        { wind: data.wind.speed.toString() },
        { feels : Math.round(data.main.feels_like)},]
    }
    
    return currentTown
}

