import React from 'react';

const Input = ({ city, onChangeCity, getWeather }) => {
  const onSubmit = e => {
    e.preventDefault();
    getWeather(city);
    onChangeCity('');
  };
  const onChange = e => onChangeCity(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="city_name"
          value={city}
          onChange={onChange}
          placeholder="city.."
          autoComplete="off"
        />
        <button type="submit">Get Weather!</button>
      </form>
    </div>
  );
};

export default Input;
