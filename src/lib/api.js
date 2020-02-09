import axios from 'axios';

export const getWeather = city =>
  axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2b3cbe0e92acb92f2104edd9a7afe2db&units=metric`,
  );
