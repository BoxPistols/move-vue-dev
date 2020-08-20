<template>
  <div class="model">

    <h1>This is an about page</h1>

    <div class="contents">

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

      <section>
        <h3>CheckBox</h3>
        <label>
          <input type="checkbox" v-model="myCheckBox" value="A" />A
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="myCheckBox" value="B" />B
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="myCheckBox" value="C" />C
        </label>
        <br />
        CheckBox is: {{ myCheckBox }}
        <h3>Agree</h3>
        <label>
          <input type="checkbox" v-model="myAgree" />同意します
        </label>
        <!-- <button :disabled="myAgree===false">送信</button> -->
        <button :disabled="!myAgree">送信</button>
      </section>

      <section>
        <h3>Radio select One & chage image</h3>
        <label>
          Red
          <input type="radio" value="red" v-model="myRadio" />
        </label>
        <label>
          Blue
          <input type="radio" value="blue" v-model="myRadio" />
        </label>
        <label>
          Green
          <input type="radio" value="green" v-model="myRadio" />
        </label>
        <p>Select: {{ myRadio }}</p>img
        <img v-bind:src=" 'img/' +  myRadio + '.jpg'" alt="myRadio" />
      </section>

    </div>

    <div class="contents">
      <section>
        <h3>Select</h3>
        <p>複数選択時はドラッグでエリア選択かCtrl押しながら</p>
        <p :style="{color: mySelectColor}">選択カラー={{ mySelectColor }}</p>
        <select v-model="mySelectColor" multiple>
        <option value disabled>選択してください</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
        </select>
      </section>

      <section>
        <h3>修飾子</h3>
        <input type="text" v-model.lazy.trim="myText" />
        <p>表示タイミング： {{ myText }}</p>
        <p>lazy = 入力後</p>
        <p>trim = 前後トリム</p>

        <input type="number" v-model.number="myTextNum" />
        <p>100プラス： {{ 100 + myTextNum }}</p>
        <p>number = 数値化</p>
      </section>

      <section>
        <h3>Alert trigger on keyup.enter</h3>
        <input type="text" v-on:keyup.enter="showAlert" v-model="myText" />
        <p>表示タイミング： {{ myText }}</p>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // v-model
        myModel: '',
        myTextArea: '',
        myCheckBox: [],
        myAgree: false,
        myRadio: 'red',
        // mySelectColor: ""
        mySelectColor: [],
        myText: 'Hello',
        myTextNum: 0
      }
    },
    methods: {
      showAlert() {
        alert('')
      }
    }
  }
</script>

<style scoped lang="stylus">
.model
  display flex
  flex-direction column
p
  line-height 1.2
  margin 4px 0 8px

.contents
  display flex
  justify-content center
  flex-wrap wrap

section
  width calc(33% - 64px)
  padding 12px 24px
  border 1px solid #eee

.through
  color pink

.hoge
  font-weight 600
</style>