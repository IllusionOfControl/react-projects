import { Box, Columns, Level, Notification, Heading, Block, Image } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'


class LocationInfo extends React.Component {
    render() {
        return (            
            <Box>
                <Level>
                    <Level.Side align='left'>
                        <Heading size={1} mb={0}>
                            London
                            <Heading size={5} subtitle>
                                Great Britain 
                            </Heading>
                        </Heading>
                    </Level.Side>

                    <Level.Side align='right'>
                        <Heading size={2}>
                            11/03/2022
                            <Heading size={5} subtitle>
                                Thuesday 
                            </Heading>
                        </Heading>
                    </Level.Side>
                </Level>
            </Box>
        )
    }
}

class WeatherInfo extends React.Component {
    render() {
        return (
            <Box>
                <Columns>
                    <Columns.Column size={8}>
                            <Block textSize={6}>
                                <Heading size={2}>
                                    12°c
                                    <Heading size={5} subtitle>
                                        Feels like 3°c
                                    </Heading>
                                </Heading>

                                <hr/>

                                <Columns>
                                    <Columns.Column>
                                        <Notification color='danger' dark mb='2' p='1'>Min temperature (F): 46.7</Notification>
                                        <Notification color='danger' dark mb='2' p='1'>Clouds: scattered clouds</Notification>
                                        <Notification color='danger' dark mb='2' p='1'>Pleasure: 1100 mmHg</Notification>                                                           
                                    </Columns.Column>
                                    <Columns.Column>             
                                        <Notification color='danger' dark mb='2' p='1'>Max temperature (F): 46.72</Notification>  
                                        <Notification color='danger' dark mb='2' p='1'>Wind Speed: 5.75mph</Notification>                                 
                                        <Notification color='danger' dark mb='2' p='1'>Рumidity: 50%</Notification>     
                                    </Columns.Column>
                                </Columns>
                            </Block>
                    </Columns.Column>
                    
                    <Columns.Column size={4}>
                            <Image src='https://openweathermap.org/img/wn/04d@4x.png' size='1by1'/>
                    </Columns.Column>
                </Columns>
            </Box>
        )
    }
}

export { WeatherInfo, LocationInfo };