import React from 'react'
import {Table,Tag ,Input,Button} from 'antd'
const { Search } = Input
class List extends React.Component{
    state={
        list:[],
        columns:[
            {
                title:'ID',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'角色', 
                dataIndex:'role',
                key:'role'
            },
            {
                title:'操作', 
                dataIndex:'opr',
                key:'opr',
                render:(value,item,key)=>{
                    return <div>
                        <Tag onClick={()=>{this.deleteFun(item.id)}}>删除</Tag>
                    </div>
                }
            },

        ],
        searchVal: ''
    }
    initData = async () =>{
        let res = await this.$http('get','/role/list')
        if(res.data.code === 200){
            this.setState({
                list:res.data.data
            })
            return
        }
        alert(res.data.msg)
    }
   async deleteFun(id){
    const {$http} = this
    if(window.confirm('确认要删除吗？')){
        const res = await $http('delete','/role/delete',{id})
        const {code,msg}  = res.data
        alert(msg)
        if(code === 200 ) this.initData()  
    }

    }
    componentDidMount=()=>this.initData()
    render() {
        const {list,columns,searchVal} = this.state
        return <div>
             <Search placeholder="请输入关键字" onSearch={value=>this.setState({searchVal:value})} style={{ width: 200 }} />
                <span style={{ float: 'right' }}><Button type="danger" onClick={()=>this.props.history.push('/home/addrole')}>添加角色</Button></span>
             <Table columns={columns} dataSource={list.filter(item=>item.role.indexOf(searchVal) !== -1)} rowKey={item=>item.id}/>
        </div> 
    }
}
export default List