<template>
  <p>Hello {{ name }}</p>
  <br />
  <Counter></Counter>
  <br /><br />
  <Input></Input>
</template>

<script setup>
import { ref } from 'vue'
import Counter from '../components/hello/Counter.vue'
import Input from '../components/hello/Input.vue'

const name = 'World'
</script>

<style scoped>
p {
  color: red;
}
</style>
