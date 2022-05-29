<style>
label {
  font-weight: bold;
}
</style>

<template >
    <div v-if="this.storeItems != null && this.storeItems != []" class="scrollDiv">
        <div v-for="(item, index) in storeItems" :key="index" >
          <br>
          <label>Product: </label>{{ item.productName }}
          <br>
          <label>Price: </label>{{ item.price }}$
          <br>
          <button @click="addItem(item)"><i class="fa-solid fa-cart-plus"></i></button>
        </div>
    </div>
    <div v-else>
      Error.
    </div>
</template>

<script>
export default {
  name: 'StoreItem',
  props: ['storeItems'],
  methods: {
      async addItem(item) {
        this.$store.commit('cart/addItem', item);
      }
  },
}
</script>
