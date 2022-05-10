import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'

export default function Header() {
  const navigate = useNavigate();
  const [biggerScreen, setBiggerScreen] = React.useState(false);
  const [biggestScreen, setBiggestScreen] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  const smallNav = ['H', 'Op', 'Me', 'S'];
  const bigNav = ['Home', 'Operations', 'Memory', 'Space'];
  const path = ['/home', '/operations', '/memory', '/space'];

  const handelResize = () => {
    if (window.innerWidth > 1400) {
      setWidth('100px');
    } else if (window.innerWidth > 800) {
      setWidth('60px');
    } else {
      setWidth('30px')
    }

    if (window.innerWidth > 800) {
      setBiggerScreen(true);
    } else {
      setBiggerScreen(false);
    }

    setWindowSize(window.innerWidth);
  }

  const printNavBar = () => {
    let usedArray;
    if (window.innerWidth > 1400) {
      usedArray = bigNav;
    } else {
      usedArray = smallNav;
    }

    return (
      <>        
        {usedArray.map((str, i) => {
          return (
            <>
              <Typography variant="body1" onClick={() => {navigate(path[i])}}
              sx={{
                px: 1,
                py: 1,
                cursor: 'pointer',
              }}
              > 
                {str}
              </Typography>  
            </>
          )
        })}
      </>
    )

  }

  React.useEffect(() => {
    handelResize();
    window.addEventListener('resize', handelResize);
    return (() => {window.removeEventListener('resize', handelResize)});
  }, [windowSize])


  return (
    <Box
      sx={{
        width: {width},
        height: '100vh',
        position: 'fixed',
        right: '0',
        backgroundColor: '#eee',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {window.innerWidth > 800 && 
          <Box
            component="img"
            src={logo}
            sx={{
              width: '50px',
              height: '50px',
              marginTop: '15px',
              marginBottom: '15px',
            }}
          >
        </Box>
        }
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {printNavBar()}
        </Box>
      </Box>
    </Box>
  );
}
