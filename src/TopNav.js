import React from 'react';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Tooltip,
  makeStyles,
} from '@material-ui/core';
import { Menu as MenuIcon, Sun as LightIcon, Moon as DarkIcon } from 'react-feather';
import { THEMES } from './constants';


const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main
    } : {},
    ...theme.name === THEMES.DARK ? {
      backgroundColor: theme.palette.background.default
    } : {},
    color: '#fff'
  },
  toolbar: {
    minHeight: 75,
  },
}));

const App = ({ toggle, themeState }) => {
  const classes = useStyles();
  
  return (
        <AppBar className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <Hidden lgUp>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Box ml={2} flexGrow={1} />
            <Box ml={2}>
              <Tooltip title={themeState.mode !== 'LIGHT' ? "Light mode" : "Dark mode"}>
                <IconButton
                  color="inherit"
                  onClick={toggle}
                >
                  {themeState.mode === 'LIGHT' ? <DarkIcon /> : <LightIcon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
  );
};


export default App;