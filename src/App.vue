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

button
  box-sizing border-box
  margin 4px
  line-height calc(36px / 2)
  height 36px
  background-color transparent
  border 2px solid gray
  border-radius 8px
  width auto
  min-width 120px
  cursor pointer
  transition .2s
  &:hove
    background-color lightgrey
  &:focus
    border-radius 0

code
  background-color lighten(gray, 90%)
  padding 4px 8px
  border-radius 4px

</style>
