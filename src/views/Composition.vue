<template>
  <div class="top">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <h3>You have {{ todosCount }} Todos!</h3>
    <input
      v-model="newTodoName"
      @keyup.enter="addTodo"
      placeholder="Add a Todo"
      type="text"
    />
  </div>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <span>{{ todo.name }}</span>
        <button @click="deleteTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";

let newTodoName = ref("");
let todos = ref([
  {
    id: 1,
    name: "One",
  },
  {
    id: 2,
    name: "Two",
  },
  {
    id: 3,
    name: "Three",
  },
]);
const swearwords = ["fart", "butt hair", "willy"];

const addTodo = () => {
  let newTodo = {
    id: Date.now(),
    name: newTodoName.value,
  };

  todos.value.push(newTodo);
  newTodoName.value = "";
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
};

let todosCount = computed(() => {
  return todos.value.length;
});

watch(newTodoName, (newValue) => {
  if (swearwords.includes(newValue.toLowerCase())) {
    newTodoName.value = "";
    alert("You must NEVER say " + newValue + "!!");
  }
});

// Use Reactive object instead of refs
// I template, använda data.newTodoName istället för newTodoName, osv
// Funktioner och sådant blir data.newTodoName istället för newTodoName.value, osv
/* let data = reactive({
  newTodoName: "",
  todos: [],
}); */
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 0 auto;
  margin-top: 20px;
}

li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}

li span {
  flex-grow: 1;
}
</style>
