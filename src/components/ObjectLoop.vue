<template>
<div>
  <div class="org__list">
    <ul class="mol__list" v-for="(list, index) in lists" :key="list.id">
      <li>{{index}}:{{ list.name }}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      lists: [{
        id: 1,
        name: "Apple"
      }, {
        id: 2,
        name: "Banana"
      }, {
        id: 3,
        name: "Melon"
      }]
    }
  }
}
</script>

<style scoped="scoped"></style>
