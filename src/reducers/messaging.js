import { ADD_MESSAGE, CLEAR_USER, SET_USER } from '../actions/messaging';

const initialState = {
  messages: [],
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
      };
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
