<template >
    <div v-if="this.cartItems !== null && this.cartItems.length != 0" class="scrollDiv">
        <div v-for="(item, index) in cartItems" :key="index">
          <br>
          <label>Product: </label>{{ item.productName }}
          <br>
          <label>Price: </label>{{ item.price }}$
          <br>
          <button><i @click="removeItem(item, index)" class="fa-solid fa-trash" ></i></button>
        </div>
        <label>Total: {{ this.total }}$</label>
    </div>
    <div v-else>
      Empty cart
    </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cartItems () {
      return this.$store.state.cart.productsInCart;
    },
    total() {
      return this.$store.state.cart.total;
    }
  },
  methods: {
    async removeItem(item, itemIndex) {
      this.$store.commit('cart/removeItem', {item, itemIndex});
    }
  }
}
</script>
