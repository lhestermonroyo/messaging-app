import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import Header from './components/header';
import MessageItem from './components/message-item';
import LoginModal from './components/login-modal';
import MessageForm from './components/message-form';
import { fetchMessages } from './actions/messaging';
import './App.css';

function App() {
  const boardRef = useRef(null);

  const { user, messages } = useSelector(state => state.messaging);
  const dispatch = useDispatch();

  useEffect(() => {
    boardRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [boardRef.current, messages]);

  useEffect(() => {
    if (user) {
      dispatch(fetchMessages());
    }
  }, [user]);

  return (
    <div>
      <LoginModal />
      <Header />
      {messages.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'stretch',
            alignItems: 'stretch',
            flexDirection: 'column',
            height: '80vh',
            overflowY: 'auto',
          }}
        >
          <Box sx={{ py: 1, px: 3 }}>
            {messages.map((message, index) => (
              <MessageItem key={index} data={message} />
            ))}
            <div ref={boardRef} />
          </Box>
        </Box>
      ) : (
        <Typography textAlign="center">No messages yet.</Typography>
      )}
      <MessageForm />
    </div>
  );
}

export default App;
