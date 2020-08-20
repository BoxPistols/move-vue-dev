<template>
  <div class="model">
    <model-basic/>
    <model-bool />
  </div>

</template>

<script>
  import ModelBasic from '@/components/ModelBasic'
  import ModelBool from '@/components/ModelBool'

  export default {
    data() {
      return {}
    },
    methods: {},
    components: {
      ModelBasic,
      ModelBool
    }
  }
</script>

<style scoped="scoped" lang="stylus"></style>