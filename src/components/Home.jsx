import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home () {
  const [gameWon, setGameWon] = React.useState(true);

  const fetchData = async() => {
    const response = await(fetch('https://cs6080.web.cse.unsw.edu.au/raw/data/score.json'));
    const data = await(response.json());
    setGameWon(data.score);
    localStorage.setItem('numGameWon', data.score)
  }

  const reset = () => {
    fetchData();
  }

  React.useEffect(() => {
    if (localStorage.getItem('numGameWon') === null) {
      console.log('test')
      fetchData();
    } else {
      setGameWon(localStorage.getItem('numGameWon'))
      if (localStorage.getItem('numGameWon') <= 0) {
        alert('Congratulation');
        reset();
      }
    }

  }, []);

  return (
    <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', paddingRight: '10%'}}>
      <Box>
        <Typography variant="h1" component="h1" sx={{color: 'blue', fontSize: '2em', textAlign: 'center'}}>
          Please choose an option from the sidebar.
        </Typography>
      </Box>
      <Box sx={{display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant="h2" component="h2" sx={{ fontSize: '2em'}}>
          Games left to win: {gameWon}
        </Typography>
        <Button variant="contained" onClick={() => {reset()}} sx={{ ml: 2}}>Reset</Button>
      </Box>
    </Box>
  )
}