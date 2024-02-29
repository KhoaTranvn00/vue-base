<template>
  <p>Children work</p>
  <p>My name is {{ `${firstName} ${lastName}` }}</p>
  <p></p>
  <button @click="updateNameInChildren(Nguyen)">
    Update lastName to "Khoa"
  </button>
</template>

<script setup>
defineProps({
  firstName: String,
  lastName: {
    type: String,
    default: 'anonymous'
    // required, validator, ...
  }
})

const emit = defineEmits(['updateName'])

const updateNameInChildren = (updateNameInChildren) => {
  emit('updateName', 'Khoa')
}
</script>
