<template>
  <div>
    <h2 :class="classObj">Event</h2>
    <!-- <h2 :class="{red: isActive, bgCol: !isActive}">Event</h2> -->
    <div class="toggled">
      <button @click="isActive = !isActive">Toggle</button>
    </div>
    <section>
      <h3>Count Up</h3>
      <p>
        Count:
        {{ count }}
      </p>
      <button @click="countUp">Plus</button>
      <!-- with Dummy argument -->
      <button @click="countUpFn(20)">Plus Func</button>
    </section>

    <section>
      <h3>User -> Like only 1Click</h3>
      <p>
        Count:
        {{ count }}
      </p>
      <button value="いいね" @click="addLike" v-bind:disabled="isLike">
        Plus
      </button>
    </section>
  </div>
</template>

<script>
function likeAction() {
  alert();
}

export default {
  data() {
    return {
      count: 0,
      isLike: false,
      isActive: false
      //classObj: true
    };
  },
  methods: {
    countUp() {
      this.count++;
    },
    countUpFn(val) {
      this.count += val;
    },
    addLike() {
      this.isLike = true;
      likeAction();
    }
  },
  computed: {
    classObj() {
      return {
        red: this.isActive,
        bgCol: !this.isActive
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.model {
  display flex flex-direction column
}

.red {
  color: darken(crimson, 30%)
}

.bgCol {
  background: lighten(crimson, 50%)
}

p {
  line-height 1.2 margin 4px 0 8px
}

.contents {
  display flex justify-content center flex-wrap wrap
}

section {
  padding 12px 24px border 1px solid #eee
}
</style>
