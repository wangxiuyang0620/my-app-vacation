import {createStore} from 'redux';
let initState ={
    list:[]
}
let reducer =(state,options)=>{
    if(options.type === "CHANGE_LIST"){
        state.list = [...options.list]
    }
    return{...state}
}
let store = createStore(reducer,initState)
export default store