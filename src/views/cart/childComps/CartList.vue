<template>
  <div class="cartList">
    <Scroll class="content" ref="scroll">
<!--      <div v-for="item in cartList">{{item}}</div>-->
      <CartListItem v-for="(item,index) in cartList" :key="index" :product="item" />
    </Scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartList",
    data(){
      return {

      }
    },
    components:{
      Scroll,
      CartListItem
    },
    computed:{
      // 两种方法
      // ...mapGetters(['cartLength'])
      // mapGetters 辅助函数仅仅是将store中的getters映射到局部计算属性
      ...mapGetters({
        cartList:'cartList'
      })
    },
    activated() {
      this.$refs.scroll.ref();
    }
  }
</script>

<style scoped>
  .cartList{height:calc(100% - 44px - 49px - 30px);}
.content{height:100% ;width:100%;overflow: hidden;}
</style>
