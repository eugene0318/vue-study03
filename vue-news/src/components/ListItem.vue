<template>
  <div>
    <ul class="news-list">
      <li v-for="(job, index) in listItem" :key="index">
        <!-- <a v-bind:href="item.url">
        {{ item.title }}
      </a> -->
        <div>
          <p class="pints">{{ item.points || 0 }}</p>
          <p class="news-title">
            <template v-if="item.domain"
              ><a href="item.url">{{ job.title }}</a></template
            >
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">{{
                item.title
              }}</router-link>
            </template>
          </p>
          <small class="link-text"
            >{{ (job, time_ago) }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
              >{{ job.domain }}</router-link
            >
            <a :href="item.url" v-else> {{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  created() {
    const name = this.$route.name;
    if (name == "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name == "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (name == "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
  computed: {
    listItem() {
      return this.$store.state.list;
      // if (name == "news") {
      //   return this.$store.state.news;
      // } else if (name == "ask") {
      //   return this.$store.state.ask;
      // } else if (name == "jobs") {
      //   return this.$store.state.jobs;
      // }
    },
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
