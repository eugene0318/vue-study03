<template lang="">
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.about }}</span>
    </user-profile>
    <!-- <p>{{ userInfo.id }}</p>
    <p>{{ userInfo.karma }}</p>
    <p>{{ userInfo.created }}</p>
    <p>{{ userInfo.about }}</p> -->
  </div>
</template>
<script>
import UserProfile from "@/components/UserProfile.vue";
//import axios from "axios";
export default {
  components: {
    UserProfile,
  },
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
