
const HOST_API = 'http://localhost:8000'

class WeatherApi {
    getWeatherAndForecast(city_name) {
        fetch(`${HOST_API}/api/search?city=${city_name}`)
            .then(res => res.json())
            .then(
                (result) => {
                    return result;
                },

                (error) => {

                }
            )
    }
}

