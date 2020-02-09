import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';

const GET_WEATHER = 'weather/GET_WEATHER';
const GET_WEATHER_SUCCESS = 'weather/GET_WEATHER_SUCCESS';
const GET_WEATHER_FAILURE = 'weather/GET_WEATHER_FAILURE';
const CHANGE_CITY = 'weather/CHANGE_CITY';

export const changeCity = createAction(CHANGE_CITY, city => city);

export const getWeather = city => async dispatch => {
  dispatch({ type: GET_WEATHER });
  try {
    const response = await api.getWeather(city);
    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_WEATHER_FAILURE,
      payload: e,
      error: true,
    });
    alert('입력한 도시 이름이 정확하지 않습니다.');
    throw e;
  }
};

const initialState = {
  loading: {
    GET_WEATHER: false,
  },
  result: {
    name: '',
    temp: '',
    clouds: '',
    main: '',
    humidity: '',
    wind: '',
  },
  city: '',
};

// redux-thunk는 액션생성함수에서, 일반 액션 객체 대신, 함수를 반환한다!

const REDUCER = handleActions(
  {
    [GET_WEATHER]: state => ({
      ...state,
      loading: {
        ...state.loading,
        GET_WEATHER: true,
      },
    }),
    [GET_WEATHER_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_WEATHER: false,
      },
      result: {
        ...state.result,
        name: action.payload.name,
        temp: action.payload.main.temp,
        clouds: action.payload.clouds.all,
        main: action.payload.weather[0].main,
        humidity: action.payload.main.humidity,
        wind: action.payload.wind.speed,
      },
    }),
    [GET_WEATHER_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_WEATHER: false,
      },
    }),
    [CHANGE_CITY]: (state, action) => ({
      ...state,
      city: action.payload,
    }),
  },
  initialState,
);

export default REDUCER;
