<template>
  <div class="object">
    <h2>Loop</h2>
    <table>
      <tr v-for="(item, index) in objArray" v-bind:key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </table>

    <p>Change data</p>
    <button v-on:click="pushItem">pushItem</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objArray: [
        { name: "メロンパン", price: 100 },
        { name: "ジャムパン", price: 120 },
        { name: "クロワッサン", price: 220 }
      ]
    };
  },
  methods: {
    pushItem() {
      // this.objArray.push({ name: "New item", price: 100 })
      this.objArray.splice("", 0, { name: "New item", price: 100 });
    }
  }
};
</script>

<style scoped lang="stylus">
>>>.object
  display flex
  justify-content center
>>>table
  width 50%
  max-width 400px
  margin auto
  border-collapse collapse
  td
    padding 8px 12px
    border 1px solid #ccc
    white-space nowrap
</style>
