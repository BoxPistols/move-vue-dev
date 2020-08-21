<template>
<div id='app'>
  <div id='nav'>
    <ul>
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link to='/model'>Model</router-link></li>
      <li><router-link to='/comp'>Comp</router-link></li>
      <li><router-link to='/event'>Event</router-link></li>
      <li><router-link to='/data'>Data</router-link></li>
    </ul>
  </div>
  <router-view/>
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
#nav
  ul
    display inline-flex
    list-style none
    li
      margin 0 8px
      a
        text-decoration none
        color gray
        font-size 1.4rem

</style>
