import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from 'react-router-dom';

import Links from './Links'
import Routine from '../../components/Routine/Routine';
import AboutUs from '../AboutUs/AboutUs';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
  
const Menu = () => {
    return(
        <BrowserRouter>
            <Links></Links>
            <Switch>
              <Route exact path="/" 
                     component={Home
                                }>
              </Route>
              <Route path="/aboutus"
                     component={AboutUs}>
              </Route>
              <Route exact path="/dashboard"
                     component={Routine}></Route>
              <Route path="/prueba"
                    component={Dashboard}>

              </Route>
            </Switch>
      </BrowserRouter>
    )
}

export default Menu;