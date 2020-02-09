import React from 'react'
import { Tree,Input,Button } from 'antd';

const { TreeNode } = Tree;
class Addrole extends React.Component{
    state={
        menu:[],
        opr:[]
    }
    MenuCheck = checkKeys => this.setState({menu:checkKeys.filter(item=>item.indexOf('sub') === -1)})
    OprCheck = checkKeys => this.setState({opr:checkKeys.filter(item=>item.indexOf('opr') === -1)})
    submitFunc = async () => {
        const {menu,opr} = this.state;

        //提交的数据
        let subData = {
            rolename:this.refs.role.input.value,
            menu,
            opr
        }
        let res = await this.$http('post','/role/add',subData);
        alert(res.data.msg)
    }
    render(){
        return(
            <div>
                <div style={{marginBottom:30}}>
                    角色名称：<Input ref="role" placeholder="请输入角色名称"  style={{ width: 200 }}/>
                </div>
                <div style={{overflow:'hidden'}}>
                    {/* 菜单选择 */}
                    <div style={{with:300,float:'left',marginRight:100}}>
                        <Tree checkable defaultExpandAll={true} onCheck={this.MenuCheck}>
                            <TreeNode title="全部菜单权限" key="sub_all">
                                <TreeNode title="用户管理" key="sub1">
                                    <TreeNode title="用户列表" key="1"></TreeNode>
                                    <TreeNode title="添加用户" key="2"></TreeNode>
                                </TreeNode>
                                <TreeNode title="角色管理" key="sub2">
                                    <TreeNode title="角色列表" key="3"></TreeNode>
                                    <TreeNode title="添加角色" key="4"></TreeNode>
                                </TreeNode>
                            </TreeNode>
                        </Tree>
                    </div>
                    <div  style={{with:300,float:'left'}}>
                        <Tree checkable  defaultExpandAll={true}  onCheck={this.OprCheck}>
                            <TreeNode title="操作权限" key="opr1">
                                <TreeNode title="删除" key="delete"></TreeNode>
                                <TreeNode title="添加" key="add"></TreeNode>
                                <TreeNode title="编辑" key="edit"></TreeNode>
                            </TreeNode>
                        </Tree>
                    </div>
            </div>
            <div style={{marginLeft:80,marginTop:30}}>
                    <Button onClick={()=>this.submitFunc()}  type="danger">提交</Button>
                </div>
            </div>
        )
    }
}
export default Addrole