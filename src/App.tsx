import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResumeHeader from './components/Header/ResumeHeader';
import { Resume } from './components/Resume/Resume';
import { Welcome } from './components/Welcome/Welcome';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { HandleMenuClick } from './constants/constants';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const handleClick = (props: HandleMenuClick) => {
    const anchor = ((props.event.target as HTMLDivElement).ownerDocument || document).querySelector(
      props.querySelector
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Welcome />
      <About />
      <ResumeHeader handleMenuClick={handleClick} />
      <Resume />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
