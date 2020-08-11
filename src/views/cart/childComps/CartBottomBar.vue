<template>
  <div class="bottom-bar">
    <div class="leftBox">
      <div class="allCheck" @click="checkChange">
        <CheckButton class="button" :isChecked="allCheck" />
        <span>全选</span>
      </div>
      <div class="total">
        <div>合计：￥<span>{{totalPrice}}</span></div>
      </div>
    </div>
    <div class="payBox" @click="calcClick">
      去结算({{checkedLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    data(){
      return {

      }
    },
    methods:{
      checkChange(){
        if(this.allCheck){ //全部选中
          this.cartList.forEach(item => item.checked = false)
        }else{ // 部分或全部不选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick(){
        if(!this.allCheck){
          this.$toast.show('请选择购买的商品',2000)
        }
      }
    },
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return this.cartList.filter((item) => {
          return item.checked
        }).reduce((preValue,item) => {
          return preValue + item.price.split("￥")[1] * item.count
        },0).toFixed(2)
      },
      checkedLength(){
        return this.cartList.filter(item => {
          return item.checked
        }).length
      },
      allCheck(){
        //return !(this.cartList.filter( item => !item.checked).length)
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    }
  }
</script>

<style scoped>
.bottom-bar{height:30px;background-color: #f6f6f6;display: flex;color:#666666;font-size:13px;justify-content: space-between}
.leftBox{padding:5px 10px;display: flex;}
  .allCheck{width: 72px;display: flex;}
  .button{width:12px;height: 14px;margin-right:4px;font-size:14px;}
  .payBox{width:80px;background-color: orangered;color:#fff;text-align: center;line-height: 30px;}
</style>
