import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Favorite from './components/Favorite';
import Nav from './components/Nav';


export default class App extends React.Component { 

  render() {
    return (
      <div>
         <Router>
          <Nav/>  
    <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/Favorite" component={Favorite}/>
     </Switch>
    </Router>
      </div>
    )
  }
}


