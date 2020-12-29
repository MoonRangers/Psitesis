import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';

function NavBar() {

    const useStyles = makeStyles(theme => ({
        title: {
            flexGrow: 1,
            textAlign: 'center',
            color: '#fcfcff',
        },
    }));

    const classes = useStyles();

    return (

        <AppBar position="top">
            <Toolbar >
                <Hidden only="xs">
                    <IconButton edge="start" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Hidden>

                <Typography variant="h4" className={classes.title}>
                    PsiTesis
                </Typography>
            </Toolbar>
        </AppBar>

    );
}



export default NavBar;
