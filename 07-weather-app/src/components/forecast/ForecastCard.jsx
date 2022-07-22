import { Tile, Notification, Heading, Image } from 'react-bulma-components';
import dayjs from "dayjs";

const ForecastCard = ({ date, clouds, temp, humidity, clound_icon }) => {
  const name_of_day = dayjs(date).format('dddd');
  const formatted_date = dayjs(date).format('DD/MM/YYYY');
  const image_url = `https://openweathermap.org/img/wn/${clound_icon}@4x.png`

  return (
    <Tile kind="parent">
      <Tile kind="child" renderAs={Notification} color="info">
        <Heading size={4}>{name_of_day}</Heading>
        <Heading subtitle>{formatted_date}</Heading>
        <Image src={image_url} size={128} />
        <Heading subtitle size={5} m='0'>{clouds}</Heading>
        <Heading subtitle size={6} m='0'>Temp: {temp}°c</Heading>
        <Heading subtitle size={6} m='0'>Hum: {humidity}%</Heading>
      </Tile>
    </Tile>
  )
};

export default ForecastCard;