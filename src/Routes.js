import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminRoute from './auth/AdminRoute'
import PrivateRoute from './auth/PrivateRoute'
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Dashboard from './user/userDashboard'
import AdminDashboard from './user/AdminDashboard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component = {Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component = {AdminDashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
