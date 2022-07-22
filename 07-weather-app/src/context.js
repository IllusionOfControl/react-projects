import { useContext, useEffect, useReducer, createContext } from 'react';
import { API_KEY } from './env';
import { CLEAR_HISTORY, DISPLAY_ITEMS, LOADING, reducer, SEARCH } from './reducer';

const AppContext = createContext();

const initialState = {
  isLoading: true,
  query: 'London',
  location: {},
  weather: {},
  search_history: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchForecast = () => {
    return [
      { date: new Date(2019, 2, 28), clouds: "Scattered clouds", temp: 20.36, humidity: 60, clound_icon: "03d" },
      { date: new Date(2019, 2, 30), clouds: "Scattered clouds", temp: 20.36, humidity: 60, clound_icon: "04d" },
      { date: new Date(2019, 2, 31), clouds: "Scattered clouds", temp: 20.36, humidity: 60, clound_icon: "02d" },
      { date: new Date(2019, 2, 32), clouds: "Scattered clouds", temp: 20.36, humidity: 60, clound_icon: "01d" },
    ];
  }

  const fetchWeather = () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state.query}&appid=${API_KEY}&units=metric`
    console.log('fetch...');

    return fetch(weatherUrl).then((response) => { return response.json(); }
    ).then((data) => {
      const location = {
        city: data.name,
        country: data.sys.country,
      };
      const weather = {
        temp_main: data.main.temp,
        temp_feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        clouds: data.weather[0].description,
        clouds_icon: data.weather[0].icon
      }
      return { location, weather };
    }, (error) => { console.log(error); });
  }

  const searchCity = (city) => {
    if (state.search_history[0] !== city)
      dispatch({ type: SEARCH, payload: city });
  }

  const clearHistory = () => { dispatch({ type: CLEAR_HISTORY }); };


  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: LOADING });

      const { location, weather, forecast } = await Promise.all([
        fetchWeather(),
        fetchForecast()
      ]).then(([information, forecast]) => {
        const { location, weather } = information;
        return { location, weather, forecast };
      });

      dispatch({ type: DISPLAY_ITEMS, payload: { location, weather, forecast } });
    }

    fetchData().catch(console.error);
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, searchCity, clearHistory }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }