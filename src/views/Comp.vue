<template>
    <div class="comp">
        <Array/>
        <Sort/>
    </div>
</template>

<script>
import Array from "@/components/Array"
import Sort from '@/components/Sort'

export default {
    components: {
        Array,
        Sort
    }
};
</script>

<style scoped lang="stylus">
.comp
  display flex
  justify-content center
  padding 0 5vw
  div
    border 1px solid #eee
    margin 0 12px
    padding 32px 48px
</style>