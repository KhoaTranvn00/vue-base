<template>
  <h3>Children</h3>
  <p>Value prop: {{ prop }}</p>
  <input v-model="state" placeholder="State value" />
  <p>Value state: {{ state }}</p>
</template>

<script setup>
import {
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onDeactivated,
  onErrorCaptured,
  ref
} from 'vue'

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log({ onMounted: 'perform side effect' })
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log({
    onUpdated: 'after component update DOM tree (state, prop change)'
  })
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log({ onUnmounted: 'tracking, clean up data (side effect, timers)' })
})

onErrorCaptured(() => {
  console.log('onErrorCaptured')
})

defineProps(['prop'])

const state = ref('')
</script>
