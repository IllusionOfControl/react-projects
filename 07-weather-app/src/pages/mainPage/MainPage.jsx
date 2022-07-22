import { Box, Columns, Container } from 'react-bulma-components';
import WeatherInfo from '../../components/weather/WeatherInfo';
import LocationInfo from '../../components/weather/LocationInfo'
import SearchHistory from '../../components/searchHistory/SearchHistory';
import SearchForm from '../../components/searchForm/SearchForm'
import ForecastContainer from '../../components/forecast/ForecastContainer';
import 'bulma/css/bulma.min.css';
import React from 'react'
import { useGlobalContext } from '../../context';

const MainPage = () => {
  const { isLoading } = useGlobalContext();

  return (
    <Container mt='4'>
      <Columns>
        <Columns.Column>
          {isLoading ?
            <></> :
            <>
              <LocationInfo />
              <WeatherInfo />
              <ForecastContainer />
            </>
          }
        </Columns.Column>
        <Columns.Column size={4}>
          <Box>
            <SearchForm />
            <SearchHistory />
          </Box>
        </Columns.Column>
      </Columns>
    </Container>
  )
};

export default MainPage;