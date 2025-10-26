<template>
  <div>
    <img class=" w-full " src="/img/Slider/S01.jpg" alt="">

    <div class="fixed bottom-6 right-6 z-50 cursor-pointer">
      <UButton @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
          viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE -->
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
        </svg>
      </UButton>


    </div>

   
    <!-- <UButton color="info">Button</UButton> -->



  
    <HomeBlogsItem />
    <AdsHome />
    <CategoryItem />
    <ServicesFeature />
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




try{
    const data = await $fetch(`https://boutiqueline-api.bhptest.ir/api/banner`);
    console.log(data);
    
}catch(error){
    console.log(error);
    
}
</script>