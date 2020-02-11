import React from 'react'
import { Input, Button } from 'antd'
class Log extends React.Component {
    async login() {
        let user = this.refs.user.input.value;
        let pwd = this.refs.pwd.input.value;
        if (user === '') {
            alert('用户名不能为空')
            return
        }
        if (pwd === '') {
            alert('密码不能为空')
            return
        }
        let res = await this.$http('post', '/login', { user, pwd })
        alert(res.data.msg)
        if (res.data.code === 1) {
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('user', user)
            this.props.history.push('/home')
        }
    }
    render() {
      
        return (
            <div className='log'>
                <Input ref='user' placeholder="请输入用户名" />
                <Input ref='pwd' placeholder="请输入密码" />
                <Button type="primary" onClick={()=>{this.login()}}>登录</Button>
                <p onClick={()=>this.props.history.push('/register')}>没有账号,请注册</p>

            </div>
        )
    }
}
export default Log

