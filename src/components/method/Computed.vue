<template>
  <h3>Computed</h3>
  <input v-model="firstName" />
  <input v-model="lastName" />
  <p>Full name with computed is {{ fullName }}</p>
  <p>Full name with method is {{ fullNameMethod() }}</p>

  <p>Other state count: {{ count }}</p>
  <button @click="count++">Change other state</button>
</template>

<script setup>
import { ref, computed } from 'vue'
const count = ref(0)
const firstName = ref('Tran')
const lastName = ref('Khoa')
const fullName = computed(() => {
  console.log('compute running')
  return firstName.value + ' ' + lastName.value
})

const fullNameMethod = () => {
  console.log('method running')
  return firstName.value + ' ' + lastName.value
}
</script>
