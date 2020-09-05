<template>
<div>
  <h2>Calc Tax</h2>
  <input v-model.number="price" type="number" />
  Item Val
  <p>価格：{{ price }}</p>
  <p>税込：{{ calcTax }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      price: 100
    }
  },
  computed: {
    calcTax() {
      if (this.price > 100) {
        return "予算オーバー"
      }
      return Math.floor(this.price * 1.1)
    }
  }
}
</script>

<style lang="scss" scoped="scoped"></style>
