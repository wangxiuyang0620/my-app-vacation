import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../views/login'
import Home from '../views/home'
import Lazyimg from '../views/lazyimg'
function RouterRoot() {
    return <BrowserRouter>
        <Switch>
        <Route path='/lazyimg' component={Lazyimg}/>
            <Route path='/login' component={Login}/>
            <Route path='/home' component={Home}/>
            <Redirect from='/' to='/login'/>
        </Switch>
    </BrowserRouter>
}
export default RouterRoot