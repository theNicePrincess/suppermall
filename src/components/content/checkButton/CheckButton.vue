<template>
  <div class="check-button" :class="{active:isChecked,normal:!isChecked}">
    <i class="fa fa-check-circle"></i>
  </div>
</template>

<script>
  export default {
    name: "CheckButtom",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
.active{color:palevioletred}
  .normal{color:#cccccc}
</style>
