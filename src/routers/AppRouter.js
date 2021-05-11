import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFonud from '../components/NotFonud';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/create" component={AddExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFonud} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;