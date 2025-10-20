<template>
    <img class=" w-full " src="/img/Slider/S01.jpg" alt="">

          <div v-if="showButton" class="fixed bottom-6 right-6 z-50">
    <UButton
      @click="scrollToTop"
      color="gray"
      class="w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-700 transition-all"
    >
      <UIcon name="heroicons/arrow-up-20" class="w-6 h-6 text-white" />
    </UButton>
  </div>

</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>