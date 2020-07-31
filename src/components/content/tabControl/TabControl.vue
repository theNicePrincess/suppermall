<template>
  <div class="control">
    <div v-for="(title,index) in titles"
         class="control-item" :class="{active: index === currentIndex }" @click="itemClick(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
.control{display: flex;text-align: center;height: 40px;line-height: 40px;font-size:14px;background-color: #fff;}
  .control .control-item{flex:1}
.control-item span{padding:3px 5px;}
.active span{color:var(--color-high-text);border-bottom:2px solid var(--color-high-text)}
</style>
