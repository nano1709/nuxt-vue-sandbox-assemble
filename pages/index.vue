<template>
  <main>
    <h1>Nacho home page</h1>

    <ul>
        <li v-for="item in items" :key="item.id">
          <NuxtLink :to="item.pageFileName">
            {{ item.textToDisplay }}
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
      items: [
        { id: 1, pageFileName: 'Tutorial', textToDisplay: 'Go to tutorial' },
        { id: 2, pageFileName: 'Blog voting page', textToDisplay: 'Blog voting page' },
        { id: 3, pageFileName: 'Toggle switch page', textToDisplay: 'Toggle switch page' },
        { id: 4, pageFileName: 'TODO', textToDisplay: 'TODO' },
      ]     
    }
  }, 
})

</script>
