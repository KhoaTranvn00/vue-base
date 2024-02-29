<template>
  <p>Current counter: {{ counter }}</p>
  <button @click="counter++">Increase</button>
  <button @click="increase">Increase</button>
  <button @click="decrease(3)">Decrease</button>
</template>

<script setup>
import { ref } from 'vue'
const counter = ref(0)

const increase = () => {
  counter.value++
}

const decrease = (amount) => {
  counter.value -= amount
}
</script>
