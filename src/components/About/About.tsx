import { Box, Divider, Grid, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PlaceIcon from '@mui/icons-material/Place';
export const About = () => {
  return (
    <Box id='about-me-anchor' sx={{ padding: '20px', backgroundColor: 'rgb(59, 59, 59)', scrollMarginTop: '64px' }}>
      <Box sx={{ width: { xs: '95%', md: '70%', lg: '60%' }, margin: '0 auto' }}>
        <Grid container display='flex' justifyContent='center' padding='10px'>
          <Grid>
            <Typography variant='h5' gutterBottom color='white'>
              About Me
            </Typography>
            <Typography color='white'>
              I’ve always been drawn to how technology can solve real problems and make people’s lives easier. Over the
              past few years, I’ve honed my skills as a frontend engineer by working on everything from government tools
              to internal platforms that teams rely on daily. I enjoy digging into the details—whether that’s
              fine-tuning a user experience, refactoring code for better performance, or collaborating with others to
              bring an idea to life. Outside of coding, I’m the kind of person who’s always curious, always learning,
              and always up for a new challenge.
            </Typography>

            <Divider sx={{ my: 2, backgroundColor: 'white' }} />

            <Grid container spacing={2} justifyContent='space-evenly'>
              <Box display='flex' justifyContent='center'>
                <PlaceIcon sx={{ paddingRight: '2px', color: 'white' }} />
                <Typography color='white'>Location: Washington, DC</Typography>
              </Box>
              <Box display='flex' justifyContent='center'>
                <SchoolIcon sx={{ paddingRight: '3px', color: 'white' }} />
                <Typography color='white'>Education: UMGC</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
