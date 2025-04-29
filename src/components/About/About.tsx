import { Box, Grid, Typography } from '@mui/material';

export const About = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: 'rgb(36, 36, 36)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '21%',
      }}
    >
      <Box sx={{ width: '70%', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid size={2}>
            <Typography variant='h5'>About Me</Typography>
          </Grid>
          <Grid size={10}>
            <Typography>
              I'm a passionate software engineer who loves building thoughtful, high-quality applications. I've worked
              extensively with technologies like React, React Native, TypeScript, Node.js, GraphQL, Next.js, Postgres,
              MongoDB, and many more. I take pride in crafting software that’s not just functional, but truly impactful.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
