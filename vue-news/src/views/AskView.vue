<template>
  <!-- <div>
    <div v-for="(item, index) in askItems" :key="index">
      {{ item.title }}
    </div>
  </div> -->
  <div>
    <List-item></List-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.title">
        <div>
          <p class="pints">{{ item.points }}</p>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">{{
              item.title
            }}</router-link>
          </p>
          <small class="link-text"
            >by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link></small
          >
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
// import { fetchAskList } from "../api/index.js";
import ListItem from "../components/ListItem.vue";
import bus from "@/utils/bus";
//import Listmixn from "../mixins/ListMixin";
export default {
  components: {
    ListItem,
  },
  mixins: [Listmixn],
  // mounted() {
  //   bus.$emit("end:spinner");
  // },
  // mixins: [Listmixn],
  // created() {
  //   bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_ASK")
  //       .then(() => {
  //         console.log("fetched");
  //         bus.$emit("end:spinner");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // },
  // computed: {
  //   ...mapGetters({
  //     askItems: "fetchedAsk",
  //   }),

  //   // ask() {
  //   //   return this.$store.state;
  //   // },
  //   // ...mapState({
  //   //   ask: (state) => state.ask,
  //   // }),
  // },
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  // created() {
  //   this.$store.dispatch("FETCH_ASK");
  //   // console.log("start");
  //   // var vm = this;
  //   // fetchAskList()
  //   //   .then(function (response) {
  //   //     vm.ask = response.data;
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.log(error);
  //   //   });
  // },
};
</script>

<style></style>
