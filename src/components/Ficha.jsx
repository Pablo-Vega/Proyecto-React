import React from 'react'
//import { useState } from 'react'
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Stack} from '@mui/material';


function Ficha() {
  const datos = {
    Animal: 'Dogpool',
    imageUrl: '/Dogpool.jpg',
  }

  /*const [count, setCount] = useState(0)
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
  });*/

//<Typography variant='h2'>Hola soy {datos.Animal}</Typography>

  return (
    <Stack direction="column" spacing={3} alignItems='center' justifyContent='center'>      
      <Avatar className='imagen' src={datos.imageUrl} alt='img' sx={{ width: 400, height: 350 }} />
      <h1></h1>
    </Stack>
  )

      /*
      <ThemeProvider theme={theme}>
        <Button variant='outlined' color="ochre" size='medium' sx={{ color: 'orange', backgroundColor: 'black' }} onClick={handleClick}>
          No toques, que ya has tocado {count} veces pesao
        </Button>
      </ThemeProvider>
      */
}

export default Ficha