import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import { skillsSchema, workSchema } from './constants/constants';

export const Resume = () => {
  return (
    <Container
      id='resume-page-anchor'
      sx={{
        width: { xs: '95%', md: '70%', lg: '60%' },
        scrollMarginTop: '64px',
        justifyContent: 'flex-start',
        display: 'flex',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        marginBottom: '40px',
        paddingTop: '40px',
      }}
    >
      {/* work */}
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
      {/* Skills */}
      <Grid container spacing={3} sx={{ paddingTop: '25px' }}>
        <Grid size={{ xs: 9, md: 2, lg: 2 }}>
          <Typography variant='h6' fontWeight='bold' sx={{ textDecoration: 'underline', color: 'gray' }}>
            SKILLS
          </Typography>
        </Grid>
        <Grid size={{ lg: 10, md: 10, xs: 12 }} display='flex' flexWrap='wrap' justifyContent='space-between'>
          {skillsSchema.map(({ title, list }, index) => {
            return (
              <Grid key={`${title}${index}`} width='250px'>
                <Typography key={title} variant='h6' fontWeight='bold'>
                  {title}
                </Typography>
                <List key={index} disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
                  {list.map((item, index) => (
                    <ListItem key={`${item}${index}`} sx={{ display: 'list-item', padding: '5px' }}>
                      <Typography key={item} variant='body2'>
                        {item}
                      </Typography>
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
