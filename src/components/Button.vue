<template>
  <button class="btn text-centerrounded-lg text-sm px-5 py-2.5" type="submit" :style="{backgroundColor: backgroundColor}">{{ name }}</button>
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