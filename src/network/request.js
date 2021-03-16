import axios from 'axios'

    //使用自定义配置创建axios实例
    const instance = axios.create({
        baseURL:'http://127.0.0.1:3000',
        timeout:5000,
        // headers: {'X-Custom-Header': 'foobar'}
   })

//axiso拦截器
//请求拦截
instance.interceptors.request.use(config=>{
    return config
}),err=>{

}
//响应拦截
instance.interceptors.response.use(res=>{
    return res.data
}),err=>{

}
//返回的是promise
export default instance

