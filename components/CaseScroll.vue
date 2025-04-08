<template>
  <div class="w-full max-w-md">
    <button
      @click="startSpin"
      :disabled="spinning"
      class="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded font-semibold shadow transition"
    >
        Pay 2.35 € to open case
    </button>

    <div 
        v-if="initializedSpin"
        class="overflow-hidden h-28 mt-6 border-4 border-yellow-500 bg-black rounded-lg relative">
      <div
        ref="scrollWrapper"
        class="flex items-center h-full will-change-transform"
        :style="{ transform: `translateX(0px)` }"
      >
        <div
          v-for="(item, index) in scrollingItems"
          :key="index"
          class="w-28 min-w-28 h-full flex flex-col items-center justify-center text-center border-r border-gray-700"
        >
          <div>
            <div class="text-xs">{{ item.name }}</div>
            <img :src="item.image" alt="" class="h-10 mt-1 mx-auto" />
            <div
              class="mt-1 h-1 w-full rounded"
              :class="{
                'bg-yellow-400': item.value >= 5000,
                'bg-red-500': item.value >= 3000 && item.value < 5000,
                'bg-pink-500': item.value >= 1500 && item.value < 3000,
                'bg-purple-600': item.value >= 800 && item.value < 1500,
                'bg-blue-600': item.value >= 200 && item.value < 800,
                'bg-gray-500': item.value < 200
              }"
            />
          </div>
        </div>
      </div>
      <div class="absolute left-1/2 top-0 h-full w-1 bg-red-500 z-10 transform -translate-x-1/2" />
    </div>

        <!-- Модалка выигрыша во весь экран -->
    <BaseModal v-if="showPrizeModal" @close="showPrizeModal = false">
      <template #default>
        <div class="text-center p-4">
          <h2 class="text-3xl font-bold text-yellow-400">🎉 WOW! You've opened</h2>
          <p class="text-2xl font-semibold mt-2">{{ lastPrize?.name }}</p>
          <img :src="lastPrize?.image" alt="prize" class="h-72 mx-auto my-4" />
          <button
            class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow"
            @click="showPrizeModal = false"
          >
            Take prize
          </button>
          </div>
        </template>
    </BaseModal>

    <div class="text-center my-4 text-xs font-semibold">
      Totally spent: {{ totalSpent }} €
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import gsap from 'gsap'
import BaseModal from './BaseModal.vue'
import prizes from '/utils/prizes'

const emit = defineEmits(['done'])

const initializedSpin = ref(false)
const spinning = ref(false)
const scrollingItems = ref([])
const scrollWrapper = ref(null)
const showPrizeModal = ref(false)
const lastPrize = ref(null)

const totalSpent = ref(0)
const scholarMode = useRuntimeConfig().public.scholarMode

console.log('scholarMode:', scholarMode); // Проверка значения scholarMode
console.log('typeof scholarMode:', typeof scholarMode); // Проверка типа scholarMode

// Переносим инициализацию с localStorage в onMounted
onMounted(() => {
  const storedTotal = parseFloat(localStorage.getItem('totalSpent') || '0')
  totalSpent.value = parseFloat(storedTotal.toFixed(2))
})

const prizeList = scholarMode ? prizes['scholar'] : prizes['default']

function startSpin() {
  initializedSpin.value = true
  spinning.value = true

  // Reset position
  if (scrollWrapper.value) {
    gsap.set(scrollWrapper.value, { x: 0 })
  }

  scrollingItems.value = []

  const sequenceLength = 40
  const visibleCount = 6
  const targetIndex = sequenceLength - visibleCount - 1

  const sequence = []
  const weighted = []
  prizeList.forEach(prize => {
    for (let i = 0; i < prize.chance; i++) {
      weighted.push(prize)
    }
  })

  const winPrize = weighted[Math.floor(Math.random() * weighted.length)]

  for (let i = 0; i < sequenceLength; i++) {
    sequence.push(i === targetIndex ? winPrize : weighted[Math.floor(Math.random() * weighted.length)])
  }

  scrollingItems.value = sequence
  nextTick(() => {
    const wrapperRect = scrollWrapper.value.getBoundingClientRect()
    const targetItem = scrollWrapper.value?.children?.[targetIndex]
    const itemRect = targetItem?.getBoundingClientRect()
    const min = 100
    const max = 160
    const randomOffset = Math.floor(Math.random() * (max - min + 1)) + min
    const delta = itemRect.left - wrapperRect.left - randomOffset

    gsap.to(scrollWrapper.value, {
      x: -delta,
      duration: 8,
      ease: 'power3.out',
      onComplete: () => {
        // Update total spent
        totalSpent.value += parseFloat((2.35).toFixed(2))
        localStorage.setItem('totalSpent', parseFloat(totalSpent.value.toFixed(2)))

        const final = sequence[sequenceLength - visibleCount - 1]
        emit('done', final)
        spinning.value = false
        lastPrize.value = final
        showPrizeModal.value = true
      }
    })
  })
}
</script>