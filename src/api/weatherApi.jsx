
const HOST_API = 'http://localhost:8000'

class WeatherApi {
    getWeatherAndForecast(city_name) {
        fetch(`${HOST_API}/api/weather?city=${city_name}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
}

