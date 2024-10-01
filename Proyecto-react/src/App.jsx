import './App.css'
import React from 'react'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';
/*import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';*/

function App() {
  const datos = {
    Videojuego: 'Gaige',
    imageUrl: '/Gaige.jpg',
  }

  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }

  const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });



  return (
        <Stack direction="column-reverse" spacing={2} alignItems='center' justifyContent='space-evently'>
          <Typography variant='h2'>Hola soy {datos.Videojuego}</Typography>
          <Avatar className='imagen' src={datos.imageUrl} alt='img' sx={{ width: 400, height: 350 }} />
          <h1></h1>
          <ThemeProvider theme={theme}>
            <Button variant='outlined' color="ochre" size='medium' sx={{ color: 'orange', backgroundColor: 'black' }} onClick={handleClick}>
              No toques, que ya has tocado {count} veces pesao
            </Button>
          </ThemeProvider>
        </Stack>
  )


}

export default App
