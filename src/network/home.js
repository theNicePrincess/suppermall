import {request ,request2} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

// 请求网络首页数据
export function getHomeGoods(type) {
  return request2({
    url:'goods.json'
  })
}
