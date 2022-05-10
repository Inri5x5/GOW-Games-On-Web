import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

let timeout1 = null;
let timeout2 = null;

export default function Memory () {

  const [iteration, setIteration] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const [correct, setCorrect] = React.useState([]);
  const [input, setInput] = React.useState([]);
  const [shown, setShown] = React.useState(false);

  const data = ['A', 'B', 'C', 'D']

  const equals = (a, b) => {
    return (a.length === b.length && a.every((v, i) => v === b[i]));
  }

  const reset = () => {
    setInput([]);
    setCorrect([]);
  }

  const handle = (value) => {
    const newArray = [...input];
    newArray.push(value);
    setInput(newArray);
    console.log(newArray);
    // console.log(correct);
    if(newArray.length === correct.length) {
      if (equals(newArray, correct)) {
        if (iteration + 1 === 5) {
          alert('You won the game')
          const prevCount = localStorage.getItem('numGameWon');
          localStorage.setItem('numGameWon', parseInt(prevCount) - 1);
          reset();
          setIteration(1)
        } else {
          alert("wrong")
          setIteration(iteration + 1);
          reset()
        }
      } else {
        reset();
        setIteration(1);
      }
    }
  }

  const show = (newArray) => {
    const index = Math.floor(Math.random() * 4);
    setShown(data[index]);
    newArray.push(data[index]);
    console.log(newArray);
  }
  
  React.useEffect(() => {
    if (iteration !== 0) {
      setDisabled(true);
      let i = 0;
      const newArray = [...correct];
      while (i !== iteration) {
        timeout1 = setTimeout(() => {show(newArray)}, 1000 * i)
        i++;
      }
      setCorrect(newArray);
      timeout2 = setTimeout(() => {
        setShown('');
        setDisabled(false);
      }, 1000 * iteration)
    }
  }, [iteration])

  React.useEffect(() => {
    setIteration(iteration => iteration + 1)
  }, [])

  return (
    <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', flex: '1', height: '100%', width:'100%', marginRight:'10%'}}>
      <Box sx={{flex: '1', display: 'flex',flexDirection: 'row', width: '100%', height: '100%'}}>
        <Button variant="contained" onClick={() => handle('A')} disabled={disabled} sx={{width:'25%', height:'100%'}}>A</Button>
        <Button variant="contained" onClick={() => handle('B')} disabled={disabled} sx={{width:'25%', height:'100%'}}>B</Button>
        <Button variant="contained" onClick={() => handle('C')} disabled={disabled} sx={{width:'25%', height:'100%'}}>C</Button>
        <Button variant="contained" onClick={() => handle('D')} disabled={disabled} sx={{width:'25%', height:'100%'}}>D</Button>
      </Box>
      <Box sx={{flex: '1', display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: '20px', height: '20px', backgroundColor: '#cccccc', border:0}}>
          {shown}
        </Box>
      </Box>
    </Box>
  )
}