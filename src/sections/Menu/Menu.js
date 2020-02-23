import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from 'react-router-dom';

import Links from './Links'
import Routine from '../../components/Routine/Routine';
import Header from '../Header/Header';
  
const Menu = () => {
    return(
        <BrowserRouter>
            <Links></Links>
            <Switch>
              <Route exact path="/" 
                     component={Header}>
              </Route>
              <Route path="/aboutus"
                     component={null}>
              </Route>
              <Route exact path="/dashboard"
                     component={Routine}></Route>
            </Switch>
      </BrowserRouter>
    )
}

export default Menu;