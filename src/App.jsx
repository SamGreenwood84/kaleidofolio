import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

{/**Theme= dark theme UI */}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

{/** Footer and Header on every page */}
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <div className='appJsx'>
          <Header />
          <Outlet />
          <Footer />
        </div>
    </ThemeProvider>
  );
}


export default App;