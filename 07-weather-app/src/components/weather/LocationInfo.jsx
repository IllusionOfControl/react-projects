import { Box, Level, Heading } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'
import { useGlobalContext } from '../../context';
import dayjs from "dayjs";

const LocationInfo = () => {
  const { location } = useGlobalContext();
  const date = new Date().now;
  const name_of_day = dayjs(date).format('dddd');
  const formatted_date = dayjs(date).format('DD/MM/YYYY');

  return (
    <Box>
      <Level>
        <Level.Side align='left'>
          <Heading size={1} mb={0}>
            {location.city}
            <Heading size={5} subtitle>
              {location.country}
            </Heading>
          </Heading>
        </Level.Side>

        <Level.Side align='right'>
          <Heading size={2}>
            {formatted_date}
            <Heading size={5} subtitle>
              {name_of_day}
            </Heading>
          </Heading>
        </Level.Side>
      </Level>
    </Box>
  )
}

export default LocationInfo;