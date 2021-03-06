import React from 'react';
import { connect } from 'react-redux';
import { changeCity, getWeather } from '../modules/weather';
import Input from '../components/Input';

const InputContainer = ({ changeCity, city, getWeather }) => {
  return (
    <Input onChangeCity={changeCity} city={city} getWeather={getWeather} />
  );
};

export default connect(
  ({ REDUCER }) => ({
    city: REDUCER.city,
  }),
  {
    changeCity,
    getWeather,
  },
)(InputContainer);
