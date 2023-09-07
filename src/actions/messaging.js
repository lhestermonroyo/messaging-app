export const SET_USER = 'SET_USER';
export const setUser = user => ({ type: SET_USER, payload: user });

export const CLEAR_USER = 'CLEAR_USER';
export const clearUser = () => ({ type: CLEAR_USER });

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = message => {
  const messages = JSON.parse(localStorage.getItem('messageData'));
  localStorage.setItem('messageData', JSON.stringify([...messages, message]));
  return {
    type: SEND_MESSAGE,
    payload: [...messages, message],
  };
};

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const fetchMessages = () => {
  return {
    type: FETCH_MESSAGES,
    payload: JSON.parse(localStorage.getItem('messageData')),
  };
};
