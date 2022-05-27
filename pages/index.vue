<template>
  <main>
    <h1>Nacho home page</h1>

    <ul>
        <li v-for="routerItem in routerItems" :key="routerItem.id">
          <NuxtLink :to="routerItem.pageFileName">
            {{ routerItem.textToDisplay }}
          </NuxtLink>
        </li>
    </ul>
  </main>
</template>

<script>
import Vue from 'vue';

// TODO - figure out how to implement interfaces for type safety (IRouterItem)
// TODO - styling
export default Vue.extend({
  name: 'IndexPage',
  data(){
    return {
      routerItems: [
        { id: 1, pageFileName: 'tutorial', textToDisplay: 'Go to tutorial' },
        { id: 2, pageFileName: 'gitHubProfileSearch', textToDisplay: 'Go to GitHub profile' },
        { id: 3, pageFileName: 'cards', textToDisplay: 'Go to cards' },
        { id: 4, pageFileName: 'TODO', textToDisplay: 'TODO' },
      ]     
    }
  }, 
})

</script>
