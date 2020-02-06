import React, { Component } from 'react'
import {Input,Button,Select} from 'antd'
const {Option} = Select
export default class Adduser extends Component {
    isType =()=>{
       
        let stateObj   = {
            rolelist:[],
            id:null,
            user:'',
            pwd:'',
            url:'/user/add',
            role:'student'
        };
        let typeObj    = this.props.location.item
        console.log(this.props)
        if(typeObj){
            stateObj.id   = typeObj.id
            stateObj.user = typeObj.user
            stateObj.pwd  = typeObj.pwd
            stateObj.role = typeObj.role
            stateObj.url  = '/user/edit'
        }
        return stateObj
        
    }
    state = this.isType();

    render() {
        const {rolelist,id,user,pwd} = this.state
        return (
            <div>
                <div>ID:{id===null?'暂无id':id}</div>
                <div>账号:<Input defaultValue={user} ref="user" type="text"/></div>
                <div>密码:<Input defaultValue={pwd} ref="pwd"  type="text"/></div>
                <div>
                    角色: <Select defaultValue="student" style={{ width: 120 }} onChange={value=>this.setState({role:value})}>
                           {
                                rolelist.map(item=>{
                                    return <Option key={item.id} value={item.role}>{item.role}</Option>
                                })
                            } 
                        </Select>
                </div>
                <Button onClick={()=>this.submitData()}>提交</Button>
            </div>
        )
    }
    componentDidMount=()=>this.initRole()

    async initRole(){
        const {$request} = this
        let res = await $request('get','/role/list')
        const {code,msg,data} = res.data
        if(code === 0){
            this.setState({rolelist:data.list})
        }
    }

    async submitData(){
        let subData = {
            id:this.state.id,
            user:this.refs.user.input.value,
            pwd:this.refs.pwd.input.value,
            role:this.state.role
        }
        //校验非空

        //接口请求
        const {$http} = this;
        const {url}      = this.state;
        let res          = await $http('post',url,subData);
        const {msg}      = res.data;
        alert(msg);
    }
}
