import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Userlist from '../user/userlist'
import Adduser from '../user/adduser'
import Rolelist from '../role/rolelist'
import Addrole from '../role/addrole'
import Work from './work'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Home extends React.Component {
  state = {
    collapsed: false,
    menu: [
      {
        belong: "用户管理",
        icon: 'user',
        sub: [
          {
            key: "2",
            name: "用户列表",
            to: "/home/userlist"
          }, {
            key: "3",
            name: "添加用户",
            to: "/home/adduser"

          }
        ]

      }, {
        belong: "角色管理",
        icon: "team",
        sub: [
          {
            key: "4",
            name: "角色列表",
            to: '/home/rolelist'
          }, {
            key: "5",
            name: "添加角色",
            to: '/home/addrole'
          }
        ]
      }
    ]
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  back() {
    this.props.history.push('/login')
    localStorage.clear()
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark"  mode="inline" defaultOpenKeys={['sub1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span onClick={() => this.props.history.push('/home/work')}>工作台</span>
            </Menu.Item>
            {
              this.state.menu.map((item, index) => {
                return <SubMenu key={['sub', ++index].join('')} title={<span><Icon type={item.icon} />
                  <span>{item.belong}</span></span>}>

                  {
                    item.sub.map(v => {
                      return <Menu.Item key={v.key} onClick={() => this.props.history.push(v.to)}>{v.name}</Menu.Item>

                    })
                  }

                </SubMenu>
              })
            }

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 5, textAlign: 'right' }} >欢迎 {localStorage.getItem('user')} ! | <span onClick={() => { this.back() }}>退出</span></Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 600, margin: 5 }}>
              <Switch>
                <Route path='/home/work' component={Work} />
                <Route path='/home/userlist' component={Userlist} />
                <Route path='/home/adduser' component={Adduser} />
                <Route path='/home/rolelist' component={Rolelist} />
                <Route path='/home/addrole' component={Addrole} />
                <Redirect from='/home' to='/home/work'/>

              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Project Created by Wxy</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home

