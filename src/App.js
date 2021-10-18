import { BrowserRouter as Router, Switch,  } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Home/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
