<template>
  <div>
    <h1 v-if="error.name === 'AxiosError' && error.statusCode === 404">Error on request</h1>
    <h1 v-else-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>