import { Box, Card, Stack, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import cover from '../../assets/sky-background.jpg';
import resume from '../../assets/leonardo-resume.pdf';
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
          width: { xs: '95%', md: '70%', lg: '60%' },
          padding: '30px',
          borderRadius: '6px',
          backgroundColor: 'rgba(13, 13, 13, 0.57)',
          color: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h3'>Hi, I'm Leonardo Elias!</Typography>
        <Typography variant='h6' align='center' marginBottom='10px'>
          Welcome to my corner of the web. I'm a Frontend Software Engineer with a passion for solving complex problems
          with clean, elegant solutions. With over 4+ years of experience, I've had the privilege of building modern,
          enterprise-level applications using the latest technologies. I'm always excited about creating software that
          makes a difference and delivering seamless, intuitive experiences.
        </Typography>
        <Box sx={{ justifyContent: 'center' }}>
          <Stack direction='row' spacing={3}>
            <IconButton onClick={() => window.open('https://github.com/LeleoSouza')}>
              <GitHubIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              onClick={() => {
                window.open('https://www.linkedin.com/in/leonardo-souza-490188ba/');
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                window.open(resume);
              }}
            >
              <ContactPageIcon sx={{ color: 'white' }} />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
