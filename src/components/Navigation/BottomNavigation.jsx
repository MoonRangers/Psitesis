import React from 'react';
import { Group, Book, Forum, Home } from '@material-ui/icons/';
import { Hidden, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom'


export default function BottomNav() {
  const location = useLocation();

  return (
    <Hidden mdUp>
      <BottomNavigation
        value={location.pathname}
      >

        <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" value="/" />
        <BottomNavigationAction label=" Tesis" icon={<Book />} component={Link} to="/guiadetesis" value="/guiadetesis" />
        <BottomNavigationAction label="Conversación" icon={<Forum />} component={Link} to="/conversacion" value="/conversacion" />
        <BottomNavigationAction label=" Nosotrxs" icon={<Group />} component={Link} to="/sobrenosotrxs" value="/sobrenosotrxs" />

      </BottomNavigation>
    </Hidden>
  );
}