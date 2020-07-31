<template>
  <swiper class="swiperBox">
    <swiper-item v-for="img in topImages">
      <img :src="img" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper2'

  export default {
    name: "DetailSwiper",
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .swiperBox{height:260px;}
</style>
