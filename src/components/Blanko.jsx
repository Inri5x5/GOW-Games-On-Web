import * as React from 'react';
import Box from '@mui/material/Box';
import {numbers} from '../blanko.js'
import Button from '@mui/material/Button';

export default function Blanko () {

  const [selectedStr, setSelectedStr] = React.useState([]); 
  const [index, setIndex] = React.useState(0);

  const initialize = () => {
    // let index = Math.floor(Math.random() * numbers.length);
    let newArray = numbers[index];
    // if (selectedStr !== []) {
    //   while (equals(newArray, selectedStr)) {
    //     index = Math.floor(Math.random() * numbers.length);
    //     newArray = numbers[index];
    //   }
    // }
    setSelectedStr(newArray);
    if (index === 4) {
      setIndex(0)
    } else {
      setIndex((index) => index + 1)
    }
  }

  const equals = (a, b) => {
    return (a.length === b.length && a.every((v, i) => v === b[i]));
  }
  
  React.useEffect(() => {
    initialize();
  }, [])

  const validate = (operation) => {
    if (operation === '+') {
      if (selectedStr[0] + selectedStr[1] === selectedStr[2]) {
        alert('You won the game')
        const prevCount = localStorage.getItem('numGameWon');
        localStorage.setItem('numGameWon', parseInt(prevCount) - 1);
        initialize();
      } else (
        alert('Wrong Answer')
      )
    }
    if (operation === '-') {
      if (selectedStr[0] - selectedStr[1] === selectedStr[2]) {
        alert('You won the game')
        const prevCount = localStorage.getItem('numGameWon');
        localStorage.setItem('numGameWon', parseInt(prevCount) - 1);
        initialize();
      } else (
        alert('Wrong Answer')
      )
    }
    if (operation === 'x') {
      if (selectedStr[0] * selectedStr[1] === selectedStr[2]) {
        alert('You won the game')
        const prevCount = localStorage.getItem('numGameWon');
        localStorage.setItem('numGameWon', parseInt(prevCount) - 1);
        initialize();
      } else (
        alert('Wrong Answer')
      )
    }
    if (operation === '/') {
      if (selectedStr[0] / selectedStr[1] === selectedStr[2]) {
        alert('You won the game')
        const prevCount = localStorage.getItem('numGameWon');
        localStorage.setItem('numGameWon', parseInt(prevCount) - 1);
        initialize();
      } else (
        alert('Wrong Answer')
      )
    }
  }

  return (
    <>
      <Box sx={{display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center', height: '100px', width:'100%', backgroundColor:'rgb(200,255,255)'}}>
        <Box sx={{display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width:'100%', marginRight:'8%'}}>
          <Box sx={{flex: '1', display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}> {selectedStr[0]} </Box>
          <Box sx={{flex: '1', display: 'flex',flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}> 
            <button style={{width:'25%', height:'50px'}} onClick={() => validate('+')}> + </button>
            <button style={{width:'25%', height:'50px'}} onClick={() => validate('-')}>-</button>
            <button style={{width:'25%', height:'50px'}} onClick={() => validate('x')}>x</button>
            <button style={{width:'25%', height:'50px'}} onClick={() => validate('/')}>/</button>
          </Box>
          <Box sx={{flex: '1', display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}> {selectedStr[1]} </Box>
          <Box sx={{flex: '1', display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}> = </Box>
          <Box sx={{flex: '1', display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}> {selectedStr[2]} </Box>
        </Box>
      </Box>
    </>
  )
}