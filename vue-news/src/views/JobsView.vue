<template>
  <div>
    <ul class="news-list">
      <li v-for="(job, index) in this.$store.state.jobs" :key="index">
        <!-- <a v-bind:href="item.url">
        {{ item.title }}
      </a> -->
        <div>
          <p class="pints">{{ job.points }}</p>
          <p class="news-title">
            <a href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text"
            >{{ (job, time_ago) }} by
            <!-- <router-link v-bind:to="`/user/${job.user}`" class="link-text">{{
              job.domain
            }}</router-link> -->
            <a :href="job.url"> {{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
    <!-- <p v-for="(job, index) in this.$store.state.jobs" :key="index">
      <a href="">{{ job.title }}</a>
      <small >{{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
//import { fetchJobsList } from "../api/index.js";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    // fetchJobsList()
    //   .then((response) => (this.jobs = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
