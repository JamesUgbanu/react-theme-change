import React, { useState } from 'react';
import {
  ThemeProvider
} from '@material-ui/core';
import TopNav from './TopNav';
import { createTheme } from './Theme';
import Home from './Home';
import { THEMES } from './constants';


const App = () => {
  const [themeState, setThemeState] = useState({
    mode: 'LIGHT'
  });


  const toggle = () => {
    const mode = themeState.mode === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setThemeState({ ...themeState, mode: mode });
  };


  const theme = createTheme({
    theme: themeState.mode
  });


  return (
    <ThemeProvider theme={theme}> 
      <TopNav toggle={toggle} themeState={themeState}/>
      <Home />
    </ThemeProvider>
  );
};

export default App;
