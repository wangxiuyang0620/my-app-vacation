
import Home from '../views/home';
import Log from '../views/log';
import Register from '../views/register'
import Add from '../views/add';
const RouterRoot =[
    {
        path:"/log",
        component:Log
    },{
        path:"/register",
        component:Register
    },{
        path:"/home",
        component:Home
    },{
        path:"/add",
        component:Add
    },{
        from:"/",
        to:"/log"
    }
]
export default RouterRoot
