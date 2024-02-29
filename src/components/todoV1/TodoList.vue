<template>
  Todo List
  <input v-model="input" @keyup.enter="handleEnter" ref="inputE" />
  <template v-for="todo in todoList" :key="todo.id">
    <TodoItem
      :todo
      @onUpdateComplete="updateComplete"
      @onDelete="deleteTodo"
      @onSelectTodoUpdate="selectTodoUpdate"
    ></TodoItem>
  </template>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import { ref } from 'vue'

const input = ref('')
const todoList = ref([
  {
    id: 1,
    todo: 'Learn Vue JS',
    isCompleted: true
  },
  {
    id: 2,
    todo: 'Learn Quarkus',
    isCompleted: false
  }
])
const todoSelected = ref(null)
const inputE = ref(null)

const handleEnter = () => {
  if (!todoSelected.value) {
    add()
  } else {
    update()
  }
}
const add = () => {
  todoList.value.push({
    id: new Date().valueOf(),
    todo: input.value,
    isCompleted: false
  })
  input.value = ''
}
const update = () => {
  const indexTodoUpdate = todoList.value.findIndex(
    (todo) => todo.id == todoSelected.value.id
  )
  if (indexTodoUpdate != -1) {
    todoList.value[indexTodoUpdate].todo = input.value
    todoList.value[indexTodoUpdate].isCompleted = false
    input.value = ''
    todoSelected.value = null
  }
}

const updateComplete = (id) => {
  const indexTodoUpdate = todoList.value.findIndex((todo) => todo.id == id)
  if (indexTodoUpdate != -1) {
    todoList.value[indexTodoUpdate].isCompleted =
      !todoList.value[indexTodoUpdate].isCompleted
  }
}

const deleteTodo = (id) => {
  todoList.value = todoList.value.filter((todo) => todo.id !== id)
}

const selectTodoUpdate = (id) => {
  todoSelected.value = todoList.value.find((todo) => todo.id === id)
  input.value = todoSelected.value.todo
  inputE.value.focus()
}
</script>
