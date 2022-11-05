import './App.css';
import { Link } from "react-router-dom";
import { Symptom } from './components/Symptom';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <li>
        <Link to="/Symptom">Symptoms</Link>
      </li>
    </div>
  );
}

export default App;