<template>
  <div>
    <div v-for="(item, index) in askItems" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { fetchAskList } from "../api/index.js";
export default {
  computed: {
    ...mapGetters({
      askItems: "fetchedAsk",
    }),

    // ask() {
    //   return this.$store.state;
    // },
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
  },
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_ASK");
    // console.log("start");
    // var vm = this;
    // fetchAskList()
    //   .then(function (response) {
    //     vm.ask = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
