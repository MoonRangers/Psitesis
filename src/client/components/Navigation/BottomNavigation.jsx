import React from 'react';
import {Group, Book, Forum, Home} from '@material-ui/icons/';
import { Hidden, BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import {Link} from 'react-router-dom'


export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Hidden mdUp>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        >
          
            <BottomNavigationAction  label="Home" icon={<Home />} component={Link} to="/" />
            <BottomNavigationAction  label=" Tesis" icon={<Book />} component={Link} to="/guiadetesis" />
            <BottomNavigationAction  label="Conversación" icon={<Forum />} component={Link} to="/conversacion"  />
            <BottomNavigationAction  label=" Nosotrxs" icon={<Group />} component={Link} to="/sobrenosotrxs"  />
          
        </BottomNavigation>
    </Hidden>
  );
}