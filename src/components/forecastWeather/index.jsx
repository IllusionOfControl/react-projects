import { Box, Columns, Container, Level, Tile, Notification, Heading, Block, Section, Image } from 'react-bulma-components';
import { Panel } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'


class ForecastWeather extends React.Component {
    render() {
        return (
            <Box>
                <Heading>Forecast by 4 days:</Heading>
                <Tile kind='ancestor'>
                    <Tile kind="parent">
                    <Tile kind="child" renderAs={Notification} color="info">
                    <Heading>Mondey</Heading>
                    <Heading subtitle> 23/03/2022</Heading>
                    <Image src='https://openweathermap.org/img/wn/04d@4x.png' size={128}/>
                    <Heading subtitle size={5} m='0'>Scattered clouds</Heading>
                    <Heading subtitle size={6} m='0'>Temp: 53*C</Heading>
                    <Heading subtitle size={6} m='0'>Hum: 56%</Heading>
                    </Tile>
                    </Tile>

                    <Tile kind="parent">
                    <Tile kind="child" renderAs={Notification} color="info">
                    <Heading>Mondey</Heading>
                    <Heading subtitle> 23/03/2022</Heading>
                    <Image src='https://openweathermap.org/img/wn/04d@4x.png' size={128}/>
                    <Heading subtitle size={5} m='0'>Scattered clouds</Heading>
                    <Heading subtitle size={6} m='0'>Temp: 53*C</Heading>
                    <Heading subtitle size={6} m='0'>Hum: 56%</Heading>
                    </Tile>
                    </Tile>

                    <Tile kind="parent">
                    <Tile kind="child" renderAs={Notification} color="info">
                    <Heading>Mondey</Heading>
                    <Heading subtitle> 23/03/2022</Heading>
                    <Image src='https://openweathermap.org/img/wn/04d@4x.png' size={128}/>
                    <Heading subtitle size={5} m='0'>Scattered clouds</Heading>
                    <Heading subtitle size={6} m='0'>Temp: 53*C</Heading>
                    <Heading subtitle size={6} m='0'>Hum: 56%</Heading>
                    </Tile>
                    </Tile>

                    <Tile kind="parent">
                    <Tile kind="child" renderAs={Notification} color="info">
                    <Heading>Mondey</Heading>
                    <Heading subtitle> 23/03/2022</Heading>
                    <Image src='https://openweathermap.org/img/wn/04d@4x.png' size={128}/>
                    <Heading subtitle size={5} m='0'>Scattered clouds</Heading>
                    <Heading subtitle size={6} m='0'>Temp: 53*C</Heading>
                    <Heading subtitle size={6} m='0'>Hum: 56%</Heading>
                    </Tile>
                    </Tile>
                </Tile>
            </Box>
        )
    }
}

export default ForecastWeather;