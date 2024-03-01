<template>
  <p>Current count: {{ counter.count }}</p>
  <p>Double of current count: {{ counter.doubleCount }}</p>
  <button @click="increase">Increase by store</button>
  <button @click="increaseByComponent">Increase by component</button>
</template>

<script setup>
import { useCounterStore } from '../../stores/counter.js'

const counter = useCounterStore()

const increase = () => {
  counter.increment()
}

const increaseByComponent = () => {
  counter.count++
}
</script>
