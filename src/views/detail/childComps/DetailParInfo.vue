<template>
  <div v-if="Object.keys(paramsInfo).length !== 0" class="params-info">
    <p class="title">{{paramsInfo.key}}</p>
    <table class="info-param">
      <tr v-for="(value,key,index) in paramsInfo.set" :key="index">
        <td class="param-key">{{key}}</td>
        <td class="param-value">{{value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParInfo",
    props:{
      paramsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info p{font-size: 14px;margin:10px 2px;}
  .params-info{
    width:100%;
    border-collapse: collapse;
  }
  .info-param tr {
    font-size: 13px;
    height:42px;
  }
  .info-param tr td{
    border-bottom:1px solid rgba(100,100,100,0.1);
  }
  .param-key{width:95px;}
  .info-param{border-top:1px solid rgba(0,0,0,.1)}
  .param-value{color:#eb4868}
</style>
