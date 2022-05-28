<template>
    <main>
        <i @click="refresh" class="fa-solid fa-arrows-rotate "></i>      
    </main>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  }
})
</script>