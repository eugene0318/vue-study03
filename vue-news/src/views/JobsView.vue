<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="(job, index) in this.$store.state.jobs" :key="index">
        <div>
          <p class="pints">{{ job.points }}</p>
          <p class="news-title">
            <a href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text"
            >{{ (job, time_ago) }} by
            <a :href="job.url"> {{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul> -->
    <!-- <p v-for="(job, index) in this.$store.state.jobs" :key="index">
      <a href="">{{ job.title }}</a>
      <small >{{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
//import { fetchJobsList } from "../api/index.js";
export default {
  components: { ListItem },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_JOBS")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  },
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  // created() {
  //   this.$store.dispatch("FETCH_JOBS");
  //   // fetchJobsList()
  //   //   .then((response) => (this.jobs = response.data))
  //   //   .catch((error) => console.log(error));
  // },
};
</script>

<style></style>
