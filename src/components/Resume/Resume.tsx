import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import { skillsSchema, workSchema } from './constants/constants';

export const Resume = () => {
  return (
    <Container
      id='resume-page-anchor'
      sx={{
        justifyContent: 'flex-start',
        display: 'flex',
        width: '50%',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        marginBottom: '50px',
      }}
    >
      {/* work */}
      <Grid container spacing={2} sx={{ paddingTop: '25px' }}>
        <Grid size={{ xs: 9, md: 2, lg: 2 }}>
          <Typography variant='h6' fontWeight='bold' sx={{ textDecoration: 'underline', color: 'gray' }}>
            WORK
          </Typography>
        </Grid>
        <Grid size={{ lg: 10, md: 10, xs: 12 }}>
          {workSchema.map(({ title, location, body }) => {
            return (
              <Grid paddingBottom='20px'>
                <Typography variant='h6' fontWeight='bold'>
                  {title}
                </Typography>
                <Typography variant='body2' sx={{ fontStyle: 'italic' }}>
                  {location}
                </Typography>
                <Typography variant='body1' sx={{ paddingTop: '20px' }}>
                  {body}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container spacing={3} sx={{ paddingTop: '25px' }}>
        <Grid size={{ xs: 9, md: 2, lg: 2 }}>
          <Typography variant='h6' fontWeight='bold' sx={{ textDecoration: 'underline', color: 'gray' }}>
            SKILLS
          </Typography>
        </Grid>
        <Grid size={{ lg: 10, md: 10, xs: 12 }} display='flex' flexWrap='wrap' justifyContent='space-between'>
          {skillsSchema.map(({ title, list }) => {
            return (
              <Grid width='250px'>
                <Typography variant='h6' fontWeight='bold'>
                  {title}
                </Typography>
                <List disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
                  {list.map((items) => (
                    <ListItem sx={{ display: 'list-item', padding: '5px' }}>
                      <Typography variant='body2'>{items}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};
