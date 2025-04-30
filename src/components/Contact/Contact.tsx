import { Box, Typography } from '@mui/material';
import React from 'react';

export const Contact = () => {
  return (
    <Box
      id='contact-page-anchor'
      sx={{
        height: '30vh',
        width: '100%',
        backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '50%', backgroundColor: 'white' }}>
        <Typography>Contact</Typography>
      </Box>
    </Box>
  );
};
