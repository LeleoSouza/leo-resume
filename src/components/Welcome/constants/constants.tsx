import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from '../../../assets/leonardo-resume.pdf';
export const items = [
  {
    icon: <GitHubIcon sx={{ color: 'white' }} />,
    label: 'GitHub',
    onClick: () => window.open('https://github.com/LeleoSouza'),
  },
  {
    icon: <LinkedInIcon sx={{ color: 'white' }} />,
    label: 'LinkedIn',
    onClick: () => window.open('https://www.linkedin.com/in/leonardo-souza-490188ba/'),
  },
  {
    icon: <ContactPageIcon sx={{ color: 'white' }} />,
    label: 'Download Resume',
    onClick: () => window.open(resume),
  },
];
