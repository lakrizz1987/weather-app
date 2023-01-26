interface Town {
    name: string;
    main: { temp: number, temp_max: number, temp_min: number, sea_level: number };
    weather: [{ icon: string }];
    wind: { speed: number }
}


export function townConstuctor(data: Town) {
    let currentTown = {
        town: data.name,
        temp: Math.round(data.main.temp).toString(),
        icon: data.weather[0].icon,
        items: [{ maxTemp: Math.round(data.main.temp_max).toString() },
        { minTemp: Math.round(data.main.temp_min).toString() },
        { wind: data.wind.speed.toString() },
        { seaLevel: data.main.sea_level.toString() },]

    }

    return currentTown
}

