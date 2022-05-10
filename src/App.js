import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Blanko from './components/Blanko';
import Memory from './components/Memory';
import Space from './components/Space';

function App() {

  const styles = {
    position: 'absolute',
    bottom: 0,
  }

  return (
    <>
      <BrowserRouter>
        <Box sx={{display: 'flex', flexDirection: 'column', position: 'relative', height: '100vh'}}>
          <Box>
            <Header/>
          </Box>
          <Box sx={{flexGrow: '1', display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/operations" element={<Blanko />} />
              <Route path="/memory" element={<Memory />} />
              <Route path="/space" element={<Space />} />
            </Routes>
          </Box>
          <Box>
            <Footer style={styles}/>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
