import { Box, Typography } from '@mui/material';

export const About = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: 'rgb(36, 36, 36)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '30%',
      }}
    >
      <Typography variant='h5'>About Me</Typography>

      <Typography>
        About me I'm a passionate software engineer who loves building thoughtful, high-quality applications. I've
        worked extensively with technologies like React, React Native, TypeScript, Node.js, GraphQL, Next.js, Postgres,
        MongoDB, and many more. I take pride in crafting software that’s not just functional, but truly impactful.
      </Typography>
    </Box>
  );
};
