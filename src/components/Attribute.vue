<template>
  <div>
    <section>
      <h2 :style="{ color: myColor }">Attribute(属性)</h2>
      <p>
        <img align :src="imgName" />
      </p>
      <p>
        <a :href="myURL" :target="myTarget">Link</a>
      </p>
    </section>

    <section>
      <h2>Class</h2>
      <p :class="[{ through: throughOn }]">Bind Class by Data</p>
      <p :class="['hoge', { moge: moge }]">Bind Multi Class</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Attribute
      imgName: "https://dummyimage.com/360x120/000/fff",
      myURL: "https://google.com",
      myTarget: "_blank",
      myColor: "orange",
      throughOn: true,
      hoge: true,
      moge: true,
      // v-model
      myModel: "",
      myTextArea: ""
    };
  }
};
</script>

<style scoped lang="stylus">
section
  border 1px solid #eeeeee
.through
  color pink
.hoge
  font-weight 600
</style>
