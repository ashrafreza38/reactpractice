import React from 'react';
//import 'App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import PassValue from './components/pages/PassValue';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';
//import { useContext } from 'react';


function App() {
  return (    
    <div className="App">

    <Router>   
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/PassValue" component={PassValue}></Route>
        <Route exact path="/users/AddUser" component={AddUser}></Route>
        <Route exact path="/users/ViewUser/:id" component={ViewUser}></Route>
        <Route exact path="/users/EditUser/:id" component={EditUser}></Route>        
        <Route component={NotFound}></Route>
      </Switch>

    </Router>
    
    </div>    
      
      
    
  );
}

export default App;
