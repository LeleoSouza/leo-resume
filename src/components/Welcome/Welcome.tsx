import { Box, Card, Stack, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import cover from '../../assets/sky3.jpg';

export const Welcome = () => {
  return (
    <Box
      id='welcome-page-anchor'
      sx={{
        height: '100vh',
        overflowY: 'auto',
        flexWrap: 'wrap',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
      }}
    >
      <Card
        sx={{
          minWidth: 300,
          width: '50%',
          padding: '30px',
          borderRadius: '6px',
          backgroundColor: 'rgba(13, 13, 13, 0.57)',
          color: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h3'>Hi, I'm Leonardo Elias</Typography>
        <Typography variant='h6' align='center' marginBottom='10px'>
          I'm a Full Stack Software Engineer with a passion for finding elegant solutions to complex problems. I have
          over 4 years of experience working to create enterprise level modern applications using the latest
          technologies.
        </Typography>
        <Box sx={{ justifyContent: 'center' }}>
          <Stack direction='row' spacing={3}>
            <IconButton onClick={() => window.open('https://github.com/LeleoSouza')}>
              <GitHubIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton>
              <ContactPageIcon sx={{ color: 'white' }} />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
