<template>

  <div>
    <div dir="rtl" class="flex">
      <a href="tel:02161930300" class="font-medium text-[14px] transition-colors mx-auto text-[var(--color-text)]">
        تلفن پشتیبانی: ۰۲۱-۶۱۹۳۰۳۰۰
      </a>

    </div>

    <SocialMedia class="mt-3" />

    <div class="mt-10 mb-3">
      <h3 class="text-[var(--color-text)]">ثبت‌نام در خبرنامه دیجی‌استایل</h3>
    </div>

    <form @submit.prevent="onSubmit" class="w-full max-w-md">
      <div class="flex items-center ">
        <!-- input wrapper -->
        <div class="flex-1">
          <label for="email" class="sr-only">ایمیل</label>
          <input id="email" v-model="email" type="email" inputmode="email" dir="rtl"
            placeholder="ایمیل خود را وارد کنید" :class="[
              'w-full px-4 py-2  border transition-all outline-none placeholder-rtl',
              error ? 'border-red-500' : 'border-gray-00',
              success ? 'border-green-500' : ''
            ]" @input="clearMessages" aria-invalid="false" aria-describedby="email-help" />
        </div>

        <!-- submit button (متن فلش) -->
        <button type="submit" :disabled="submitting"
          class="inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white hover:opacity-90 disabled:opacity-50 transition"
          aria-label="ارسال ایمیل">
          ←
        </button>

      </div>

      <!-- پیام خطا / موفقیت -->
      <p id="email-help" class="mt-2 min-h-[1.25rem] text-sm" aria-live="polite">
        <span v-if="error" class="text-red-600 animate-fade">{{ error }}</span>
        <span v-else-if="success" class="text-green-600 animate-fade">{{ success }}</span>
      </p>
    </form>

  </div>

</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const error = ref('')
const success = ref('')
const submitting = ref(false)

// ساده و قابل قبول برای ایمیل (پایه‌ای) — قابل تعویض با الگوی دقیق‌تر در صورت نیاز
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function clearMessages() {
  error.value = ''
  success.value = ''
}

// تابع submit
async function onSubmit() {
  // پاک کردن پیام قبلی
  error.value = ''
  success.value = ''

  // ولیدیشن: خالی بودن
  if (!email.value || email.value.trim() === '') {
    error.value = 'ایمیلتو وارد کن'
    return
  }

  // ولیدیشن: فرمت ایمیل
  if (!emailRegex.test(email.value.trim())) {
    error.value = 'ایمیلتو درست وارد کن'
    return
  }

  // اگر درست بود — شبیه‌سازی ارسال (یا اینجا API call بذار)
  try {
    submitting.value = true

    // === اگر خواستی درخواست واقعی بزن:
    // await $fetch('/api/newsletter', { method: 'POST', body: { email: email.value } })

    // شبیه‌سازی تاخیر سرور
    await new Promise((r) => setTimeout(r, 700))

    success.value = 'با موفقیت ثبت شد'
    email.value = ''
  } catch (e) {
    error.value = 'خطا در ثبت — دوباره تلاش کن'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
/* placeholder راست‌چین */
.placeholder-rtl::placeholder {
  /* placeholder راست چین بشه و جهتش RTL */
  text-align: right;
  direction: rtl;
  opacity: 0.6;
}

/* انیمیشن ساده fade برای پیام‌ها */
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade {
  animation: fade .18s ease both;
}
</style>