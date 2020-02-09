import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Log from '../views/log'
import Home from '../views/home/home'
class RouterRoot extends React.Component{
    render() {
        return(
            <BrowserRouter>
            <Switch>
            <Route path='/log' component={Log}/>
            <Route path='/home' component={Home}/>
            <Redirect from='/' to='/log'/>
            </Switch>
            </BrowserRouter>
        )
    }
}
export default RouterRoot