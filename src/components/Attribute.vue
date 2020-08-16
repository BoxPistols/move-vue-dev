<template>
  <div>
    <h2 :style="{ color: myColor }">属性</h2>
    <p><img align="" :src="imgName" /></p>
    <p><a :href="myURL" :target="myTarget">Link</a></p>
    <p :class="[{ through: throughOn }]">Bind Class</p>
    <p :class="[hoge, moge]">Bind Multi Class</p>

    <h2>Model</h2>
    <input type="text" v-model="myModel" />
    <p>{{ myModel }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgName: "https://dummyimage.com/360x120/000/fff",
      myURL: "https://google.com",
      myTarget: "_blank",
      myColor: "orange",
      throughOn: true,
      hoge: true,
      moge: true
    };
  }
};
</script>

<style scoped lang="stylus">
.through, .hoge, .moge
  color pink
</style>
