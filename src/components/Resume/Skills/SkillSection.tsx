import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { skillsSchema } from '../constants/constants';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export const SkillSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Grid container spacing={3} sx={{ paddingTop: '25px' }}>
      <Grid size={{ xs: 9, md: 2, lg: 2 }}>
        <Box
          role='button'
          onClick={() => setIsVisible(!isVisible)}
          sx={{ backgroundColor: 'transparent', cursor: 'pointer' }}
        >
          <Typography variant='h6' fontWeight='bold' sx={{ textDecoration: 'underline', color: 'gray' }}>
            SKILLS
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ lg: 10, md: 10, xs: 12 }} display='flex' flexWrap='wrap' justifyContent='space-between'>
        {skillsSchema.map(({ title, list }, index) => {
          return (
            <Grid key={`${title}${index}`} width='250px'>
              {/* <Box
                role='button'
                onClick={() => setIsVisible(!isVisible)}
                sx={{ backgroundColor: 'transparent', cursor: 'pointer' }}
              > */}
              <Typography key={title} variant='h6' fontWeight='bold' sx={{ color: 'black' }}>
                {title}
              </Typography>
              {/* </Box> */}
              {/* <Typography key={title} variant='h6' fontWeight='bold'>
                {title}
              </Typography> */}
              <List key={index} disablePadding sx={{ listStyleType: 'disc', pl: 2 }}>
                {list.map((item, index) => (
                  <AnimatePresence initial={false}>
                    {isVisible ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={{ width: 100, backgroundColor: 'white' }}
                        key='box'
                      >
                        <ListItem key={`${item}${index}`} sx={{ display: 'list-item', padding: '5px' }}>
                          <Typography key={item} variant='body2'>
                            {item}
                          </Typography>
                        </ListItem>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                ))}
              </List>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
