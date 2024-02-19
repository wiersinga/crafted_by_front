<template>
  <button class="btn" :style="{backgroundColor: backgroundColor}">{{ name }}</button>
</template>
<script>
export default {
  props: {
    name: String,
    backgroundColor:String
  }
}
</script>
<style scoped>
.btn {
color: #F2ECEC;
background-color: antiquewhite;
}
</style>