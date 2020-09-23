<template>
  <div>
    <object-loop :item="san" />
  </div>
</template>

<script>
import ObjectLoop from '@/components/ObjectLoop.vue'

export default {
  data() {
    return {
      san: '様',
    }
  },
  components: {
    ObjectLoop,
  },
}
</script>

<style scoped lang="stylus"></style>
