
import Home from '../views/home';
import Log from '../views/log';
import Register from '../views/register'
import Add from '../views/add';
import Item from '../views/item'
const RouterRoot =[
    {
        path:"/log",
        name:"log",
        component:Log
    },{
        path:"/register",
        name:"register",
        component:Register
    },{
        path:"/home",
        name:"home",
        component:Home
    },{
        path:"/add",
        name:"add",
        component:Add
    },{
        path:"/item",
        name:'item',
        component:Item
    },{
        from:"/",
        to:"/log"
    }
]
export default RouterRoot
