<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center px-6 py-12 text-white">
    <!-- Заголовок -->
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
        🎯 Open your case
      </h1>
      <p class="mt-3 text-lg text-gray-300 max-w-md mx-auto">
        Scan the QR code or go to the link below.
      </p>
    </div>

    <!-- QR-код -->
    <div class="bg-white rounded-xl p-4 shadow-xl">
      <img :src="qrUrl" alt="QR Code" class="w-48 h-48" />
    </div>

    <!-- Кнопка -->
    <NuxtLink
      to="/spin"
      class="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition duration-200"
    >
      Go to case
    </NuxtLink>

    <!-- Подпись -->
    <p class="text-sm text-gray-500 mt-6 italic">One spin. One prize. All fair 🕹️</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const config = useRuntimeConfig()
const url = config.public.spinURL
const qrUrl = computed(() => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`)
</script>