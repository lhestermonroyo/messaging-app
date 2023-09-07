import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import Header from './components/header';
import MessageItem from './components/message-item';
import LoginModal from './components/login-modal';
import MessageForm from './components/message-form';
import { fetchMessages } from './actions/messaging';
import './App.css';

function App() {
  const [inc, setInc] = useState(1);
  const boardRef = useRef(null);

  const { user, messages } = useSelector(state => state.messaging);
  const dispatch = useDispatch();

  useEffect(() => {
    if (boardRef.current) {
      boardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (user) {
      dispatch(fetchMessages());
    }
  }, [dispatch, user]);

  const handleLoadMore = () => {
    setInc(inc + 1);
  };

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
            flexDirection: 'column-reverse',
            height: '80vh',
            overflowY: 'auto',
          }}
        >
          <Box sx={{ py: 1, px: 3 }}>
            {messages.length > 25 * inc && (
              <Typography textAlign="center">
                <Button onClick={handleLoadMore}>Load more</Button>
              </Typography>
            )}
            {messages
              .slice(0, 25 * inc)
              .reverse()
              .map((message, index) => {
                return <MessageItem key={index} data={message} />;
              })}
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
