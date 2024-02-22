<template lang="">
  <div>
    <p>{{ userInfo.id }}</p>
    <p>{{ userInfo.karma }}</p>
    <p>{{ userInfo.created }}</p>
    <p>{{ userInfo.about }}</p>
  </div>
</template>
<script>
//import axios from "axios";
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    console.log(this.$route.params.id);
    const username = this.$route.params.id;
    //axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`);
    this.$store.dispatch("FETCH_USER", username);
  },
};
</script>
<style lang=""></style>
