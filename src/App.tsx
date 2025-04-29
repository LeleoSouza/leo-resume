import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResumeHeader from './components/Header/ResumeHeader';
import { Resume } from './components/Resume/Resume';
import { Welcome } from './components/Welcome/Welcome';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Welcome />
      <ResumeHeader />
      <Resume />
    </ThemeProvider>
  );
}

export default App;
