import axios from 'axios';
import {
    Dialog
} from 'vant'
import router from '../router/index'
// console.log(process.env.NODE_ENV)

var instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'http://backend-api-01.newbee.ltd/' : '',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    if (data.resultCode == 416) {
        //需要登陆
        Dialog.alert({
            title: '提示',
            message: '请登陆',
            theme: 'round-button',
        }).then(() => {
            // on close
            router.push('/login')
        });
    }
    return data;
}, function (error) {
    // 对响应错误做点什么
    Dialog.alert({
        title: '提示',
        message: '系统繁忙',
        theme: 'round-button',
    }).then(() => {
        // on close
    });
    return Promise.reject(error);
});

export default instance