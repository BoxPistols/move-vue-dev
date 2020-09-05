<template>
  <div id="app">
    <h1>Move Vue</h1>
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/model">Model</router-link>
        </li>
        <li>
          <router-link to="/comp">Comp</router-link>
        </li>
        <li>
          <router-link to="/event">Event</router-link>
        </li>
        <li>
          <router-link to="/data">Data</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus" scoped>
@import "../src/assets/utility.styl"
</style>
