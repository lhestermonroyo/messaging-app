import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { ChatBubbleOutline } from '@mui/icons-material';
import { setUser } from '../../actions/messaging';

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const theme = useTheme();
  const { user } = useSelector(state => state.messaging);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      setOpen(true);
    }
  }, [user]);

  useEffect(() => {
    if (error && name.length > 0) {
      setError(false);
    }
  }, [name, error]);

  const handleSubmit = e => {
    try {
      e.preventDefault();

      if (!name) {
        setError(true);
      }

      dispatch(setUser(name));
      setName('');
      setOpen(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Dialog
      onClose={() => setOpen(false)}
      open={open}
      fullScreen
      disableEscapeKeyDown
    >
      <DialogContent>
        <Typography textAlign="center">
          <Box
            sx={{
              width: 64,
              height: 64,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
              borderRadius: 50,
              backgroundColor: theme.palette.primary.main,
              my: 3,
            }}
          >
            <ChatBubbleOutline sx={{ color: 'white' }} fontSize="large" />
          </Box>
        </Typography>
        <Typography textAlign="center" variant="h3">
          Welcome!
        </Typography>
        <Typography textAlign="center" variant="body1" color="GrayText">
          Enter your name to join the chat.
        </Typography>
        <Box sx={{ py: 3 }} component="form" onSubmit={handleSubmit}>
          <TextField
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            error={error}
            helperText={error && 'Name is required'}
            label="Name"
            placeholder="Enter your name"
            fullWidth
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Join Chat
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
