import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/NavigationComponents/Home';
import Team from './Components/NavigationComponents/Team';
import Services from './Components/NavigationComponents/Services';
import CurrentProjects from './Components/NavigationComponents/CurrentProjects';
import Meetings from './Components/NavigationComponents/Meetings';
import Resources from './Components/NavigationComponents/Resources';

import LandingImage from'./Images/LandingImage.png';

import './Styles/App.css';

const App = () => {
  return(
    <Router>
      <Header/>
      <div className="LandingImage">
      <img className="Image" src={LandingImage} alt="LandingImage" />
    </div>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/services" component={Services} />
        <Route path="/currentProjects" component={CurrentProjects} />
        <Route path="/meetings" component={Meetings} />
        <Route path="/resources" component={Resources} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
