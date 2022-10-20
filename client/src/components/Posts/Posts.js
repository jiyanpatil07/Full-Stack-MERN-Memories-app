import React from 'react'
import Post from "./Post/Post"
import useStyles from "./styles"
import { ThemeProvider } from '@mui/material/styles';

const  Posts=() =>{
    const classes = useStyles();
  return (
    <>
     <ThemeProvider>

     
    <div>Posts</div>
            <Post/>
            <Post/>
            </ThemeProvider>
    </>


  )
}

export default Posts