import './App.css';
import { Link } from "react-router-dom";
import { Symptom } from './components/Symptom';
import { Button } from '@mui/material'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button
        component={Link} to="/Symptom"
        > Bro </Button>
      <li>
        <Link to="/Symptom">Symptoms</Link>
      </li>
    </div>
  );
}

export default App;