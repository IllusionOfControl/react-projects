import { Box, Columns, Notification, Heading, Block, Image } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'
import { useGlobalContext } from '../../context';

const WeatherInfo = () => {
  const { weather } = useGlobalContext();
  const icon_url = `https://openweathermap.org/img/wn/${weather.clouds_icon}@4x.png`

  return (
    <Box>
      <Columns>
        <Columns.Column size={8}>
          <Block textSize={6}>
            <Heading size={2}>
              {weather.temp_main}°c
              <Heading size={5} subtitle>
                Feels like {weather.temp_feels_like}°c
              </Heading>
            </Heading>

            <hr />

            <Columns>
              <Columns.Column>
                <Notification color='danger' dark mb='2' p='1'>Min temperature: {weather.temp_min}°c</Notification>
                <Notification color='danger' dark mb='2' p='1'>Clouds: {weather.clouds}</Notification>
                <Notification color='danger' dark mb='2' p='1'>Pressure: {weather.pressure}mmHg</Notification>
              </Columns.Column>
              <Columns.Column>
                <Notification color='danger' dark mb='2' p='1'>Max temperature: {weather.temp_max}°c</Notification>
                <Notification color='danger' dark mb='2' p='1'>Wind Speed: {weather.wind}mph</Notification>
                <Notification color='danger' dark mb='2' p='1'>Humidity: {weather.humidity}%</Notification>
              </Columns.Column>
            </Columns>
          </Block>
        </Columns.Column>

        <Columns.Column size={4}>
          <Image src={icon_url} size='1by1' />
        </Columns.Column>
      </Columns>
    </Box>
  )
};

export default WeatherInfo;