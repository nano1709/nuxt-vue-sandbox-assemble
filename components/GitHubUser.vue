<!-- Please remove this file from your project -->
<template >
    <div v-if="this.gitUserData != null && this.gitUserData != {}">
        <br>
        <label >Login: {{ this.gitUserData.login }}</label>
        <br>
        <label>Creation date: {{ this.gitUserData.created_at }}</label>
        <br>
        <img v-bind:src="this.gitUserData.avatar_url + '.png'" alt="avatar" width="50" height="50">
        <br>
    </div>
    <div v-else>
      Error. Please search again
    </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: ['gitUserData']
}
</script>
