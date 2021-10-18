import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import NavBar from './Components/Home/NavBar/NavBar';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
