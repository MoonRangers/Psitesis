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
            textAlign: 'center',
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
    }));

    const classes = useStyles();

     const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    }; 

    /* const [categoryURL, setCategoryURL] = React.useState({categoryURL: ''}) */

/*     let location = useLocation();


    console.log('location: ', location.pathname) */
    

    return (
        <div className={classes.root}>
            <AppBar position="relative" className={classes.appBar}>
                <Toolbar >
                    <Typography variant="h4" className={classes.title}>
                        PsiTesis
                </Typography>
                </Toolbar>
            </AppBar>
            <Hidden only="xs">
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
                        <List >
                            <MenuItem 
                            button 
                            key='Home' 
                            component={Link} to="/" 
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                            >
                                <ListItemIcon> <Home /> </ListItemIcon>
                                <ListItemText primary='Home'></ListItemText>
                            </MenuItem>
                            <MenuItem 
                            button 
                            key='Guía de tesis'
                            component={Link} to="/guiadetesis"
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                            >
                                <ListItemIcon> <Book /> </ListItemIcon>
                                <ListItemText primary='Guía de tesis'></ListItemText>
                            </MenuItem>
                            <MenuItem 
                            button 
                            key='Conversación'
                            component={Link} to="/conversacion"
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                            >
                                <ListItemIcon> <Forum /> </ListItemIcon>
                                <ListItemText primary='Conversación'></ListItemText>
                            </MenuItem>
                            <MenuItem 
                            button 
                            key='Sobre Nosotrxs'
                            component={Link} to="/sobrenosotrxs"
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
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
