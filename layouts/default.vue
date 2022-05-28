<style>
#nav{
  line-height:30px;
}

.top{
  position: absolute;
  right: 10px;
  top: 20px;
}
    
#nav li {
  list-style:none;
  margin: 0 5px;
  display:inline;
  padding: 9px;
}

.content {
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  text-align: justify;
  color: black;
  padding: 40px;
  font-family: 'Merriweather', serif;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
}

.container  {
  padding: 5%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 600px;
  width: 800px;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px 8px #d0d0d0;
}
</style>

<template>
  <div>
    <div id="nav">
      <ul>
        <li v-for="routerItem in routerItems" :key="routerItem.id">
          <NuxtLink :to="routerItem.pageFileName">
            {{ routerItem.textToDisplay }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="top">
        <RefreshButton></RefreshButton>
      </div>
      <div id="content">
        <Nuxt/>
      </div>
      <div class="footer">Copyright &#169; 2022 by nano1709 </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import RefreshButton from '~/components/RefreshButton.vue';

// TODO - figure out how to implement interfaces for type safety (IRouterItem)
// TODO - styling
export default Vue.extend({
  name: 'IndexPage',
  components: {
    RefreshButton
  },
  data(){
    return {
      routerItems: [
        { id: 1, pageFileName: '/', textToDisplay: 'Home' },
        { id: 3, pageFileName: 'gitHubProfileSearch', textToDisplay: 'Go to GitHub profile' },
        { id: 4, pageFileName: 'todos', textToDisplay: 'Go to TODOs' },
      ]     
    }
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  }
})

</script>