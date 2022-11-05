import axios from 'axios'
import { getToken } from './utils/setToken'
import { Message } from 'element-ui'

const service = axios.create({
    // 请求自动加载
    baseURL: '/api',
    //请求时间
    timeout: 3000
})
// 请求拦截器
service.interceptors.request.use((config) => {
    // 携带token地址
    config.headers['token'] = getToken('token')
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
    let { ststus, message } = response.data
    if (ststus!=200) {
        Message({message:message || 'error',type:'warning'})
    }
    return response
},(error) => {
    return Promise.reject(error)
})

export default service