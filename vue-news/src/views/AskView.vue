<template>
  <div v-for="(item, index) in ask" :key="index">{{ item.title }}</div>
</template>

<script>
import { fetchAskList } from "../api/index.js";
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    var vm = this;
    fetchAskList()
      .then(function (response) {
        vm.ask = response.data;
      })
      .catch();
  },
};
</script>

<style></style>
