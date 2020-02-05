import React, { Component } from 'react'
import {Table,Tag,Input,Button,Modal} from 'antd'
const {Search} = Input
class Userlist extends Component {
    state={
        searchVal:'',
        visible: false,
        item:{},
        list:[],
        columns:[
            {
                title:'用户ID',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'用户账号',
                dataIndex:'user',
                key:'user'
            },
            {
                title:'用户角色',
                dataIndex:'role',
                key:'role'
            },
            {
                title:'操作',
                dataIndex:'pwd',
                key:'pwd',
                render:(value,item,key)=>{
                    return <div>
                        <Tag onClick={()=>this.setState({visible: true,item:item})}>查看</Tag>
                        <Tag onClick={()=>this.$push({pathname:'/home/useradd',item})}>编辑</Tag>
                        <Tag onClick={()=>this.deleteFunc(item.id)}>删除</Tag>
                    </div>
                }
            }
        ]
    }
    
    componentWillMount =()=> this.$push = this.props.history.push;

    render() {
        const {list,columns,searchVal,visible,item} = this.state;
        return (
            <div className="user">
                {/* 搜索 */}

                {/* <Input placeholder="请输入关键字" value={searchVal} onChange={e => this.setState({searchVal:e.target.value})} style={{ width: 200 }}/> */}
                <Search placeholder="请输入关键字" onSearch={value => this.setState({searchVal:value})} style={{ width: 200 }}/>

                {/* 增加用户 */}
                <span style={{float:'right'}}><Button type="danger" onClick={()=>this.$push('/home/useradd')}>添加用户</Button></span>

                {/* 表单 */}
                <Table columns={columns} dataSource={list.filter(item=>item.user.indexOf(searchVal)!==-1)} rowKey={item=>item.id}/>

                {/* 查看弹层 */}
                <Modal title="系统提示" visible={visible}
                footer={[<Button key="back" onClick={()=>this.setState({visible: false})}>关闭</Button>]}>
                    <p>ID:{item.id}</p>
                    <p>账号:{item.user}</p>
                    <p>密码:{item.pwd}</p>
                    <p>角色:{item.role}</p>
                </Modal>

            </div>
        )
    }
    componentDidMount=()=>this.initData();

    //初始化列表数据
    async initData(){
        const {$http} = this
        let res = await $http('get','/user/list')
        const {code,msg,data} = res.data
        if(code === 0){
            this.setState({list:data.list})
            return 
        }
        alert(msg)
    }
    // 删除列表数据
    async deleteFunc(id){
        const {$http} = this
        if(window.confirm('确认要删除吗？')){
            const res = await $http('delete','/user/delete',{id})
            const {code,msg}  = res.data
            alert(msg)
            if(code === 0 ) this.initData()  
        }
    }
    

}

export default Userlist

