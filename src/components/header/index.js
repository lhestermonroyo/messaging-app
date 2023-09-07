import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { ArrowBackOutlined } from '@mui/icons-material';

import { clearUser } from '../../actions/messaging';

const Header = () => {
  const { user } = useSelector(state => state.messaging);
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(clearUser());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleBack}
          >
            <ArrowBackOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user?.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
