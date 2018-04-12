<template lang="html">
  <div class="loading" v-if="isLoading">
    <img src="../../assets/loading.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'loading',
  props:['isLoading']
}
</script>

<style lang="scss">
.loading {
    position: fixed;
    top: 50%;
    left: 30%;
}
</style>
