<template>
<div class="about">
  <h1>This is an about page</h1>
  <section>
    <h2>Form / Model</h2>

    <input type="text" v-model="myModel" placeholder="input" />
    <p>
      input view: {{ myModel }}
      <br />
      textLength: {{ myModel.length }}
    </p>

    <textarea type="text" v-model="myTextArea" placeholder="textarea" />
    <p>
      textarea view: {{ myTextArea }}
      <br />
      textLength: {{ myTextArea.length }}
    </p>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      // v-model
      myModel: "",
      myTextArea: ""
    };
  }
};
</script>

<style scoped lang="stylus">
section
  border 1px solid #eeeeee
.through
  color pink
.hoge
  font-weight 600
</style>