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
    <div class="payBox">
      去结算(8)
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "CartBottomBar",
    data(){
      return {
        allCheck:false
      }
    },
    methods:{
      checkChange(){
        this.allCheck = !this.allCheck;
      }
    },
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){

        console.log(this.$store.state.cartList);
        return this.$store.state.cartList.filter((item) => {
          return item.checked
        }).reduce((preValue,item) => {
          return (item.price.split("￥")[1] * item.count).toFixed(2)
        },0)
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
