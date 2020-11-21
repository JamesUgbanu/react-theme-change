import React from 'react';
import {
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100%'
  },
}));

const Home = ({className, ...rest}) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>       
    </div>
  );
};

export default Home;
