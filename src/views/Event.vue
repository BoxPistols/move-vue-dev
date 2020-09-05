<template>
  <div>
    <event-basic />
    <event-modifier/>
  </div>
</template>

<script>
import EventBasic from '@/components/EventBasic.vue'
import EventModifier from '@/components/EventModifier.vue'

export default {
  components: {
    EventBasic,
    EventModifier,
  },
}
</script>

<style scoped lang="stylus"></style>
