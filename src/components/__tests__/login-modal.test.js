import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginModal from '../login-modal';

const mockStore = configureMockStore();

test('it should render login modal when user is not existing', () => {
  const initialState = {
    messaging: {
      user: null,
      messages: [],
    },
  };

  const store = mockStore(initialState);

  const { queryByText } = render(
    <Provider store={store}>
      <LoginModal />
    </Provider>
  );

  const modalContent = queryByText(/welcome!/i);

  expect(modalContent).toBeTruthy();
});

test('it should not render login modal when user is existing', () => {
  const initialState = {
    messaging: {
      user: 'John Doe',
      messages: [],
    },
  };

  const store = mockStore(initialState);

  const { queryByText } = render(
    <Provider store={store}>
      <LoginModal />
    </Provider>
  );

  const modalContent = queryByText(/welcome!/i);

  expect(modalContent).toBeFalsy();
});
