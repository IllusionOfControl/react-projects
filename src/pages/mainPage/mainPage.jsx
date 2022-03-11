import { Box, Columns, Container } from 'react-bulma-components';
import { WeatherInfo, LocationInfo } from '../../components/weather';
import { SearchHistory } from '../../components/searchHistory';
import { SearchBox } from '../../components/searchBox'
import 'bulma/css/bulma.min.css';
import React from 'react'

import ForecastWeather from '../../components/forecastWeather';


class MainPage extends React.Component {
    render() {
        return (
            <Container mt='4'>
                <Columns>
                    <Columns.Column>
                        <LocationInfo/>
                        <WeatherInfo/>
                        <ForecastWeather/>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <Box>
                            <SearchBox/>
                            <SearchHistory/>
                        </Box>
                    </Columns.Column>
                </Columns>
            </Container>
        )
    }
}

export default MainPage;