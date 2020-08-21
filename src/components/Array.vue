<template>
  <div class="object">
    <h2>Loop</h2>
    <table>
      <tr v-for="(item, index) in objArray" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </table>

    <h3>Change data</h3>
    <div class="change-data-org">

      <!-- 先頭に追加 -->
      <div class="change-data-mol">
        <button v-on:click="Splice">Splice</button>
        <p>先頭追加：
          <code>this.objArray.splice("", 0, { name: "New item", price: 100 });</code>
        </p>
      </div>

      <!-- 末尾に追加 -->
      <div class="change-data-mol">
        <button v-on:click="PushList">PushList</button>
        <p>末尾追加：
          <code>this.objArray.push({name: '末尾アイテム', price: 200});</code>
        </p>
      </div>

      <!-- 指定追加 -->
      <div class="change-data-mol">
        <button v-on:click="SpliceListIndex(2)">SpliceListIndex</button>
        <p>指定追加：
          <code>this.objArray.splice(index, 0, {name: '指定アイテム', price: 111});</code>
        </p>
      </div>

      <!-- 先頭変更 -->
      <div class="change-data-mol">
        <button v-on:click="ChangeList">ChangeList</button>
        <p>先頭変更：
          <code>this.objArray.splice('index', 1, { name: "Change item", price: 666 })</code>
        </p>
      </div>

      <!-- 先頭削除 -->
      <div class="change-data-mol">
        <button v-on:click="DelList">DelList</button>
        <p>先頭削除：
          <code>this.objArray.splice('index', 1);</code>
        </p>
      </div>

      <!-- 全削除 -->
      <div class="change-data-mol">
        <button v-on:click="DelAll">DelAll</button>
        <p>全削除：
          <code>this.objArray.splice('index', this.objArray.length);</code>
        </p>
      </div>
    </div>

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
    Splice() { // 先頭追加
      // this.objArray.push({ name: "先頭アイテム", price: 100 })
      this.objArray.splice('index', 0, { name: "New item", price: 100 });
    },
    PushList() { // 最後に追加
      this.objArray.push({name: '末尾アイテム', price: 200});
    },
    SpliceListIndex(v) { // 指定箇所で追加
      this.objArray.splice(v, 0, {name: '指定アイテム', price: 111});
    },
    ChangeList() { // 変更 1番目アイテム
      this.objArray.splice('index', 1, { name: "Change item", price: 666 });
    },
    DelList() { // 削除 1番目
      this.objArray.splice('index', 1);
    },
    DelAll() {
      this.objArray.splice('index', this.objArray.length);
    },
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

button
  padding 8px 16px
  background-color transparent
  border 2px solid gray
  border-radius 8px
  width auto
  min-width 120px
  margin auto
  cursor pointer
  transition .2s
  &:hove
    background-color lightgrey
  &:focus
    border-radius 0

.change-data
  &-org
    max-width 768px
    display flex
    flex-wrap wrap
    margin auto
  &-mol
    display flex
    justify-content center
    p
      margin-left 4px

code
  background-color lighten(teal, 90%)
  padding 4px 8px
  border-radius 4px
</style>
