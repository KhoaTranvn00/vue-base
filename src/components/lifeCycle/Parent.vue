<template>
  <h3>Parent</h3>
  <input v-model="valueProps" placeholder="Value prop" />
  <button @click="updateToggle">Toggle</button>
  <br />
  <br />
  <Children v-if="toggle" :prop="valueProps"></Children>
</template>

<script setup>
import Children from './Children.vue'
import { ref } from 'vue'

const toggle = ref(true)
const valueProps = ref('')

const updateToggle = () => (toggle.value = !toggle.value)
</script>
