<template>
  <main>
    Search GitHub User: 
    <input v-model="gitUserName">
    <button @click="getGitHubProfile(gitUserName)">Search</button>
    <div v-if="!this.$fetchState.pending">
      <GitHubUser :gitUserData="gitUserData"></GitHubUser>
    </div>
    <p v-else-if="$fetchState.error">Error while fetching the user</p>
    <div v-else>
      <Loading></Loading>
    </div>
  </main>
</template>

<script>
import Vue from 'vue';
import GitHubUser from '../components/GitHubUser.vue';
import Loading from '../components/Loading.vue';

export default Vue.extend({
  name: 'GitHubProfilePage',
  components: {
    GitHubUser,
    Loading,
  },
  data(){
    return {
        gitUserName: 'nano1709',
        gitUserData: {},
        isLoading: true,
    }
  },
  methods: {
      async getGitHubProfile(gitUserName) {
          this.isLoading = true;
          this.gitUserData = await this.$axios.$get(`https://api.github.com/users/${gitUserName}`)
          this.isLoading = false;
      },
  },
  // Interesting - this doesn't work with browser built in reload
  async fetch(){
      this.getGitHubProfile(this.gitUserName);
  },
  // Interesting - works with browser built in reload
  mounted(){
    this.getGitHubProfile(this.gitUserName);
  },
})

</script>
