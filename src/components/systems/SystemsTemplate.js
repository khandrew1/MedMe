import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';

export const SystemsTemplate = (props) => {

    const symptomTemplate = props.symptomList.map((symptom) => (
        <Button
        variant="contained"
        component={Link} to={symptom.name}
        sx = {{
            bgcolor: 'primary.main',
            boxShadow: 8,
            borderRadius: 19,
            p: 1,
            minWidth: 300,
            maxWidth: 300,
            margin: 1,
            whiteSpace: 'normal'
        }}
      >
        {symptom.name}
      </Button>
    ))

    return (
        <Grid container spacing={5} justifyContent="center" >
        <Grid item xs={12}>
        <Typography variant="h1" className = "heading" >{props.name} System</Typography>
        </Grid>
        <Grid item xs={3.5}>
            Photo Placeholder
        </Grid>
        <Grid item xs={3.5}>
            {symptomTemplate}
        </Grid>
    </Grid>
    );
}