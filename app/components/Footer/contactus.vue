<template>

    <div>
        <div dir="rtl" class="flex">
            <a href="tel:02161930300" class="font-medium text-[14px] hover:text-black transition-colors">
                تلفن پشتیبانی: ۰۲۱-۶۱۹۳۰۳۰۰
            </a>

            <UButton v-if="showButton" @click="scrollToTop" icon="i-heroicons-arrow-up" color="gray"
                class="fixed bottom-6 right-6 rounded-full p-3 shadow-lg" />
                
        </div>

        <SocialMedia  />

        <div></div>
        <div></div>
    </div>

</template>

<style scoped></style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>