import { Box, Button, Grid } from '@material-ui/core'
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
    }
}))


function Panel() {
    const classes = useStyles();
    return (
        <Box className={classes.root}  >
            <Grid item container className={classes.gridContainer} xs={6} spacing={2} >
                <Grid item >
                    <Button variant="contained" color="primary">CREAR</Button>
                </Grid>

                <Grid item  >
                    <Button variant="contained" color="primary">MODIFICAR</Button>
                </Grid>

                <Grid item  >
                    <Button variant="contained" color="primary">Borrar</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Panel