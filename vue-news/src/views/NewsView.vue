<template>
  <div>
    <div v-for="(user, index) in this.$store.state.news" :key="index">
      {{ user.title }}
    </div>
    <div>news</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    console.log("start");
    this.$store.dispatch("FETCH_NEWS");
    console.log("end");

    // var vm = this;
    // fetchNewsList()
    //   .then((response) => {
    //     vm.users = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
