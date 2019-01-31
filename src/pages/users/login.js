import React, { Component } from 'react'
import {Form, Input, Button, Checkbox,message, AutoComplete} from 'antd'
import { withRouter } from 'react-router'
import {post} from '../../core/axios'

class Login extends Component {
    constructor(props, context) {
        super(props, context)
        
    }
    login= async ()=>{
        let data = {
            name : 'liujie',
            password : '123456'
        }
        let response = await post('users/logion',data)
        console.log(process)
        if(response.code == 0){
            message.success('登陆成功')
            this.props.history.push('/homePage')
        }
    }
    register = async ()=>{
        this.props.history.push('/register')
    }
    render() {
        const formItemLayout = {
            labelCol : { span : 4 },
            wrapperCol : { span : 20 },
        }
        const formTailLayout = {
            labelCol : { span : 4 },
            wrapperCol : { span : 20, offset : 4 },
        }
        return (
            <div className = "login">
                <div className = "user-info">
                    <div className="logo" />
                    <Form.Item {...formItemLayout} label="用户名">
                        <Input placeholder="Please input your name" />
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="密码">
                        <Input placeholder="Please input your password" />
                    </Form.Item>
                    <Form.Item {...formTailLayout}>
                        <Button type="primary" onClick={this.login}>登陆</Button>
                        <Button style= {{marginLeft : 20}} type="primary" onClick={this.register}>注册</Button>
                    </Form.Item>
                </div> 
            </div>
        )
    }
}
export default withRouter(Login)