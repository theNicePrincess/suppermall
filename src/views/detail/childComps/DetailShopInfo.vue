<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt="">
    </div>
    <div class="shop-desc">
      <div class="name">{{shopInfo.name}}</div>
      <div class="line-two">
        <span class="star" v-for="i in shopInfo.level"></span>
        <span class="theGoodsNum">{{shopInfo.saleDescV2}}</span>
      </div>
      <div class="shop-label">
        <span v-for="i in 2" :key="shopInfo.shopLabels[i-1].id">{{shopInfo.shopLabels[i-1].text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info{font-size:12px;font-family: "微软雅黑";padding:0 12px 8px;display: flex;border-bottom: 3px solid #ececec;}
  .shop-logo{margin-right: 10px;}
.shop-logo img{height:50px;display: block;}
  .line-two{margin:3px 0 5px}
.line-two >span.star{width:9px;height:9px;overflow: hidden;display: inline-block;background: url("~assets/img/detail/detail_bottom.png") -9px -11px ;
  background-size: 9px;
  margin-right:4px;
}
  .theGoodsNum{font-size: 9px;display: inline-block;padding-left:10px;border-left: 1px solid #c5c4c4;margin-left: 8px;}
  .shop-label> span{display: inline-block;padding:1px 4px;color:var(--color-high-text);border:1px solid #c5c4c4;margin-right: 2px;font-size: 9px;border-radius: 6px;}
</style>
