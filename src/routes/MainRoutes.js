import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import NearestAttractions from '../pages/NearestAttractions/NearestAttractions';

const MainRoutes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/'>
               <Redirect to='/dashboard' />
            </Route>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route
               exact
               path='/nearest-attractions'
               component={NearestAttractions}
            />
         </Switch>
      </BrowserRouter>
   );
};

export default MainRoutes;
