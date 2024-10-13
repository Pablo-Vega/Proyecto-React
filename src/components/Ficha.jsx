import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Stack} from '@mui/material';
import { CustomButton } from 'milibreria';


function Ficha() {
  const datos = {
    Animal: 'Dogpool',
    imageUrl: '/Dogpool.jpg',
  }

  

  return (
    <Stack direction="column" spacing={3} alignItems='center' justifyContent='center'>      
      <Avatar className='imagen' src={datos.imageUrl} alt='img' sx={{ width: 400, height: 350 }} />
      <h1></h1>
    </Stack>
  )
}

export default Ficha