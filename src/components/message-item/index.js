import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material';

const MessageItem = ({ data }) => {
  const theme = useTheme();
  const { user } = useSelector(state => state.messaging);

  const stringToColor = string => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const stringAvatar = name => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  const ownMessage = user === data.user;

  return (
    <Box
      sx={{
        my: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: ownMessage ? 'end' : 'start',
      }}
    >
      <Stack
        direction={ownMessage ? 'row' : 'row-reverse'}
        spacing={1}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Box
          sx={{
            padding: 1.5,
            backgroundColor: ownMessage
              ? '#f0f0f0'
              : theme.palette.primary.main,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="inherit"
            sx={{ color: ownMessage ? 'CaptionText' : 'white' }}
          >
            {data.message}
          </Typography>
        </Box>
        <Avatar {...stringAvatar(data.user)} />
      </Stack>
    </Box>
  );
};

export default MessageItem;
