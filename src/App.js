import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';
import Header from './components/header';
import MessageItem from './components/message-item';
import LoginModal from './components/login-modal';
import MessageForm from './components/message-form';
import { fetchMessages } from './actions/messaging';
import './App.css';

function App() {
  const { user, messages } = useSelector(state => state.messaging);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchMessages());
    }
  }, [user]);

  return (
    <Fragment>
      <LoginModal />
      <Header />
      <Container sx={{ my: 1 }} fixed>
        {messages.length > 0 ? (
          <Box>
            {messages.map((message, index) => (
              <MessageItem key={index} data={message} />
            ))}
          </Box>
        ) : (
          <Typography textAlign="center">No messages yet.</Typography>
        )}
      </Container>
      <MessageForm />
    </Fragment>
  );
}

export default App;
