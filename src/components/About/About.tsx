import { Box, Divider, Grid, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PlaceIcon from '@mui/icons-material/Place';
export const About = () => {
  return (
    <Box id='about-me-anchor' sx={{ padding: '20px', backgroundColor: 'rgb(59, 59, 59)', scrollMarginTop: '66px' }}>
      <Box sx={{ width: '60%', margin: '0 auto' }}>
        <Grid container display='flex' justifyContent='center' padding='10px'>
          <Grid>
            <Typography variant='h5' gutterBottom color='white'>
              About Me
            </Typography>
            <Typography color='white'>
              I'm a passionate software engineer who loves building thoughtful, high-quality applications. I've worked
              extensively with technologies like React, React Native, TypeScript, Node.js, GraphQL, Next.js, Postgres,
              MongoDB, and many more. I take pride in crafting software that’s not just functional, but truly impactful.
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
