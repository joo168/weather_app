import { createAction, handleActions } from 'redux-actions';

const CHANGE_CITY = 'input/CHANGE_CITY';

export const changeCity = createAction(CHANGE_CITY, city => city);

const initialState = {
  city: null,
};

const inputREDUCER = handleActions(
  {
    [CHANGE_CITY]: (state, action) => ({
      ...state,
      city: action.payload,
    }),
  },
  initialState,
);

export default inputREDUCER;
