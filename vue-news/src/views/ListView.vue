<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
//import Listmixn from "../mixins/ListMixin";
export default {
  components: {
    ListItem,
  },
  mixins: [Listmixn],
  // mounted() {
  //   bus.$emit("end:spinner");
  // },
};
</script>

<style></style>
