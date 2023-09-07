import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, TextField, useTheme } from '@mui/material';
import { SendOutlined } from '@mui/icons-material';
import { sendMessage } from '../../actions/messaging';

const MessageForm = () => {
  const [message, setMessage] = React.useState('');

  const theme = useTheme();
  const { user } = useSelector(state => state.messaging);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      message,
      user,
      createdAt: new Date(),
    };

    dispatch(sendMessage(payload));
    setMessage('');
  };

  return (
    <Box
      sx={{
        boxShadow:
          '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        position: 'absolute',
        bottom: 0,
        padding: 3,
        backgroundColor: '#f5f5f5',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Message"
        placeholder="Compose your message"
        name="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        fullWidth
      />
      <IconButton
        size="large"
        color="inherit"
        sx={{ backgroundColor: theme.palette.primary.main, color: 'white' }}
        type="submit"
        disabled={!message}
      >
        <SendOutlined />
      </IconButton>
    </Box>
  );
};

export default MessageForm;
