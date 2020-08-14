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

    <h3>CheckBox</h3>
    <label><input type="checkbox" v-model="myCheckBox" value="A">A</label><br>
    <label><input type="checkbox" v-model="myCheckBox" value="B">B</label><br>
    <label><input type="checkbox" v-model="myCheckBox" value="C">C</label><br>
    CheckBox is: {{ myCheckBox }}
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      // v-model
      myModel: "",
      myTextArea: "",
      myCheckBox: [],
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