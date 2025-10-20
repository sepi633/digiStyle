<template>

    <div>
        <div dir="rtl" class="flex">
            <a href="tel:02161930300" class="font-medium text-[14px] hover:text-black transition-colors mx-auto">
                تلفن پشتیبانی: ۰۲۱-۶۱۹۳۰۳۰۰
            </a>
                
        </div>

        <SocialMedia class="mt-3" />

        <div > <h3>ثبت‌نام در خبرنامه دیجی‌استایل</h3></div>
        <div>
            <input type="email" class="js-newsletter-input js-text-input o-form__field-input c-new-footer__email-input u-right-placeholder" placeholder="ایمیل خود را وارد کنید">
        </div>
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