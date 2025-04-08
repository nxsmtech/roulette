<template>
    <div class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-gradient-to-b from-pink-500 to-yellow-500 rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden relative">
        <button
          @click="$emit('close')"
          class="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>
        <div class="p-6">
          <slot />
        </div>
      </div>
    </div>
  </template>