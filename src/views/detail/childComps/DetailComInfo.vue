<template>
  <div class="comment-info">
    <p class="title">用户评论</p>
    <div class="comBox">
      <p>你的小可爱</p>
      <div>
        使用方便，效果明显很喜欢使用方便，效果明显很喜欢使用方便，效果明显很喜欢使用方便，效果明显很喜欢使用方便，效果明显很喜欢s
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
    name: "DetailComInfo",
    data(){
      return {

      }
    },
    filters:{
      showDate(value){
        // 1、将时间戳转成Date对象
        const date = new Date(value * 1000)

        // 2、将date进行格式化
        return formatDate(date,'yyyy-mm-dd hh:mm:ss')

      }
    }
  }
</script>

<style scoped>
.comment-info .title{font-size: 14px;margin: 10px 0;}
  .comBox{font-size:12px;border-top:1px solid #cccccc;padding:5px 8px;}
  .comBox p{margin-bottom: 5px;}
</style>
