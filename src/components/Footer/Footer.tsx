import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <Box id='about-me-anchor' sx={{ padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.87)' }}>
      <Box sx={{ width: '60%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <IconButton onClick={() => window.open('https://github.com/LeleoSouza')}>
          <GitHubIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton
          sx={{ color: 'white' }}
          onClick={() => {
            window.open('https://www.linkedin.com/in/leonardo-elias-490188ba/');
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
