<template lang="pug">
div
  h2 Sort
  ul
    // 偶数の抽出
    //- li(v-for="i in myArray" v-if="i % 2 == 0") {{ i }}
    li(v-for="i in myArray") {{ i }}
  button(@click="sortData(myArray)") Do Sort
  button(@click="sortDataRv(myArray)") Do SortRv
  button(@click="evenData(myArray)") evenData
  button(@click="clearData(myArray)") clearData
</template>

<script>
export default {
  data() {
    return {
      // myArray: ["one", "two", "three", "four", "five"],
      myArray: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    sortData(v) {
      v.sort(function(a, b) {
        return (a < b ? -1 : 1)
      })
    },
    sortDataRv(v) {
      v.sort(function(a, b) {
        return (a > b ? -1 : 1)
      })
    },
    evenData() {
      this.myArray = this.myArray.filter(
        function(v) {
          return v % 2 == 0
        }
      )
    },
    clearData() {
      this.myArray = [1, 2, 3, 4, 5]
    },
  }
}
</script>

<style lang="stylus" scoped>
ul
  list-style none
  li
    font-size 20px
</style>