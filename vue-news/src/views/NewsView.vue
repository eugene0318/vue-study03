<template>
  <div>
    <List-item></List-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import Listmixn from "../mixins/ListMixin";
export default {
  components: {
    ListItem,
  },

  mixins: [Listmixn],
};
</script>
