import React from 'react';
import {Group, Book, Forum, Home} from '@material-ui/icons/';
import { Hidden, BottomNavigation, BottomNavigationAction } from '@material-ui/core';


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
            <BottomNavigationAction  label="Home" icon={<Home />}/>
            <BottomNavigationAction  label="Guía de tesis" icon={<Book />} />
            <BottomNavigationAction  label="Conversación" icon={<Forum />} />
            <BottomNavigationAction  label="Sobre nosotrxs" icon={<Group />} />
        </BottomNavigation>
    </Hidden>
  );
}