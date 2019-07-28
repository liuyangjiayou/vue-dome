import axios from 'axios'
import qs from  'qs'
import vue from '../main'
axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.baseURL = 'http://zhaofang.ok.wang/index/index/httprequest';

//发送请求的时候的一个拦截器
axios.interceptors.request.use(function (config) {
  config.headers = {
    'Content-Type':'application/x-www-form-urlencoded', //设置跨域头部'
  };
  let token = JSON.parse(localStorage.getItem('zfToken')); 
  config.headers.Authorization = 'token123456'
  console.log(config);
  //url 路径传参
  return config
},function (err) {
  return Promise.reject(err);
});
//接受响应的一个拦截器
axios.interceptors.response.use(function (res) {
   
  return res
},function (err) {
  return Promise.reject(err);
});

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data))
      .then(res => {
        if(res.data.code == 0){
            vue.zfMsg({
                type : 2,
                msg : res.data.msg
            });
            return false;
        }
        resolve(res.data);
      }, err => {
        reject(err);
    })
  })
}
