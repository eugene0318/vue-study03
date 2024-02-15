import { createStore } from "vuex";
import { fetchNewsList } from "../api/index.js";
export default createStore({
  state: {
    news: [],
  },
  actions: {
    FETCH_NEWS() {
      fetchNewsList()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
