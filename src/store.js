import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
  state() {
    return {
      users: [],
    };
  },
  mutations: {
    getUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async getUsers(context) {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      context.commit("getUsers", res.data);
      console.log(res.data);
      // let response = await fetch("https://jsonplaceholder.typicode.com/users");
      // let data = await response.json();
      // context.commit("fetchUsers", data);
    },
  },
});

export default store;
