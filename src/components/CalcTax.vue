<template>
<div>
  <h2>Calc Tax</h2>
  <div class="lay_price">
    <div class="org_price fx-c">
      <div class="mol_price">
        予算
        <input v-model.number="budget" type="number" />
      </div>
      <div class="mol_price">
        価格
        <input v-model.number="price" type="number" />
      </div>
    </div>
    <div class="org_price" :style="{ color: setColor }">
      <p>価格：{{ price }}</p>
      <p>税込：{{ calcTax }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      budget: 150
    };
  },
  computed: {
    calcTax() {
      if (this.price > this.budget) {
        return "予算オーバー";
      }
      return Math.floor(this.price * 1.1);
    },

    setColor() {
      if (this.price > this.budget) {
        return "crimson";
      }
      return null;
    }
  },
  watch: {
    price() {
      const vm = this
      setTimeout(() => {
        vm.price = 100
        vm.budget = 150
      }, 2000);
    },
  },

};
</script>

<style lang="stylus" scoped>
@import "../assets/utility.styl"

input[type="number"] {
  width 50px
}

.mol_price {
  margin 4px 12px
}
</style>
