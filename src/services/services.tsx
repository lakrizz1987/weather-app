const baseURL = 'https://api.openweathermap.org/data/2.5';
const apiKey = 'd5a876fbd3439597f908bd3b1cd6fbec';

const getCurrentWeatherByLat = async (lat: number, lon: number) => {
    const latString = lat.toString();
    const lonString = lon.toString();

    try {
        const respons = await fetch(`${baseURL}/weather?lat=${latString}&lon=${lonString}&appid=${apiKey}&units=metric`);

        if (!respons.ok) {
            const resultErr = await respons.json();
            throw new Error(resultErr.message)
        };

        const result = await respons.json();
        return result;

    } catch (error: any) {
        console.log(error.message)
    }
};

const getCurrentWeatherByName = async (town: string) => {
    try {
        const respons = await fetch(`${baseURL}/weather?q=${town}&appid=${apiKey}&units=metric`);

        if (!respons.ok) {
            const resultErr = await respons.json();
            throw new Error(resultErr.message)
        };
        const result = await respons.json();
        console.log(result)
        return result;

    } catch (error: any) {
        throw { message: error.message}
    }
}

const api = {
    getCurrentWeatherByLat,
    getCurrentWeatherByName
}

export default api;