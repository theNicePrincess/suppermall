<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="goodsItem.show.img" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect"><i class="fa fa-star-o"></i>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      itemClick(){
        this.$router.push('/detail/'+this.goodsItem.id)
      }
    }
  }
</script>

<style scoped>
.goods-item{width:48%;}
.goods-item img{width:100%;border-radius: 0 0 4px 4px;}
.goods-item div{text-align: center;font-size:14px;margin-bottom:6px}
.goods-item div p{white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size:13px;padding:3px 10px 3px;}
.goods-item div span{font-size:12px;margin-right:3px;color: #A3A8A8A8;}
</style>
