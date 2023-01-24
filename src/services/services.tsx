
import React from "react";
const apiKey = 'd5a876fbd3439597f908bd3b1cd6fbec';

let lat: number;
let lon: number;

navigator.geolocation.getCurrentPosition(position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
});

const getCurrentWeatherByLat = async (event: React.MouseEvent<HTMLElement>) => {
    try {

        const respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon=${lon.toString()}&appid=${apiKey}&units=metric`);

        if (!respons.ok) {
            const result = await respons.json();
            throw new Error(result.message)
        }

        const result = await respons.json();
        return result;

    } catch (error: any) {
        console.log(error.message)
    }

}


export default getCurrentWeatherByLat;