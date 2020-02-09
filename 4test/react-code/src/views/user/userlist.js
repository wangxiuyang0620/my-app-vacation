import React from 'react'
import { Table, Tag, Input, Modal, Button } from 'antd';
const { Search } = Input
class Userlist extends React.Component {
    state = {
        columns: [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '用户名',
            dataIndex: 'user',
            key: 'user',

        },
        {
            title: '密码',
            dataIndex: 'pwd',
            key: 'pwd',
        }, {
            title: '用户角色',
            dataIndex: 'role',
            key: 'role'
        }, {
            title: '操作',
            key: 'action',
            render: (value, item, key) => {
                return <div>
                    <Tag onClick={() => this.setState({visible:true,item:item})}>查看</Tag>
                    <Tag onClick={()=>this.props.history.push({pathname:"/home/adduser",item:item})}>编辑</Tag>
                    <Tag onClick={()=>this.deleteFunc(item.id)}>删除</Tag>
                </div>
            },
        },
        ],
        list: [],
        searchVal: '',
        visible: false,
        item:{}
    }
   
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    async initData() {
        let data = await this.$http('get', '/user/list')
        if (data.data.code === 200) {
            this.setState({
                list: data.data.data
            })
            return
        }
        alert(data.data.msg)
    }
    async deleteFunc(id){
        const {$http} = this
        if(window.confirm('确认要删除吗？')){
            const res = await $http('delete','/user/delete',{id})
            const {code,msg}  = res.data
            alert(msg)
            if(code === 200 ) this.initData()  
        }
    }
    componentDidMount = () => this.initData()
    render() {
        const { columns, list, searchVal ,item,visible} = this.state
        return (
            <div>
                <Search placeholder="请输入关键字" onSearch={value => this.setState({ searchVal: value })} style={{ width: 200 }} />
                <span style={{ float: 'right' }}><Button type="danger" onClick={() => this.props.history.push('/home/adduser')}>添加用户</Button></span>
                <Table columns={columns} dataSource={list.filter(item => item.user.indexOf(searchVal) !== -1)} rowKey={item => item.id} />
                <div>
                    <Modal
                        title="系统提示"
                        visible={visible}
                        onCancel={this.handleCancel}
                        footer={[<Button key="back" onClick={()=>this.setState({visible: false})}>关闭</Button>]}>
                        
                        <p>ID    : {item.id}</p>
                        <p>用户名 :{item.user}</p>
                        <p>密码   :{item.pwd}</p>
                        <p>角色   :{item.role}</p>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default Userlist




