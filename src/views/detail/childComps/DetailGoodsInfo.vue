<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-comment">
    <div class="info-desc">
      <div class="desc">{{detailInfo.desc}}</div>
    </div>
    <div class="info-image">
      <div>
        <p class="info-key">{{detailInfo.detailImage[1].key}}</p>
        <div class="img-list">
          <img @load="imgLoad" v-for="(img, index) in detailInfo.detailImage[1].list" :key="index" :src="img" alt="">
        </div>
      </div>
    </div>
    <div class="info-key"></div>
  </div>
</template>

<script>
  export default {
    name: "DetailCommentInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0,
        imagesLength:0
      }
    },
    methods:{
      imgLoad(){
        //判断所有图片都加载完了那么进行一次回调就可以了
        if(++this.counter === this.imagesLength){
          this.$emit('imageLoad')
        }
      }
    },
    watch:{
      detailInfo(){
        this.imagesLength = this.detailInfo.detailImage[1].list.length
      }
    }
  }
</script>

<style scoped>
  .detail-comment{padding:10px 5px;}
  .info-desc{font-size: 14px;margin-bottom: 10px;}
  .info-key{font-size: 13px;color:#666666;font-family: "微软雅黑";margin-bottom:8px;}
.img-list img{width:100%;}
</style>
