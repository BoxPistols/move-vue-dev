<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <Bool /> -->
    <Attribute />
    <For />
  </div>
</template>

<script>
// @ is an alias to /src
// import Bool from "@/components/Bool"
import Attribute from "@/components/Attribute";
import For from "@/components/For";

export default {
  name: "Home",
  components: {
    // Bool,
    Attribute,
    For
  }
};
</script>

<style scoped lang="stylus">
img
  width 60px
</style>
