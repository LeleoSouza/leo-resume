import { Box, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export const Contact = () => {
  return (
    <Box
      id='contact-page-anchor'
      sx={{
        width: '100%',
        backgroundColor: 'rgb(59, 59, 59)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '60%', color: 'white', marginBottom: '30px', marginTop: '30px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: '20px' }}>
          <MailOutlineIcon sx={{ fontSize: '90px' }} />
          <Typography variant='h4'>Get in touch.</Typography>
        </Box>
        <Box>
          <Typography gutterBottom>
            I'm always open to new opportunities, collaborations, or conversations—please feel free to get in touch if
            you'd like to discuss a project, explore potential partnerships, or simply connect about software
            development and technology.
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <EmailIcon sx={{ paddingRight: '10px' }} />
            <Link
              color='inherit'
              href='#'
              underline='none'
              onClick={(e) => {
                window.location.href = ' mailto:leobrausa@hotmail.com';
                e.preventDefault();
              }}
            >
              leobrausa@hotmail.com
            </Link>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <GitHubIcon sx={{ paddingRight: '10px' }} />
            <Link color='inherit' href='https://github.com/LeleoSouza' underline='none'>
              GitHub/LeleoSouza
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
