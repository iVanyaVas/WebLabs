<template>
  <div class="container">
    <div>
      <div class="testBox mt-5">
        <question
          v-for="(onetest, i) in test.test"
          v-bind:key="onetest"
          v-bind:question="onetest"
          v-on:answer="writeAnswer($event, i)"
        />
      </div>
      <router-link
        to="/"
        @click="checkAnswers()"
        class="btn col-2 btn-primary btn-lg btn-block"
        type="submit"
      >
        End test
      </router-link>
      <router-link to="/" class="btn col-2 btn-primary btn-lg btn-block"
        >Home</router-link
      >
    </div>
  </div>
</template>

<script>
import question from "../components/question.vue";
export default {
  components: {
    question,
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      test: {},
      answers: [false, false, false],
    };
  },
  created() {
    this.test = this.$store.state.model.words.find(
      (word) => word.title == this.title
    );
  },
  methods: {
    writeAnswer(answer, i) {
      this.answers[i] = answer;
    },
    checkAnswers() {
      this.$store.commit("CHECK_TESTS", this.answers);
    },
  },
};
</script>

<style scoped>
.btn {
  color: white !important;
}
</style>