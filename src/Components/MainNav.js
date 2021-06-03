import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: 500,
    position:'fixed',
    bottom:0,
    zIndex:100
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
      label="Trending"
       icon={<WhatshotIcon />} />

      <BottomNavigationAction
       label="Movies"
        icon={<MovieIcon />} />

         <BottomNavigationAction
       label="TV Series"
        icon={<TvIcon  />} />

      <BottomNavigationAction 
      label="Search" 
      icon={<SearchIcon />} />
    </BottomNavigation>

    
  );
}
