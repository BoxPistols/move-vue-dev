<template>
  <div class="mod">
    <h2>mod</h2>
    <div @mousemove="point($event, 1)" class="mouse-position">
      <!-- <p @mousemove="noEvent" class="no-event">除外エリア</p> -->
      <p @mousemove.stop class="no-event">除外エリア Stop</p>
      <p>{{ x }} {{ y }}</p>
      <p class="no-move-link">
        <!-- <a @click="noLink" href="https://google.com">preventDefault on google</a> -->
        <a @click.prevent href="https://google.com">.prevent on google</a>
      </p>
      <p><input @keyup.enter="myKey" type="text">KeyEvent enter</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
    }
  },
  methods: {
    point(event, dv) {
      this.x = event.clientX / dv
      this.y = event.clientY / dv
    },
    noEvent(e) {
      e.stopPropagation()
    },
    noLink(e) {
      e.preventDefault()
    },
    myKey(){
      alert("key")
    }

  },
}
</script>

<style scoped lang="stylus">
.mouse-position{
  /*
    position: absolute
    top: 0
    left: 0
  */
  width: 100%
  background: lighten(teal, 90%)
  height: 50px
}
.no-event{
  background lighten(pink, 50%)
  width: 100px
}
</style>
