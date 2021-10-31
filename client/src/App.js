import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';
import SuperAdminRoute from './auth/SuperAdminRouter';
import AdminRoute from './auth/AdminRoute';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AuthContextProvider from './contexts/AuthContect';
import Normalusers from './Normalusers/Normalusersscreen';
import Financialadmin from "./Financialadmins/Financialadmin";
import SuperAdmin from './SuperAdmin';




const Routes = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
          <Switch>
              <PublicRoute path="/signin" exact component={Signin} />
              <PublicRoute path="/signup" exact component={Signup} />
              <PublicRoute path="/" exact component={Home} />
              <AdminRoute path="/admin/dashboard" exact component = {Financialadmin} />
              {/* <PrivateRoute path="/user/dashboard" exact component={OrgUsers} />  */}
              <SuperAdminRoute path="/superadmin/dashboard" exact component={SuperAdmin} />                
          
              <PrivateRoute path="/user/dashboard" exact component={Normalusers} /> 
              {/* <PrivateRoute path="/user/profile" exact component={UserProfile} />  */}
              </Switch>     
      </BrowserRouter>
    </AuthContextProvider>
      
  );
};

function App() {
  return (
       <Routes/>
  );
}

export default App;
