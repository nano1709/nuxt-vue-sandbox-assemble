export const state = () => ({
    productsInCart: [],
    total: 0
})

export const mutations = {
    addItem(state, item) {
        state.productsInCart.push(item);
        state.total += item.price;
    },
    removeItem(state, {item, itemIndex}) {
        state.productsInCart.splice(itemIndex, 1);
        state.total -= item.price;
    },
}