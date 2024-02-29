<template>
  <p>Hello {{ name }}</p>
  <input @keyup.enter="alertName" type="text" v-model="inputValue" /> Hello {{ inputValue }}
  <button @click="alertName($event, 123)">Alert name</button>
</template>

<script setup>
import { ref } from 'vue'

const name = 'World'
const inputValue = ref('initial value')
console.log({ inputValue, name })

const alertName = (event, param) => {
  console.log({ event, param })
  alert(inputValue.value)
}
</script>

<style scoped>
p {
  color: red;
}
</style>
