import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions/messaging';
import { ChatBubbleOutline } from '@mui/icons-material';

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

  const handleSubmit = () => {
    try {
      if (!name) {
        setError(true);
      }

      const loggedUser = {
        name,
        authenticated: true,
      };
      dispatch(setUser(loggedUser));
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
        <Box sx={{ py: 3 }} component="form" noValidate>
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
        </Box>
        <Button variant="contained" onClick={handleSubmit}>
          Join Chat
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
