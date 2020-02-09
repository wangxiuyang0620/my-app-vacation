import React from 'react';
import { Icon, Input, Button, } from 'antd';
class Log extends React.Component {
    state = {
        isShow: true,

    }
    log(a) {
        this.setState({
            isShow: a
        })
    }
    async submit(a) {
        let user = this.refs.user.input.value
        let pwd = this.refs.pwd.input.value
        let url =this.state.isShow ? '/login':'/register'
        if (user.trim() === '') {
            alert('用户名不能为空')
            return
        }
        if (pwd.trim() === '') {
            alert('密码不能为空')
            return
        }
        let res = await this.$http('post', url, { user, pwd })
        alert(res.data.msg)
        if (res.data.code === 200) {
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('user', user)
            this.props.history.push('/home')

        }
        if(res.data.code===202){
           this.setState({
               isShow : a
           })
           console.log(this.state.isShow)
        }
    }
    render() {
        return (

            <div className='log'>
                <div>
                    <Input ref='user' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    <Input ref='pwd' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    <Button type="primary" className="login-form-button" onClick={() => this.submit(!this.state.isShow)}>{this.state.isShow ? '登录' : '注册'}</Button>
                    <p onClick={() => { this.log(!this.state.isShow) }}>{this.state.isShow ? '没有账号，请注册' : '已有账号，请登录'}</p>
                </div>

            </div>
        )
    }
}
export default Log

