import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_type'
export default {
  addCart(context,payload){
    /*let oldProduct = null;
    // 新添加的商品，判断是否已经存在该商品，比较id值
    for(let item of state.cartList){
      if(item.id === payload.id){
        oldProduct = item;
      }
    }*/

    let oldProduct = context.state.cartList.find( item => {
      return item.id === payload.id
    })

    // 2、判断oldProduct
    if(oldProduct){
      context.commit(ADD_COUNTER,oldProduct)
    }else{
      payload.count = 1;
      context.commit(ADD_TO_CART,payload)
    }
  }
};
