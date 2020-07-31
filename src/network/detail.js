import { request,request2 } from "./request";

export function getDetail(id){
  return request2({
    url:'goodDetail.json',
    params:{
      iid:id
    }
  })
}


export class GoodsInfo {
  // 构造函数
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.discountColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  //面向对象
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.saleDescV2 = shopInfo.saleDescV2;
    this.shopLabels = shopInfo.shopLabels;
    this.level = shopInfo.level;
  }
}
