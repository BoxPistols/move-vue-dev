<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <p class="splead">|</p>
      <router-link to="/model">Model</router-link>|
      <p class="splead">|</p>
      <router-link to="/comp">Comp</router-link>|
      <p class="splead">|</p>
      <router-link to="/event">Event</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
.splead
  display inline-flex
  margin 0 4px
  color gray
</style>
