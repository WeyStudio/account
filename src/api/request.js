import axios from "axios"
import { message } from 'ant-design-vue'

const request = axios.create({
    baseURL: 'https://coco.codemao.cn/http-widget-proxy/http@SEP@156.224.26.105:7878/email',
    timeout: 10000
})

request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(res => {
    return res.data
}, error => {
    message.error('出错啦')
})

export default request