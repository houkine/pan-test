import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import {DirectionsIcon, FullscreenExit} from '@material-ui/icons'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import LinearProgress from '@material-ui/core/LinearProgress'
import GavelIcon from '@material-ui/icons/Gavel';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  container:{
    display:'flex',
    backgroundColor:'#D8D1CB',
    padding:5,
  },

  root: {
    alignItems: 'center',
    width:250,
    height:50,
    borderRadius: 10,
    backgroundColor:'#F5F3F2',
    borderWidth:0,
    margin:10,
  },
  input: {
    marginLeft:50,
    width:120,
    fontSize:16,
  },
  current_root: {
    alignItems: 'center',
    width:250,
    borderRadius: 10,
    backgroundColor:'#F5F3F2',
    borderWidth:0,
    margin:10,
    height:60,
  },
  current_input: {
    marginLeft:50,
    width:150,
    fontSize:16,
    color:'#0070C3',
  },
}));

export default function ProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <InputBase
          className={classes.input}
          value="Plan Discussion"
          disabled
        />
        <IconButton color="default" className={classes.iconButton}>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </div>
      <div className={classes.current_root}>
        <div>
          <InputBase
            className={classes.current_input}
            value="Pre Development"
            disabled
          />
          <IconButton color="default" className={classes.iconButton}>
            <AccountBalanceIcon color="primary"/>
          </IconButton>
        </div>
        <div>
          <LinearProgress variant="determinate" value="15" />
        </div>
      </div>
      <div className={classes.root}>
        <InputBase
          className={classes.input}
          value="Development"
          disabled
        />
        <IconButton color="default" className={classes.iconButton}>
          <GavelIcon />
        </IconButton>
      </div>
      <div className={classes.root}>
        <InputBase
          className={classes.input}
          value="Post-Development"
          disabled
        />
        <IconButton color="default" className={classes.iconButton}>
          <HomeIcon />
        </IconButton>
      </div>
    </div>
    
  );
}
