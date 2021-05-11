import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFonud from '../components/NotFonud';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/create" component={AddExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route component={NotFonud} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;