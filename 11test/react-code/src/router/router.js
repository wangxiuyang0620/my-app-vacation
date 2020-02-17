
import Home from '../views/home';
import Log from '../views/log';
import Count from '../views/count'
import Add from '../views/add';
import Item from '../views/item'
const RouterRoot =[
    {
        path:"/log",
        name:"log",
        component:Log
    },{
        path:"/count",
        name:"count",
        component:Count
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
