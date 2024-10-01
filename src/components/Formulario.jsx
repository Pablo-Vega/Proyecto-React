import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function FormRegistro() {
  const [data, setData] = useState({ name: '', breed: '' });
  const [selectedRaza, setSelectedRaza] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeName = (e) => {
    setData({
      ...data,
      name: e.target.value
    });
  };

  const handleSelectChange = (event) => {
    setSelectedRaza(event.target.value); 
  };

  return (
    <Container size={'medium'}>
      <Paper elevation={1} square={false} sx={{ textAlign: 'center' }}>
        <Box component='form' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label='Nombre' variant='outlined' fullWidth value={data.name} onChange={handleChangeName} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="select-raza-label">Raza</InputLabel>
                <Select 
                  labelId="select-raza-label" 
                  id="select-raza" 
                  value={selectedRaza} 
                  onChange={handleSelectChange} 
                  label="Raza"
                >
                  <MenuItem value="perro">Perro</MenuItem>
                  <MenuItem value="gato">Gato</MenuItem>
                  <MenuItem value="hamster">Hamster</MenuItem>
                  <MenuItem value="otro">Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant='outlined' fullWidth type='submit'>Registrar</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default FormRegistro;
