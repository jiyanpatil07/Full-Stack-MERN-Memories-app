import React from 'react'
import useStyles from "./styles"
import { ThemeProvider } from '@mui/material/styles';
const  Form=() =>{
    const classes = useStyles();
  return (
    <>
    <ThemeProvider>
    <div>Form</div>
    </ThemeProvider>
    </>
  )
}

export default Form