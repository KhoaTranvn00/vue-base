<template>
  <div>
    <button @click="handleUpdateTodo(todo.id)">Update</button>
    <button @click="handleDelete(todo.id)">Delete</button>
    <button @click="handleUpdateComplete(todo.id)">
      {{ todo.isCompleted ? 'In progress' : 'Complete' }}
    </button>
    <span :style="getStyleItem">{{ todo.todo }}</span>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'

const props = defineProps({
  todo: Object
})
const emit = defineEmits(['onUpdateComplete', 'onDelete', 'onSelectTodoUpdate'])

const getStyleItem = computed(() => {
  return {
    textDecoration: props.todo.isCompleted ? 'line-through' : ''
  }
})

const handleUpdateComplete = (id) => {
  emit('onUpdateComplete', id)
}
const handleDelete = (id) => {
  emit('onDelete', id)
}
const handleUpdateTodo = (id) => {
  emit('onSelectTodoUpdate', id)
}
</script>

<style scope>
span {
  padding: 10px;
}
button {
  margin: 2px;
}
</style>
