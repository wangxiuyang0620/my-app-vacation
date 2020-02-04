import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Switch ,Route, Redirect} from 'react-router-dom';
import Work from './work'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Home extends Component {

    componentWillMount =()=> this.$push = this.props.history.push;

    state = {
        collapsed: false,
        menu:[
            {
                belong:'用户管理',
                icon:'user',
                sub:[
                    {
                        key:1,
                        name:'用户列表',
                        to:'/home/userlist'
                    },
                    {
                        key:2,
                        name:'添加用户',
                        to:'/home/useradd'
                    }
                ]
            },
            {
                belong:'角色管理',
                icon:'team',
                sub:[
                    {
                        key:3,
                        name:'角色列表',
                        to:'/home/rolelist'
                    },
                    {
                        key:4,
                        name:'添加角色',
                        to:'/home/roleadd'
                    }
                ]
            }
        ]
      };
 
    render() {
        const {menu} = this.state
        return <div className="home">
        <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" onClick={()=>this.props.history.push('/work')}>
              工作台
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}  defaultOpenKeys={['sub1']}>

            {
                menu.map((item,key)=>{
                    
                return <SubMenu key={['sub',++key].join('')} title={<span><Icon type={item.icon} /><span>{item.belong}</span></span>}>
                            {
                                item.sub.map(jtem=><Menu.Item key={jtem.key} onClick={()=>this.$push(jtem.to)}>{jtem.name}</Menu.Item>)
                            }
                  </SubMenu>
                })
            }
            
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>

            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              style={{padding:15}}
              onClick={()=> this.setState({collapsed: !this.state.collapsed})}
            />

            <span 
                style={{float:'right',paddingRight:15}}
                onClick={()=>{
                    localStorage.clear();
                    this.$push('/login');
                }
            }>欢迎你 {localStorage.username}！ |  退出</span>
           
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 15,
              background: '#fff',
              minHeight: 280,
            }}
          >
              <Switch>
              <Route path="/home/work" component={Work}></Route>
                  <Route path="/home/userlist" component={()=><div>用户列表</div>}></Route>
                  <Route path="/home/useradd" component={()=><div>添加用户</div>}></Route>
                  <Route path="/home/rolelist" component={()=><div>角色列表</div>}></Route>
                  <Route path="/home/roleadd" component={()=><div>添加角色</div>}></Route>
                  <Redirect from="/home" to="/home/work"></Redirect>
              </Switch>

          </Content>
        </Layout>
      </Layout>
      </div>
    }
}