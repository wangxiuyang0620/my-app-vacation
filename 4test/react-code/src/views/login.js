import React from 'react';
import { Icon, Input, Button } from 'antd'
class Login extends React.Component {
   async login(){
        let username = this.refs.user.input.value
        let password = this.refs.pwd.input.value
        if(username === ''){
            alert('用户名不能为空')
            return
        }
        if(password === ''){
            alert('密码不能为空')
            return
        }
        console.log(username,password)
        let res = await this.$http('post','/login',{username,password})
        alert(res.data.msg)
        if(res.data.code === 200){
        localStorage.setItem('token',res.data.data.token)
        localStorage.setItem('username',username)
        this.props.history.push('/home')
        }

    }
    render() {
        return (
            <div className="login">

                <Input ref="user" prefix={<Icon type="user" />} placeholder="Username" />
                <Input ref="pwd" prefix={<Icon type="lock" />} type="password" placeholder="Password" />
                <Button type="primary" block onClick={() => this.login()}>Log in</Button>
            </div>
        )
    }
}
export default Login