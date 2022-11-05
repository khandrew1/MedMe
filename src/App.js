import './App.css';
import{ Button, Typography, Box } from '@mui/material'
import { Link } from "react-router-dom";
import { Symptom } from './components/Symptom';
import { green } from '@mui/material/colors';

function App(props) {

  const bodySystemsList = props.bodySystemsData.map((system) => (
  <Button
    variant="contained"
    component={Link} to={system.name}
  >
    {system.name}
  </Button>
  ));

  return (
    <div className="App">
      <Box sx={{ width: '100%', maxWidth: 10000 }}>
      <Typography variant="h4" className = "heading" >MedMe</Typography>

        {bodySystemsList}

      </Box>
    </div>
  );
}

export default App;