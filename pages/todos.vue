<template>
    <div>
        <h3>Made with <i class="fa-solid fa-heart"></i> with nuxt store</h3>
        <input @keyup.enter="addTodo" placeholder="What needs to be done?">
        <div style="overflow: auto; height:500px;">
            <ul style="list-style: none;">
                <li v-for="(todo, index) in todos" :key="index">
                    <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
                    <span :class="{ done: todo.done }" @click="toggle(todo)" >{{ todo.text }}</span>
                    <i @click="removeTodo(index)" class="fa-solid fa-trash" ></i>
                </li>
            </ul>
        </div>  
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    removeTodo (index) {
        console.log(index);
      this.$store.commit('todos/remove', index)
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>