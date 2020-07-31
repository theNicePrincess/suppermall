<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span v-for="n in goods.columns">{{n}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.base-info{font-size:14px;color:#666666;padding:10px 8px;font-family: "微软雅黑"}
.info-title{margin-bottom:6px;}
.info-price{margin:12px 0 18px;}
  .n-price{color:#ff5777;font-size: 18px;}
  .o-price{color:#cccccc;text-decoration: line-through;font-size:11px;margin-right:4px;margin-left:4px;}
  .discount{border:1px solid #ff5777;background-color: #ff5777;color:#ffffff;border-radius: 7px;padding:0 3px;font-size: 12px;}
  .info-other{font-size:12px;color:#959595;display: flex;justify-content: space-between;padding-bottom:4px;border-bottom:2px solid #ececec/*box-shadow: 0px 2px 2px */}
  .info-service{padding:18px 0;display: flex;justify-content: space-between;border-bottom:3px solid #ececec;}
.info-service-item{font-size: 12px;color:#959595;}
  .info-service-item img{width:14px;margin-right:3px;vertical-align: text-bottom}
</style>
