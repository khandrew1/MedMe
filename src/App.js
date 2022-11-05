import './App.css';
import{ Button, Typography, Box } from '@mui/material'
import { Link } from "react-router-dom";
import { Symptom } from './components/Symptom';
import { green } from '@mui/material/colors';

function App() {


  return (
    <div className="App">
      <Box sx={{ width: '100%', maxWidth: 10000 }}>
        <Typography variant="h4" className = "heading" >MedMe</Typography>

        <Button variant="contained" href="">Skeletal</Button><br></br>
        <Button variant="contained" href="">Muscular</Button><br></br>
        <Button variant="contained" href="">Nervous</Button><br></br>
        <Button variant="contained" href="">Cardiovascular</Button><br></br>
        <Button variant="contained" href="">Respiratory</Button><br></br>
        <Button variant="contained" href="">Digestive</Button><br></br>
        <Button variant="contained" href="">Urinary</Button><br></br>
        <Button variant="contained" href="">Reproductive</Button><br></br>

      </Box>



    </div>
  );
}

export default App;