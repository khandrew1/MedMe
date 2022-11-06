import './App.css';
import React, { useState } from 'react';
import{ Button, Typography, Grid,} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
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
        textAlign: 'center',
        bgcolor: '#2E3B55',
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
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style = {{background: '#2E3B55'}}>
              <Toolbar>
                <Typography variant="header" component="div" className = "heading" 
                  sx={{ 
                  flexGrow: 2,
                }}>
              MedMe
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
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