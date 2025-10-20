<template>
  <div>
      <img class=" w-full " src="/img/Slider/S01.jpg" alt="">

          <div  class="fixed bottom-6 right-6 z-50">
    <UButton
      @click="scrollToTop"
     
  
    >
      ggggggg
    </UButton>


  </div>
  <UButton color="info">Button</UButton>
  </div>
</template>


<script setup>


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