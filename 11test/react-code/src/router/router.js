
import Home from '../views/home';
import Log from '../views/log';
import Register from '../views/register'
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
        from:"/",
        to:"/log"
    }
]
export default RouterRoot
