<script setup>
import { ref, computed, watch } from 'vue'

const stateA = ref('')
const stateB = ref('')
const stateC = ref('')

const computedOnStateA = computed(() => {})
const watchOnStateA = watch(() => {})
const methodOnStateA = method(() => {})

const computedOnStateB = computed(() => {})
const watchOnStateB = watch(() => {})
const methodOnStateB = method(() => {})

const computedOnStateC = computed(() => {})
const watchOnStateC = watch(() => {})
const methodOnStateC = method(() => {})
</script>
