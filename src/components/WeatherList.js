import React from 'react';
import styled from 'styled-components';
import 'weather-icons/css/weather-icons.css';

const WeatherList = ({
  loadingWeather,
  name,
  temp,
  clouds,
  main,
  wind,
  humidity,
}) => {
  return (
    <div>
      {loadingWeather && '로딩중...'}
      {!loadingWeather && !name && '지역을 검색해보세요.'}
      {!loadingWeather && name && (
        <WeatherListBlock>
          <Top>
            <TopLeft>
              <i
                className={
                  main === 'Rain'
                    ? 'wi wi-rain'
                    : main === 'Clouds'
                    ? 'wi wi-cloudy'
                    : main === 'Clear'
                    ? 'wi wi-day-sunny'
                    : 'wi wi-night-partly-cloudy'
                }
              ></i>
            </TopLeft>
            <TopRight>
              <div className="celsius">{temp}°C</div>
              <div className="weather">{main}</div>
              <div className="region">{name}</div>
            </TopRight>
          </Top>
          <Bottom>
            <div>
              <i className="wi wi-cloud"></i>
              <div>{clouds}%</div>
            </div>
            <div>
              <i className="wi wi-humidity"></i>
              <div>{humidity}%</div>
            </div>
            <div>
              <i className="wi wi-strong-wind"></i>
              <div>{wind}m/s</div>
            </div>
          </Bottom>
        </WeatherListBlock>
      )}
    </div>
  );
};

export default WeatherList;

const WeatherListBlock = styled.div`
  width: 30rem;
  height: 13rem;
  border: 1px solid black;
  margin: 10px;
`;

const Top = styled.div`
  background-color: #0c8599;
  color: white;
  height: 9rem;
  width: 100%;
`;

const TopLeft = styled.div`
  font-size: 80px;
  margin-left: 5%;
  float: left;
  width: 65%;
`;

const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  .celsius {
    font-size: 30px;
  }
  .weather {
    font-weight: 700;
  }
  .region {
    font-style: italic;
  }
`;

const Bottom = styled.div`
  background-color: white;
  color: #0c8599;
  display: flex;
  justify-content: space-around;
`;
