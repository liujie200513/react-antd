import React, { Component } from 'react'
import {post} from '../../core/axios'
import { withRouter } from 'react-router'
import {Layout, Menu, Icon, Button,Row, Col,Table, Divider, Tag} from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider ,Footer} = Layout
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed : false
        }
    }
    toggle = () => {
        this.setState({
            collapsed : !this.state.collapsed,
        })
    }
    render() {
        return (
            <Layout>
                <Sider
                    style = {{background : '#fff'}}>
                    <div className="main-logo" />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}>
                        <SubMenu key="Dashboard" title={<span><Icon type="user" />Dashboard</span>}>
                            <Menu.Item key="1">分析页</Menu.Item>
                            <Menu.Item key="2">监控页</Menu.Item>
                            <Menu.Item key="3">工作态</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{ background : '#fff', padding : 0 }} />
                    <Content style={{margin : '24px 16px', padding : 24, background : '#fff', minHeight : 600}}>
                            Content
                    </Content>
                </Layout>
            </Layout>
           
        )
    }
}
export default withRouter(HomePage)