import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, AppBar, Box, Toolbar } from '@mui/material';

import '../../App.css';

export const SystemsTemplate = (props) => {

    const symptomTemplate = props.symptomList.map((symptom) => (
        <Button
        variant="contained"
        component={Link} to={symptom.link}
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
        {symptom.name}
      </Button>
    ))

    return (
        <Grid container spacing={5} justifyContent="center" >
            <Grid item xs={12}>
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style = {{background: '#2E3B55'}}>
                    <Toolbar>
                        <Typography variant="header" component="div" className = "systemHeading" 
                            sx={{ 
                            flexGrow: 2,
                            }}>
                            {props.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
                </Box>
            </Grid>
        <Grid item xs={3.5}>
        <img src = {props.photo} key = {props.photo} alt="Main Page Photo" className = "widthSet"/>
        </Grid>
        <Grid item xs={3.5}>
            {symptomTemplate}
        </Grid>
    </Grid>
    );
}