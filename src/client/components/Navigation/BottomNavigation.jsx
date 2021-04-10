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
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          component={Link}
          to="/app"
          value="/app"
        />
        <BottomNavigationAction
          label=" Tesis"
          icon={<Book />}
          component={Link}
          to="/app/guiadetesis"
          value="/app/guiadetesis"
        />
        <BottomNavigationAction
          label="Conversación"
          icon={<Forum />}
          component={Link}
          to="/app/conversacion"
          value="/app/conversacion"
        />
        <BottomNavigationAction
          label=" Nosotrxs"
          icon={<Group />}
          component={Link}
          to="/app/sobrenosotrxs"
          value="/app/sobrenosotrxs"
        />
      </BottomNavigation>
    </Hidden>
  );
}