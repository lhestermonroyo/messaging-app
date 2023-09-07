import {
  SEND_MESSAGE,
  CLEAR_USER,
  SET_USER,
  FETCH_MESSAGES,
} from '../actions/messaging';

const initialState = {
  messages: [],
  user: null,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    case SEND_MESSAGE:
      const messageData = JSON.parse(localStorage.getItem('messageData'));
      return {
        ...state,
        messages: messageData,
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
