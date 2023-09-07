import '../../../matchMediaConfig';
import { render, fireEvent } from '@testing-library/react';
import MessageForm from '../message-form';
import { Provider } from 'react-redux';
import store from '../../store';

test('it should disable submit button when input field is empty', async () => {
  const { getByPlaceholderText, getByRole } = render(
    <Provider store={store}>
      <MessageForm />
    </Provider>
  );

  const input = getByPlaceholderText(/compose your message/i);
  const button = getByRole('button', { name: /send-button/i });

  expect(button).toBeDisabled();

  fireEvent.change(input, { target: { value: 'Test message' } });

  expect(button).not.toBeDisabled();
});
