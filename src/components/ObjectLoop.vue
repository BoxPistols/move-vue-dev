<template>
  <div>
    <div class="org__list">
      <button @click="hasList = !hasList">hasList</button>

      <ul class="mol__list" v-for="(list, index) in lists" :key="list.id">
        <li>{{index}}:{{ list.name }}</li>
      </ul>
      <!-- <hr> -->

      <template v-if="hasList">
        <hr />
        <ul class="mol__list" v-for="(list, index) in lists" :key="list.id">
          <li>{{index}}:{{ list.name }}</li>
        </ul>
        <hr />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasList: true,
      lists: [
        {
          id: 1,
          name: 'Apple'
        },
        {
          id: 2,
          name: 'Banana'
        },
        {
          id: 3,
          name: 'Melon'
        }
      ]
    }
  }
}
</script>

<style scoped="scoped"></style>