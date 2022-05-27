<template>
  <main>
    GitHub profile for User: 
    <input v-model="gitUserName">
    <button @click="getGitHubProfile(gitUserName)">Search</button>
    <div v-if="!this.isLoading">
      <GitHubUser :gitUserData="gitUserData"></GitHubUser>
    </div>
    <div v-else>
      <Loading></Loading>
    </div>
  </main>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
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
          await axios
            .get(`https://api.github.com/users/${gitUserName}`)
            .then(response => {
              this.gitUserData = response.data;
            })
            .catch(error => {
              alert('Something went wrong. Blame the developer :)')
              this.gitUserData = {};
            })
            this.isLoading = false;
      }
  },
  mounted(){
      this.getGitHubProfile(this.gitUserName);
  }
})

</script>
