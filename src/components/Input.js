import React from 'react';

const Input = ({ city, onChangeCity, getWeather, result }) => {
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
          autocomplete="off"
        />
        <button type="submit">Get Weather!</button>
      </form>
      {result}
    </div>
  );
};

export default Input;
