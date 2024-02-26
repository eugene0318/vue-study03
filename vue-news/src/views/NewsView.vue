<template>
  <ul class="news-list">
    <li
      v-for="(user, index) in this.$store.state.news"
      :key="index"
      class="post"
    >
      <div class="points">{{ item.points }}</div>
      <div>
        <p clpss="new-title">
          {{ item.title }}
        </p>
        <small>
          <router-link
            v-if="item.user"
            v-bind:to="`/user/${item.user}`"
            class="link-text"
            >{{ item.user }}</router-link
          >
        </small>
      </div>
      <!--   -->
    </li>
  </ul>
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
