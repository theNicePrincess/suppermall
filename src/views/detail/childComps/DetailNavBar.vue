<template>
  <div>
    <NavBar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item" :class="{active: index === currentIndex}" @click="titleClick(index)">{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "detailNavBar",
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      titleClick(index){
        this.currentIndex = index;
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back();
        this.currentIndex = 0;
        this.$emit('titleClick',0)
      }
    }
  }
</script>

<style scoped>
  .title{display: flex;font-size: 13px;}
  .title .title-item{flex:1}
  .active{color:var(--color-high-text)}
  .back img{margin-top:12px;margin-left:10px}
</style>
