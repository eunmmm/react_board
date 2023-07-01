import { ADD_INFO, REMOVE_INFO, EDIT_INFO } from './constants';

const initialState = [];

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return [...state, action.payload];
    case REMOVE_INFO:
      return state.filter((info) => info.id !== action.payload);
    case EDIT_INFO:
      return state.map((info) => (info.id === action.payload.id ? action.payload : info));
    default:
      return state;
  }
};

export default infoReducer;