import React, { useState,useEffect } from "react";

import InputBase from '@material-ui/core/InputBase'
import {withStyles,fade } from '@material-ui/core/styles'


const InputBox1 = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: "#D8D1CB",
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 150,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
}))(InputBase);

export default InputBox1;