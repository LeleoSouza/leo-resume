import { Box, Card, Typography } from '@mui/material';
import Aurora from '../Background/Aurora';
import Dock from '../Dock/Dock';
import { items } from './constants/constants';

export const Welcome = () => {
  return (
    <Box
      id='welcome-page-anchor'
      sx={{
        position: 'relative',
        height: '100vh',
        overflowY: 'auto',
        flexWrap: 'wrap',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'black',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Aurora colorStops={['#F5F5DC', '#4B6A9B', '#F5F5DC']} blend={0.5} amplitude={2.0} speed={0.5} />
      </Box>
      <Card
        sx={{
          width: { xs: '95%', md: '70%', lg: '60%' },
          position: 'relative',
          zIndex: 1,
          padding: '30px',
          borderRadius: '6px',
          backgroundColor: 'rgba(31, 31, 31, 0.57)',
          color: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem',
              lg: '3rem',
            },
          }}
        >
          Hi, I'm Leonardo Elias!
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '1.0rem',
              sm: '1.1rem',
              md: '1.2rem',
              lg: '1.3rem',
            },
          }}
          align='center'
          marginBottom='10px'
        >
          Welcome to my corner of the web. I'm a Frontend Software Engineer with a passion for solving complex problems
          with clean, elegant solutions. With over 4+ years of experience, I've had the privilege of building modern,
          enterprise-level applications using the latest technologies. I'm always excited about creating software that
          makes a difference and delivering seamless, intuitive experiences.
        </Typography>
        <Box sx={{ height: '50px' }}>
          <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
        </Box>
      </Card>
    </Box>
  );
};
