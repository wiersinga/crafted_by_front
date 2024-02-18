<template>
  <button class="btn">{{ name }}</button>
</template>
<script>
export default {
  props: {
    name: String,
  }
}
</script>
<style>
#btn {
color: #B31414;
}
</style>