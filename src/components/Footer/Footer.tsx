import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { gitHub, linkedIn } from '../../constants/constants';

export const Footer = () => {
  return (
    <Box id='about-me-anchor' sx={{ padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.87)' }}>
      <Box sx={{ width: '60%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <IconButton onClick={() => window.open(gitHub)}>
          <GitHubIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton
          sx={{ color: 'white' }}
          onClick={() => {
            window.open(linkedIn);
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
