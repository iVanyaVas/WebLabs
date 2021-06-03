import { createStore } from "vuex";
import Model from "../model/model.js";
export default createStore({
  state: {
    model: new Model(),
  },
  mutations: {
    CHECK_TESTS(state, answers) {
      state.model.checkTests(answers);
    },
  },
  actions: {},
  modules: {},
});
