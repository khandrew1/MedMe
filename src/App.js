import './App.css';
import{ Button, Typography, Grid} from '@mui/material'
import { Link } from "react-router-dom";
import { Symptom } from './components/Symptom';
import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

function App(props) {

  const bodySystemsList = props.bodySystemsData.map((system) => (
  <Button
    variant="contained"
    component={Link} to={system.name}
    sx = {{
        bgcolor: 'primary.main',
        boxShadow: 8,
        borderRadius: 19,
        p: 2,
        minWidth: 300,

    }}
  >
    {system.name}
  </Button>
  ) 
  );
  return (

    <div className="App">
      
      <Grid container spacing={5} justifyContent="center" >
        <Grid item xs={12}>
          <Typography variant="h1" className = "heading" >MedMe</Typography>
        </Grid>
        <Grid item xs={3.5}>
          <img src = "https://img.favpng.com/7/2/8/human-anatomy-human-body-nervous-system-illustration-png-favpng-JWdvkggrxPxrQyvbGvH1ivQjC.jpg" alt="Main Page Photo" width = "300" height = "300"/>
        </Grid>
        <Grid item xs={3.5}>
          {bodySystemsList}
        </Grid>
      </Grid>
        

    </div>
  );
}

export default App;