<template>
<!--  此处使用的是 better-scroll 插件-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll :null
      }
    },
    mounted() {
      // 1、创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true
      })
      // console.log(this.scroll);
      // this.scroll.scrollerHeight 来控制滚动高度
      // this.scroll.refresh() ;刷新


      // 2、监听滚动的位置
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) => {
          this.$emit('scroll',position)
        })
      }

      // 3、监听scroll 滚动到底部 。监听上拉事件
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp');
        })
      }


    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      ref(){
        this.scroll && this.scroll.refresh();
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
</style>
