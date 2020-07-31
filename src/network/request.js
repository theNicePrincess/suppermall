import axios from 'axios'


// 最终方案
export function request(config){
  // 1、创建axios的实例
  const instance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 2.1 axios 的拦截器，请求拦截的作用
  instance1.interceptors.request.use(config => {
    // 请求成功
    // 1、比如说config中的一些信息不符合服务器的要求

    // 2、比如发送网络请求的时候，都希望在界面中显示一个请求的图标

    // 3、某些网络请求（比如登录（token）），必须携带一些特殊的信息，如果没有携带可以提示用户

    return config;
  },err => {
    // 请求失败
    console.log(err);
  })

  // 2.2 响应拦截
  instance1.interceptors.response.use(res => {
    return res.data;

  },err => {
    console.log(err);
  })

  // 3、发送真正的网络请求
  return instance1(config)
}

export function request2(config){
  // 2、创建第二个axios的实例
  const instance2 = axios.create({
    baseURL:'http://localhost:8080',
    timeout:5000
  })

  instance2.interceptors.request.use(config => {
    // 请求成功
    // 1、比如说config中的一些信息不符合服务器的要求

    // 2、比如发送网络请求的时候，都希望在界面中显示一个请求的图标

    // 3、某些网络请求（比如登录（token）），必须携带一些特殊的信息，如果没有携带可以提示用户

    return config;
  },err => {
    // 请求失败
    console.log(err);
  })

  // 3、发送真正的网络请求
  return instance2(config)
}


/* // 第一种
export function request(config,success,failure){
  //1、 创建一个axios实例
  const instance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  // 2、发送真正的网络请求
  instance1(config)
    .then(res => {
      success(res)
    })
    .catch(err => {
      failure(err)
    })
}
*/

// 第二种方法
/*
export function request(config){
  //1、 创建一个axios实例
  const instance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  // 2、发送真正的网络请求
  instance1(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.failure(err)
    })
}
*/

// 使用promise方案
/*
export function request(config){
  return new Promise((resolve,reject) => {
    // 1、创建axios的实例
    const instance1 = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    // 2、发送真正的网络请求
    instance1(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })

  })
}
*/

