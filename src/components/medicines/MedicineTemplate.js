import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import digestPhoto from '../../images/Digestive.png';

import '../../App.css';

export const MedicineTemplate = (props) => {



    return (
    <Grid container spacing={5} justifyContent="center" >
        <Grid item xs={3.5}>
        <img src = {digestPhoto} key = {props.photo} alt="Main Page Photo" className = "widthSet"/>
        </Grid>
        <Grid item xs={3.5}>
            placeholder
        </Grid>
    </Grid>
    );
}