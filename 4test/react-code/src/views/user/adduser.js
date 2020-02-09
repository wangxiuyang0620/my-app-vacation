import React from 'react'
import { Input, Button, Select } from 'antd'
const { Option } = Select
class Adduser extends React.Component {
  isType=()=>{
      let stateObj ={
         id:null,
         role:"student",
         user:'',
         pwd:"",
         url:"/user/add",
         rolelist:[]
      }
      let typeObj = this.props.location.item
      if(typeObj){
          stateObj.id = typeObj.id
          stateObj.user = typeObj.user
          stateObj.pwd = typeObj.pwd
          stateObj.role = typeObj.role
          stateObj.url = '/user/edit'
      }
      return stateObj
  }
  state =this.isType()
  async submit(){
      let subData={
       id:this.state.id,
       user:this.refs.user.input.value,
       pwd:this.refs.pwd.input.value,
       role:this.state.role
      }
      const {url} = this.state
      let data = await this.$http('post',url,subData)
      alert(data.data.msg)
      this.props.history.push('/home/userlist')
  }
  async initRole (){
      let res = await this.$http('get','/role/list')
      if(res.data.code === 200){
          this.setState({
              rolelist :res.data.data
          })
      }
  }
  componentDidMount=()=>this.initRole()
    render() {
        const {rolelist,id,user,pwd} = this.state
        return (
            <div>
                <div>ID:{id===null?'暂无id':id}</div>
                <div>账号:<Input defaultValue={user} ref="user" type="text" /></div>
                <div>密码:<Input defaultValue={pwd} ref="pwd" type="text" /></div>
                <div>
                    <Select
                        defaultValue="student"
                        style={{ width: 200 }}
                        onChange={value=>this.setState({role:value})}
                       
                    >
                        {
                            rolelist.map(item=>{
                            return  <Option key={item.id} value={item.role}>{item.role}</Option>
                            })
                        }
                       
                    </Select>
                </div>
                <Button onClick={()=>this.submit()}>提交</Button>
            </div>
        )
    }
}
export default Adduser








