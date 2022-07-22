import { Box, Tile, Notification, Heading, Image } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'
import ForecastCard from './ForecastCard';
import { useGlobalContext } from '../../context';

const ForecastContainer = () => {
    const { forecast } = useGlobalContext();
    return (
        <Box>
            <Heading>Forecast on 4 days:</Heading>
            <Tile kind='ancestor'>
                { forecast.map((item, index) => {
                    return (<ForecastCard key={index} {...item}/>);
                }) }


            </Tile>
        </Box>
    )
};

export default ForecastContainer;