<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div class="w-full max-w-md text-center mb-6">
        <h1 class="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow mb-2">🔐 Use your greatest oppurtunity</h1>
        <p class="text-gray-300">Enter your name and open profitable case</p>
      </div>
  
      <div class="w-full max-w-sm">
        <input
          v-model="name"
          type="text"
          placeholder="Enter your name"
          class="w-full mb-4 p-3 rounded text-black outline-none shadow"
        />
        <CaseScroll 
          v-if="name.length"
          @done="onSpinResult" 
          :disabled="spun" 
        />
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCookie } from '#app'

const name = ref('')

onMounted(() => {
  const storedName = localStorage.getItem('name') || ''
  name.value = storedName
})


const spun = ref(false)
const alreadySpun = useCookie('alreadySpun', { default: () => null })
const prize = ref({})

function onSpinResult(prizeResult) {
  prize.value = prizeResult
  spun.value = true
  alreadySpun.value = 'true'
  localStorage.setItem('name', name.value)
}
</script>