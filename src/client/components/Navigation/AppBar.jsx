import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {Group, Book, Forum, Home} from '@material-ui/icons/';
import { Hidden, ListItemText, MenuItem } from '@material-ui/core';

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

        drawer: {
            width: drawerWidth,
            flexShrink: 0,
          },
          drawerPaper: {
            width: drawerWidth,
            backgroundColor:"#861c55"
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

    return (
        <div className={classes.root}>
        <AppBar position="top" className={classes.appBar}>
            <Toolbar >
                <Typography variant="h4" className={classes.title}>
                    PsiTesis
                </Typography>
            </Toolbar>
        </AppBar>
        <Hidden only="xs">
            <Drawer
            className={classes.drawer}
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
                <MenuItem button key='Home'>
                    <ListItemIcon> <Home/> </ListItemIcon>
                    <ListItemText primary='Home'></ListItemText>
                </MenuItem>
                <MenuItem button key='Guía de tesis'>
                    <ListItemIcon> <Book/> </ListItemIcon>
                    <ListItemText primary='Guía de tesis'></ListItemText>
                </MenuItem>
                <MenuItem button key='Conversación'>
                    <ListItemIcon> <Forum/> </ListItemIcon>
                    <ListItemText primary='Conversación'></ListItemText>
                </MenuItem>
                <MenuItem button key='Sobre Nosotrxs'>
                    <ListItemIcon> <Group/> </ListItemIcon>
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
