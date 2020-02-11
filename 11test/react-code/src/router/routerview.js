import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
export default function RouterView(props){
    return <Switch>
        {
            props.routers.map((item,index)=>{
                if(!item.path) return <Redirect key={index} from={item.from} to={item.to}></Redirect>
            return <Route key={index} path={item.path} render={prop =><item.component {...prop} routers={item.children}/>}></Route>
            })
        }
    </Switch>
}