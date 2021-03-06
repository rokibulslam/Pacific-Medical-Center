import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Appoinment from './Components/Appoinment/Appoinment';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home/Home';
import NavBar from './Components/Home/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import SignIn from './Components/User/SignIn/SignIn';
import SignUp from './Components/User/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/appoint">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <PrivateRoute path="/experience">
              <Experience></Experience>
            </PrivateRoute>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
