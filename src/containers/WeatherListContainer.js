import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../modules/weather';
import WeatherList from '../components/WeatherList';

const WeatherListContainer = ({
  getWeather,
  loadingWeather,
  name,
  temp,
  clouds,
  main,
  wind,
  humidity,
}) => {
  return (
    <WeatherList
      name={name}
      temp={temp}
      clouds={clouds}
      main={main}
      wind={wind}
      humidity={humidity}
      loadingWeather={loadingWeather}
      getWeather={getWeather}
    />
  );
};

export default connect(
  ({ REDUCER }) => ({
    name: REDUCER.result.name,
    temp: REDUCER.result.temp,
    clouds: REDUCER.result.clouds,
    main: REDUCER.result.main,
    wind: REDUCER.result.wind,
    humidity: REDUCER.result.humidity,
    loadingWeather: REDUCER.loading.GET_WEATHER,
  }),
  {
    getWeather,
  },
)(WeatherListContainer);
