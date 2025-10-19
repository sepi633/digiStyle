<template>
  <div class="relative w-[150px]">
    <input
      v-model="q"
      type="text"
      :placeholder="placeholder"
      :class="[
        'w-full px-2 py-1 rounded-none pr-6 focus:outline-none focus:ring-0 transition-colors',
        error ? 'border-b border-red-500 placeholder-red-400' : 'border-b border-black-300 placeholder-black-400'
      ]"
    />

    <!-- آیکون سرچ -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer text-black-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      @click="onIconClick"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const q = ref('')
const error = ref(false)
const toast = useToast()
const placeholder = ref('جستجو...')

const onIconClick = () => {
  if (!q.value.trim()) {
    // input خالی → ارور
    error.value = true
    placeholder.value = 'کادر را پر کنید!'
    toast.error('کادر را پر کنید!', {
      timeout: 5000,
      closeOnClick: true,
      closeButton: true,
      toastClassName: 'custom-toast'
    })
  } else {
    // input پر → موفق
    error.value = false
    placeholder.value = 'جستجو...'
    toast.success('کلیک نکن فعلا!', {
      timeout: 5000,
      closeOnClick: true,
      closeButton: true,
      toastClassName: 'custom-toast'
    })
  }
}
</script>
