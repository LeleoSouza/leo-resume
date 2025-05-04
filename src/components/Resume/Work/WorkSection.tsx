import { workSchema } from '../constants/constants';
import { Grid, Typography } from '@mui/material';

export const WorkSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 9, md: 2, lg: 2 }}>
        <Typography variant='h6' fontWeight='bold' sx={{ textDecoration: 'underline', color: 'gray' }}>
          WORK
        </Typography>
      </Grid>
      <Grid size={{ lg: 10, md: 10, xs: 12 }}>
        {workSchema.map(({ title, location, body }) => {
          return (
            <Grid key={`${title}${location}`} paddingBottom='20px'>
              <Typography key={title} variant='h6' fontWeight='bold'>
                {title}
              </Typography>
              <Typography key={location} variant='body2' sx={{ fontStyle: 'italic' }}>
                {location}
              </Typography>
              <Typography key={body} variant='body1' sx={{ paddingTop: '20px' }}>
                {body}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
