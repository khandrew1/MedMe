import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import digestPhoto from '../../images/Digestive.png';
import { AppBar, Box, Toolbar } from '@mui/material';

import AdvilPhoto from '../../images/MedicineImages/Advil.png';


import '../../App.css';

export const MedicineTemplate = (props) => {

    return (
    <Grid container spacing={5} justifyContent="center" className = "box" >
        <Grid item xs = {12}>
            <Box sx={{borderColor: 'text.primary'}}>
                <AppBar position="static" style = {{background: '#2E3B55'}}>
                    <Toolbar>
                        <Typography variant="header" component="div" className = "heading" 
                            sx={{ 
                            flexGrow: 2,
                            }}>
                                Medicine
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </Grid>

        <Grid item xs={3.5}>
            <Box sx = {{
                width:300,
                height:300
            }}>
                <img src = {AdvilPhoto} key = {props.photo} alt="Main Page Photo" className = "widthSet"/>
            </Box>
    
        </Grid>

        <Grid item xs={3.5}>
            <Box sx={{ 
                flexGrow: 1, 
                borderColor: 'text.primary',
                width:300,
                height:300
                }}>
                    <Toolbar>
                        <Typography variant="header" component="div" className = "medicineNames" 
                            sx={{ 
                                flexGrow: 2,
                                }}>
                                Advil
                        </Typography>
                    </Toolbar>
            </Box>
        </Grid>
    </Grid>
    );
}