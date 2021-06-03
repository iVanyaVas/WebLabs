<template>
  <div class="row mb-3">
    <div class="col-12 card mb-3">
      <div class="card-body row">
        <div class="title col-8">
          <h5 class="card-title">{{ question.word }}</h5>
        </div>
        <div class="col-4">
          <div class="form-check">
            <p v-for="variant in question.answers" :key="variant">
              <input
                v-bind:name="question.word"
                class="form-check-input"
                type="radio"
                v-bind:value="variant.isRight"
                @click="sendAnswer(variant.isRight)"
              />
              <label class="form-check-label" for="first-${this.word}">
                {{ variant.variant }}
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRight: false,
    };
  },
  props: {
    question: {
      type: Object,
    },
  },
  methods: {
    sendAnswer(isRight) {
      this.$emit("answer", isRight);
    },
  },
};
</script>
