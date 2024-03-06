import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
} from "../api/index.js";
export default {
  //promise
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then((response) => {
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  //async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },

  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => {
  //       commit("SET_JOBS", data);
  //     })
  //     .catch();
  // },

  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      context.commit("SET_JOBS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASK", data);
  //     })
  //     .catch();
  // },

  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    context.commit("SET_ASK", response.data);
    return response;
  },

  // FETCH_USER({ commit }) {
  //   fetchUserInfo()
  //     .then(({ data }) => {
  //       commit("SET_USER", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  async FETCH_USER({ commit }) {
    const response = await fetchUserInfo();
    context.commit("SET_USER", response.data);
    return response;
  },

  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // FETCH_LISt({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then((response) => {
  //       commit("SET_LIST", response.data);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  async FETCH_LISt({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      context.commit("SET_LIST", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
