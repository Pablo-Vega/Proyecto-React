import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function FormRegistro() {
  const [data, setData] = useState({ name: '', brand: '' });
  const [data2, setData2] = useState({ surname: '', brand: '' });
  const [data4, setData4] = useState({ edad: '', brand: '' });
  const [data5, setData5] = useState({ nacionalidad: '', brand: '' });
  const [selectedLenguaje, setSelectedLenguaje] = useState('');
  const [selectedGenero, setSelectedGenero] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [rating, setRating] = useState(0);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDialog(true);
  };

  // Función para limpiar todos los campos del formulario
  const handleClear = () => {
    setData({ name: '', brand: '' });
    setData2({ surname: '', brand: '' });
    setData4({ edad: '', brand: '' });
    setData5({ nacionalidad: '', brand: '' });
    setSelectedLenguaje('');
    setSelectedGenero('');
    setRating(0);
    setAcceptedTerms(false);
  };

  return (
    <Container size={'medium'}>
      <Paper elevation={1} square={false} sx={{ textAlign: 'center' }}>
        <Box component='form' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label='Nombre' variant='outlined' fullWidth value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}/>
            </Grid>
            <Grid item xs={6}>
              <TextField label='Apellidos' variant='outlined' fullWidth value={data2.surname} onChange={(e) => setData2({ ...data2, surname: e.target.value })}/>
            </Grid>
            <Grid item xs={6}>
              <TextField label='Edad'variant='outlined' fullWidth value={data4.edad} onChange={(e) => setData4({ ...data4, edad: e.target.value })}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid size={5} item xs={9}>
              <FormControl fullWidth>
                <InputLabel id="single-lenguaje-label">Lenguaje de Programación</InputLabel>
                <Select labelId="single-lenguaje-label" id="single-lenguaje"  value={selectedLenguaje} onChange={(e) => setSelectedLenguaje(e.target.value)}>
                  <MenuItem value="JavaScript">JavaScript</MenuItem>
                  <MenuItem value="Python">Python</MenuItem>
                  <MenuItem value="Java">Java</MenuItem>
                  <MenuItem value="C++">C++</MenuItem>
                  <MenuItem value="Ruby">Ruby</MenuItem>
                </Select>
              </FormControl>
            </Grid>

             <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Género</FormLabel>
                <RadioGroup row value={selectedGenero} onChange={(e) => setSelectedGenero(e.target.value)}>
                  <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" />
                  <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" />
                  <FormControlLabel value="No binario" control={<Radio />} label="No binario" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <Box component="fieldset" borderColor="transparent">
                <legend>Valora tu experiencia:</legend>
                <Rating name="simple-controlled" value={rating} onChange={(newValue) => setRating(newValue)}/>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={2}>
            <Grid item>
              <Checkbox checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
            </Grid>
            <Grid item>
              <FormControlLabel control={<></>} label="Acepto los términos y condiciones"/>
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <Button variant='outlined' fullWidth type='submit' disabled={!acceptedTerms}>
                Registrar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant='outlined' fullWidth onClick={handleClear}>
                Limpiar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás de acuerdo con enviar este formulario?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>No</Button>
          <Button onClick={() => setOpenDialog(false)} autoFocus>Sí</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default FormRegistro;
