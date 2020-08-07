<template>
  <div class="cart">
    <!-- 导航-->
    <NavBar class="bgc">
      <div slot="center">
        购物车({{length}})
      </div>
    </NavBar>
      <!--    商品列表-->
      <CartList></CartList>

    <!--    底部汇总 -->
    <CartBottomBar />
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartBottomBar from "./childComps/CartBottomBar";
  import CartList from "./childComps/CartList";
  import {mapGetters} from "vuex";
  import CartListItem from "./childComps/CartListItem";

  export default {
    name: "Cart",
    data(){
      return {

      }
    },
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    methods:{

    },
    computed:{
      // 两种方法
      // ...mapGetters(['cartLength'])
      // mapGetters 辅助函数仅仅是将store中的getters映射到局部计算属性
      ...mapGetters({
        length:'cartLength'
      })
    }
  }
</script>

<style scoped>
  .cart{height: 100vh;}
  .bgc{background-color:var(--color-tint);color:#ffffff;}
</style>
