import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { login, startLogin } from '../actions/auth';
import { LoginScreen } from '../pages/Login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {logged} = useSelector(state => state.auth);
    console.log(logged);

    const dispatch = useDispatch();
    useEffect(() => {
       const user = localStorage.getItem('user') || null;
       const token = localStorage.getItem('token') || null;
       if(user && token){
            dispatch(login(user));
       }

    }, [dispatch]);
    
    return (
        <Router>
      <div>
        <Switch>
            <PublicRoute path="/login" component={LoginScreen} isAuthenticated={logged}/>
            <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={logged}/>
        </Switch>
      </div>
    </Router>
    )
}
