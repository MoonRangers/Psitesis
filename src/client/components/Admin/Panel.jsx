import {Box, Button, Grid} from '@material-ui/core'

function Panel () {
    return(
        <Box display="flex" justifyContent="center" alignItems="center" height="89%"  >
            <Grid container xs={6}  >
                <Grid item container justify="center" spacing={2} >
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

            </Grid>
        </Box>
    )
}

export default Panel