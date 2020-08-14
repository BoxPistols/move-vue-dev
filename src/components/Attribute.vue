<template>
<div>
  <h2>属性</h2>
  <p><img align="" v-bind:src="imgName"></p>
  <p><a v-bind:href="myURL">Link</a></p>
</div>
</template>

<script>
  export default {
  data() {
    return {
    imgName: 'https://dummyimage.com/360x120/000/fff',
    myURL: "https://google.com"
    }
  },
  }
</script>


<style lang="stylus">
</style>