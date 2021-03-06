import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Group, Book, Forum, Home } from '@material-ui/icons/';
import { Hidden, ListItemText, MenuItem } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom'

const drawerWidth = 240;

function NavBar() {

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },

        title: {
            flexGrow: 1,
            marginLeft: "2%",
            color: '#fcfcff',

        },

        drawerPaper: {
            width: drawerWidth,
            backgroundColor: "#861c55"
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },

        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },

        list: {
            paddingTop: "0px"
        }
    }));

    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar >
                    <Typography variant="h5" className={classes.title}>
                        PsiTesis
                </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Hidden smDown>
                <Drawer
                    variant="permanent"
                    classes=
                    {
                        {
                            paper: classes.drawerPaper,
                        }
                    }
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List className={classes.list}>
                            <MenuItem
                                button
                                key='Home'
                                component={Link} to="/app"
                                selected={'/app' === location.pathname}
                            >
                                <ListItemIcon> <Home /> </ListItemIcon>
                                <ListItemText primary='Home'></ListItemText>
                            </MenuItem>
                            <MenuItem
                                button
                                key='Gu??a de tesis'
                                component={Link} to="/app/guiadetesis"
                                selected={'/app/guiadetesis' === location.pathname}
                            >
                                <ListItemIcon> <Book /> </ListItemIcon>
                                <ListItemText primary='Gu??a de tesis'></ListItemText>
                            </MenuItem>
                            <MenuItem
                                button
                                key='Conversaci??n'
                                component={Link} to="/app/conversacion"
                                selected={'/app/conversacion' === location.pathname}
                            >
                                <ListItemIcon> <Forum /> </ListItemIcon>
                                <ListItemText primary='Conversaci??n'></ListItemText>
                            </MenuItem>
                            <MenuItem
                                button
                                key='Sobre Nosotrxs'
                                component={Link} to="/app/sobrenosotrxs"
                                selected={"/app/sobrenosotrxs" === location.pathname}
                            >
                                <ListItemIcon> <Group /> </ListItemIcon>
                                <ListItemText primary='Sobre Nosotrxs'></ListItemText>
                            </MenuItem>
                        </List>

                    </div>
                </Drawer>
            </Hidden>


        </div>
    );
}



export default NavBar;
