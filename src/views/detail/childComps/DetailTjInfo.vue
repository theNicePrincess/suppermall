<template>
  <div class="comment-info">
    <p class="title">用户推荐</p>
    <div class="comBox">
      <p>你的小可爱</p>
      <div>
        使用方便，效果明显很喜欢使用方便，效果明显很喜欢使用方便，效果明显很喜欢使用方便，效果明显很喜欢使用方便，效果明显很喜欢s
      </div>
      <ul>
        <li>lala1</li>
        <li>lala2</li>
        <li>lala3</li>
        <li>lala4</li>
        <li>lala5</li>
        <li>lala6</li>
        <li>lala7</li>
        <li>lala8</li>
        <li>lala9</li>
        <li>lala10</li>
        <li>lala11</li>
        <li>lala12</li>
        <li>lala13</li>
        <li>lala14</li>
        <li>lala15</li>
        <li>lala16</li>
        <li>lala17</li>
        <li>lala18</li>
        <li>lala19</li>
        <li>lala20</li>
        <li>lala1</li>
        <li>lala2</li>
        <li>lala3</li>
        <li>lala4</li>
        <li>lala5</li>
        <li>lala6</li>
        <li>lala7</li>
        <li>lala8</li>
        <li>lala9</li>
        <li>lala10</li>
        <li>lala11</li>
        <li>lala12</li>
        <li>lala13</li>
        <li>lala14</li>
        <li>lala15</li>
        <li>lala16</li>
        <li>lala17</li>
        <li>lala18</li>
        <li>lala19</li>
        <li>lala20</li>
      </ul>
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
