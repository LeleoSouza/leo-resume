import { Container } from '@mui/material';
import { WorkSection } from './Work/WorkSection';
import { SkillSection } from './Skills/SkillSection';

export const Resume = () => {
  return (
    <Container
      id='resume-page-anchor'
      sx={{
        width: { xs: '95%', md: '70%', lg: '60%' },
        scrollMarginTop: { lg: '64px', xs: '55px' },
        justifyContent: 'flex-start',
        display: 'flex',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        marginBottom: '40px',
        paddingTop: '40px',
      }}
    >
      <WorkSection />
      <SkillSection />
    </Container>
  );
};
