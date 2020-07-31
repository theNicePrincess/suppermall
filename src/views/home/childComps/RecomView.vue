<template>
  <div class="recommend">
    <div class="thing" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecomView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{width:100%;display: flex;border-bottom:8px solid #eee;padding:15px 0 20px}
.recommend .thing{flex:1;text-align: center;font-size: 12px;}
.recommend .thing a img{width:90%;margin-bottom:3px;}
</style>
