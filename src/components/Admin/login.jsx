import { TextField, Button, Grid, Box } from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '89%',
    },
    gridContainer: {
        justify: 'center',
        alignItems: "center",
        flexDirection: "column"
    }
}))

function Login(props) {
    const { styles } = props;

    return (
        <Box className={styles} display="flex" justifyContent="center" alignItems="center" height="89%"  >
            <Grid container xs={6} spacing={2} >
                <Grid item container justify="center" alignItems="center" spacing={2} direction="column" >
                    <Grid item>
                        <TextField variant="outlined" label="Usuario" ></TextField>
                    </Grid>
                    <Grid item>
                        <TextField variant="outlined" label="Contraseña" type="password"></TextField>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="center" spacing={2}>
                    <Grid item>
                        <Button variant="contained" color="primary">Entrar</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secundary">Volver</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;