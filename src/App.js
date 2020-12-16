import './App.css';
import { TextField, Button, Grid, AppBar, Typography, Toolbar } from '@material-ui/core/';
import {  makeStyles, createMuiTheme } from '@material-ui/core/styles';


function App() {

  return (

    <Grid id="root" container alignItems="center" justify="center" >
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" >
            PsiTesis
            </Typography>
        </Toolbar>
      </AppBar>

      <Grid id="login-container" container spacing={2} justify="center" >
        <Typography variant="h6" >
          Login
            </Typography>
        <Grid id="login-textField-container" container item direction="column" alignItems="center" spacing={2} zeroMinWidth >
          <Grid item>
            <TextField variant="outlined" label="Usuario" ></TextField>
          </Grid>
          <Grid item>
            <TextField variant="outlined" label="Contraseña" type="password"></TextField>
          </Grid>
        </Grid>
        <Grid id="login-button-container" container item justify="center" spacing={2}  >
          <Grid item>
            <Button variant="contained" color="primary">Entrar</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secundary">Volver</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default App;
