import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// request拦截器
service.interceptors.request.use(config => {
  // 添加一些拦截器处理
  return config
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  // 根据response code 做一些报错等处理
  return response
}, error => {
    Message({
      message: error.response.data.message,
      type: 'error',
      dangerouslyUseHTMLString:true,
      duration: 5 * 1000
    })
    return Promise.reject(error)
})

export default service

