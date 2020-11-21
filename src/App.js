import React, { useState } from 'react';
import {
  ThemeProvider
} from '@material-ui/core';
import TopNav from './TopNav';
import { createTheme } from './Theme';
import Home from './Home';


const App = () => {
  const [themeState, setThemeState] = useState({
    mode: 'LIGHT'
  });


  const toggle = () => {
    const mode = themeState.mode === 'LIGHT' ? 'DARK' : 'LIGHT';
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
