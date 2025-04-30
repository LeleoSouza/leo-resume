import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResumeHeader from './components/Header/ResumeHeader';
import { Resume } from './components/Resume/Resume';
import { Welcome } from './components/Welcome/Welcome';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Welcome />
      <About />
      <ResumeHeader />
      <Resume />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
