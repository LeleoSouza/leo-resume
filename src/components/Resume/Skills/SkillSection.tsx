import { Grid, List, ListItem, Typography } from '@mui/material';
import { skillsSchema } from '../constants/constants';

export const SkillSection = () => {
  return (
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
  );
};
