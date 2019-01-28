import React, { Component } from 'react'
import './assets/reset.less'
import './assets/iconfont.css'
import {Button} from 'antd'
import {post} from './core/axios'
class App extends Component {
    login=()=>{
        let data = {
            name : 'liujie',
            password : 'password'
        }
        post('users/logion',data)
    }
    add =()=>{
        let data = {
            name : 'liujie',
            password : 'password'
        }
        post('users/add',data)
    }
    render() {
        return (
            <div className="App">
                <div>
                    <Button type="primary" onClick = {this.login}>登陆</Button>
                    <Button onClick = {this.add}>添加</Button>
                </div>
            </div>
        )
    }
}
export default App
