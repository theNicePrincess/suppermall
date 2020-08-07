import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_type'
export default {
  // mutations 唯一的目的就是修改state中的状态
  // mutations 中的每个方法尽可能完成事件比较单一一点
  [ADD_COUNTER](state,payload){
    payload.count += 1;
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
};
