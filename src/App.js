import React from 'react';
import WeatherListContainer from './containers/WeatherListContainer';
import Header from './components/Header';
import InputContainer from './containers/InputContainer';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 25px;
`;

const App = () => {
  return (
    <AppBlock>
      <Header />
      <InputContainer />
      <WeatherListContainer />
    </AppBlock>
  );
};

export default App;
