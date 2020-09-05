<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <Bool /> -->
    <div class="contents">
      <div class="box">
        <Attribute />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Bool from "@/components/Bool"
import Attribute from "@/components/Attribute";

export default {
  name: "Home",
  components: {
    // Bool,
    Attribute
  }
};
</script>

<style scoped lang="stylus">
.contents
  display flex
  justify-content center

.box
  margin 8px 12px

img
  width 60px
</style>
