<!-- Please remove this file from your project -->
<style>
label {
  font-weight: bold;
}
</style>

<template >
    <div v-if="this.gitUserData != null && this.gitUserData != {}">
        <br>
        <label >Login: </label>{{ this.gitUserData.login }}
        <br>
        <label>Creation date: </label>{{ this.gitUserData.created_at }}
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
