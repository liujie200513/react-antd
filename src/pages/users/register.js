import React, { Component } from 'react'
import {Form, Input, Button, Checkbox,message, AutoComplete} from 'antd'
import {post} from '../../core/axios'
import { withRouter } from 'react-router'
class Register extends Component {
    add = async ()=>{
        let data = {
            name : 'liujie',
            password : '123456',
            email : '',
        }
        let response = await post('users/add',data)
        if(response.code == 0){
            message.success('添加成功')
            this.props.history.push('/')
        }
    }
    cancell = ()=>{
        this.props.history.push('/')
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
            <div style = {{display : 'flex' ,justifyContent : 'center',alignItems : 'center',height : '100%'}}>
                <div style = {{width : '400px'}}>
                    <Form.Item {...formItemLayout} label="用户名">
                        <Input placeholder="Please input your name" />
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="密码">
                        <Input placeholder="Please input your password" />
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="邮箱">
                        <Input placeholder="Please input your password" />
                    </Form.Item>
                    <Form.Item {...formTailLayout}>
                        <Checkbox
                        >同意协议
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...formTailLayout}>
                        <Button type="primary" onClick={this.add}>注册</Button>
                        <Button style= {{marginLeft : 20}} type="primary" onClick={this.cancell}>返回登陆</Button>
                    </Form.Item>
                </div> 
            </div>
        )
    }
}
export default withRouter(Register)