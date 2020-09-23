<template>
  <div>
    <div class="org__list">
      <!-- Toggle List -->
      <div class="mol__list">
        <button @click="hasList = !hasList">hasList</button>
      </div>

      <!-- removeObj -->
      <div class="mol__list">
        <button @click="removeObj">removeObj</button>
      </div>

      <!-- Object -->
      <div class="mol__list">
        <button @click="addObj">addObj</button>
      </div>
      <ul class="mol__list" v-for="(value, key, index) in objects" :key="key">
        <li>{{ index }} - {{ key }} : {{ value }}</li>
      </ul>

      <hr />

      <!-- list Loop  -->
      <ul class="mol__list" v-for="(list, index) in lists" :key="list">
        <li>{{ index }}:{{ list.name }}</li>
        <input type="text" />
      </ul>
      <!-- <hr> -->

      <!-- Toggle template -->
      <template v-if="hasList">
        <hr />
        <ul class="mol__list" v-for="(list, key, index) in lists" :key="list">
          <li>
            {{ index }}
            {{ key }}:{{ list.name }}{{ item }}
          </li>
        </ul>
        <hr />
      </template>
    </div>

    <!-- Outside view test -->
    <div class="test">{{ test[0].name }}</div>
  </div>
</template>

<script>
const ft = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Banana',
  },
  {
    id: 3,
    name: 'Melon',
  },
]

export default {
  props:{
    item:{
      type: String,
    }
  },
  data() {
    return {
      hasList: false,
      lists: ft,
      objects: {
        firstName: 'yamada',
        lastName: 'Taro',
        age: 21,
      },
    }
  },
  computed: {
    test() {
      return this.lists
    },
  },
  methods: {
    removeObj() {
      this.lists.shift()
    },
    addObj() {
      this.lists.push({
        id: 3,
        name: 'New Fruit',
      })
    },
  },
}
</script>

<style scoped="scoped" lang="stylus">
@import "../assets/utility.styl";
</style>
