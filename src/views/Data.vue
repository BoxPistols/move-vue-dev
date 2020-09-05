<template>
  <div>
    <h2>Data</h2>
    <Computed />
    <CalcTax />
  </div>
</template>

<script>
import Computed from "@/components/Computed";
import CalcTax from "@/components/CalcTax";

export default {
  data() {
    return {};
  },
  components: {
    Computed,
    CalcTax
  }
};
</script>

<style scoped lang="stylus"></style>
