import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Finish from './pages/Finish';
 
export default function Routes() {
 return (
   <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/finish' exact component={Finish} />
   </Switch>
 );
}