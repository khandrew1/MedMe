import './App.css';
import React, { useState } from 'react';
import{ Button, Typography, Grid} from '@mui/material'
import { Link } from "react-router-dom";
import { NextButton } from "./components/NextButton";
import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import mainPagePhoto from './images/mainPagePhoto.png';

function App(props) {

  const currentPic = mainPagePhoto;

  const [toggle, setToggle] = useState(currentPic);
  const [key, setKey] = useState(false);

  const bodySystemsList = props.bodySystemsData.map((system) => (
  <Button
    variant="contained"
    component={Link} to={system.name}
    sx = {{
        bgcolor: 'primary.main',
        boxShadow: 8,
        borderRadius: 19,
        p: 1,
        minWidth: 300,
        maxWidth: 300,
        margin: 1,
        whiteSpace: 'normal',
    }} 
  >
    {system.name}
  </Button>
  ));

  return (
    <div className="App">
      
      <Grid container spacing={5} justifyContent="center" >
        <Grid item xs={12}>
          <Typography variant="h1" className = "heading" >MedMe</Typography>
        </Grid>
        <Grid item xs={3.5}>
          <img src = {currentPic} key = {currentPic} alt="Main Page Photo" className = "widthSet"/>
        </Grid>
        <Grid item xs={3.5}>
          {bodySystemsList}
        </Grid>
      </Grid>

    </div>
  );
}

export default App;