<template>
  <div>
    <div class="org__list">
      <div class="mol__list">
        <button @click="hasList = !hasList">hasList</button>
      </div>

      <div class="mol__list">
        <button @click="removeObj">removeObj</button>
      </div>

      <div class="mol__list">
        <button @click="addObj">addObj</button>
      </div>

      <ul class="mol__list" v-for="(value, key, index) in objects" :key="key">
        <li>{{ index }} - {{ key }} : {{ value }}</li>
      </ul>

      <hr />

      <ul class="mol__list" v-for="(list, index) in lists" :key="list.id">
        <li>{{ index }}:{{ list.name }}</li>
        <input type="text" />
      </ul>
      <!-- <hr> -->

      <template v-if="hasList">
        <hr />
        <ul class="mol__list" v-for="(list, key, index) in lists" :key="list.id">
          <li>
            {{ index }}
            {{ key }}:{{ list.name }}
          </li>
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
      hasList: false,
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
      ],
      objects: {
        firstName: 'yamada',
        lastName: 'Taro',
        age: 21
      }
    }
  },
  methods: {
    removeObj() {
      this.lists.shift()
    },
    addObj() {
      this.lists.push({
        id: 3,
        name: 'New Fruit'
      })
    }
  }
}
</script>

<style scoped="scoped"></style>
