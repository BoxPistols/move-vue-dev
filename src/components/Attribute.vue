<template>
<div>
  <h2 :style="{ color: myColor }">属性</h2>
  <p><img align="" :src="imgName"></p>
  <p><a :href="myURL" :target="myTarget">Link</a></p>
  <p :class="[{'through': throughOn}]">Bind Class</p>
  <p :class="['through': throughOn}]">Bind Class</p>
</div>
</template>

<script>
  export default {
  data() {
    return {
    imgName: 'https://dummyimage.com/360x120/000/fff',
    myURL: "https://google.com",
    myTarget: '_blank',
    myColor: 'orange',
    throughOn: true
    }
  },
  }
</script>


<style scoped lang="stylus">
.through
  color pink
    
</style>