import { Box, Card, Divider, Stack, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { About } from '../About/About';
import cover from '../../assets/sky3.jpg';
export const Welcome = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        overflowY: 'auto',
        alignItems: 'flex-end',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'center',
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
      }}
    >
      <Card
        sx={{
          minWidth: 300,
          width: '50%',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'rgba(13, 13, 13, 0.57)',
        }}
      >
        <Typography variant='h3'>Hi, I'm Leonardo Elias</Typography>
        <Divider />
        <Typography variant='h6' sx={{ paddingTop: '10px' }}>
          I'm a Full Stack Software Engineer with a passion for finding elegant solutions to complex problems. I have
          over 4 years of experience working to create enterprise level modern applications using the latest
          technologies.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <Stack direction='row' spacing={3}>
            <IconButton onClick={() => window.open('https://github.com/LeleoSouza')}>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <ContactPageIcon />
            </IconButton>
          </Stack>
        </Box>
      </Card>
      <About />
    </Box>
  );
};
