import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from '../../../assets/leonardo-resume.pdf';
import { gitHub, linkedIn } from '../../../constants/constants';
export const items = [
  {
    icon: <GitHubIcon sx={{ color: 'white' }} />,
    label: 'GitHub',
    onClick: () => window.open(gitHub),
  },
  {
    icon: <LinkedInIcon sx={{ color: 'white' }} />,
    label: 'LinkedIn',
    onClick: () => window.open(linkedIn),
  },
  {
    icon: <ContactPageIcon sx={{ color: 'white' }} />,
    label: 'Download Resume',
    onClick: () => window.open(resume),
  },
];
