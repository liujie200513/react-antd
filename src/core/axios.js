import axios from 'axios'
import Qs from 'qs'
import { config } from '../core/config'
import { message } from 'antd'
axios.default.timeout = 5000
axios.defaults.withCredentials = true
const instance = axios.create({
    baseURL : config[process.env.NODE_ENV],
    crossdomain : true,
    withCredentials : true,
    headers : {
        Accept : 'application/json',
        'Content-Type' : 'application/json',
    },
    isTransformResponse : true,
    isJsonConent : false,
})
instance.interceptors.response.use(
    response => response,
    err => {
        if (err.response) {
            message.error(`服务器错误，请刷新后重试。HttpStatus:${err.response.status}`)
        } else if (err.request) {
            message.error(`请求出现异常，Error：${err.request}`)
        } else {
            message.error(`构建请求异常，Error：${err.message}`)
        }
        return Promise.reject(err)
    }
)
export function post(url, data = {}) {
    return new Promise( resolve => {
        console.log(instance)
        instance.post(url, data).then(response => { 
            resolve(response.data) 
        })
    })
}

export function get(url, data = {}) {
    return new Promise(resolve => {
        instance.get(url, {
            params : data,
            paramsSerializer : function (params) {
                return Qs.stringify(params, { arrayFormat : 'brackets' })
            }
        }).then(response => { 
            resolve(response.data) 
        })
    })
}
export function put(url, data = {}) {
    return new Promise(resolve => {
        instance.put(url, data).then(response => { 
            resolve(response.data) 
        })
    })
}
export function deleteApi(url, data = {}) {
    return new Promise(resolve => {
        instance.delete(url, data).then(response => { 
            resolve(response.data) 
        })
    })
}
