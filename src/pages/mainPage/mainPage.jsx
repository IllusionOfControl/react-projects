import { Box, Columns, Container, Level, Tile, Notification, Heading, Block, Section, Image, Card } from 'react-bulma-components';
import { Header } from '../../components/header';
import SearchBox from '../../components/searchBox'
import 'bulma/css/bulma.min.css';
import React from 'react'
import SearchHistory from '../../components/searchHistory/searchHistory';
import WeatherInfo from '../../components/weather/weatherInfo';
import ForecastWeather from '../../components/forecastWeather';


class MainPage extends React.Component {
    render() {
        return (
            <Container mt='4'>
                <Columns>
                    <Columns.Column>
                        <WeatherInfo/>
                        <ForecastWeather/>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <Box>
                            <SearchBox></SearchBox>
                            <SearchHistory></SearchHistory>
                        </Box>
                    </Columns.Column>
                </Columns>
            </Container>
        )
    }
}

export default MainPage;