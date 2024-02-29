<template>
  <p>Parent work</p>
  <input type="text" v-model="lastName" />
  <br /><br />
  <Children
    firstName="Tran"
    :last-name="lastName"
    @updateName="updateNameInParent"
  ></Children>
</template>

<script setup>
import Children from './Children.vue'
import { ref } from 'vue'

const lastName = ref('')

const updateNameInParent = (lastNameUpdate) => {
  lastName.value = lastNameUpdate
}
</script>
