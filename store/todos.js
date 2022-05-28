export const state = () => ({
    list: []
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, { todoIndex }) {
        state.list.splice(todoIndex, 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}