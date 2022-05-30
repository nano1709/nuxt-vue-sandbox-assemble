<style scoped>
.wrapper {
    margin: 0 auto;
    width: 858px;
}

.column {
    float: left;
    width:50%;
}
</style>


<template>
    <div class="wrapper">
        <div class="column">
            <StoreItem :storeItems="this.productsList"></StoreItem>
        </div>
        <div class="column">
            <Cart></Cart>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import StoreItem from '~/components/Shop/StoreItem.vue';
import Cart from '~/components/Shop/Cart.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { StoreItem, Cart },
    data(){
        return {
            productsList: [
                {
                    id: 1, 
                    productName: "Pencil",
                    price: 2
                },
                {
                    id: 2, 
                    productName: "Phone",
                    price: 200
                },
                {
                    id: 3, 
                    productName: "Apple",
                    price: 1
                },
                {
                    id: 1, 
                    productName: "Orange",
                    price: 5
                }
            ],
        }
    },
})
</script>
