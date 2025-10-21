<template>
  <footer class="flex flex-col md:flex-row justify-between py-10 px-6 text-gray-600 gap-6 md:gap-0">
    <div 
      v-for="(col, index) in footerColumns" 
      :key="index" 
      class="flex flex-col gap-2"
    >
      <h3 class="font-bold mb-2 text-[var(--color-text)] text-[15px]">{{ col.title }}</h3>
      <ul class="flex flex-col gap-1">
        <li v-for="(link, i) in col.links" :key="i">
          <NuxtLink 
            :to="link.url" 
            class="hover:text-black cursor-pointer transition-colors duration-200 text-sm text-[var(--color-muted)]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const footerColumns = [
  {
    title: 'خرید',
    links: [
      { label: 'زنانه', url: '/category/women' },
      { label: 'مردانه', url: '/category/men' },
      { label: 'بچگانه', url: '/category/kids' },
      { label: 'زیبایی و سلامت', url: '/category/beauty' },
      { label: 'ورزش و سفر', url: '/category/sports' },
      { label: 'کارت هدیه', url: '/gift-cards' }
    ]
  },
  {
    title: 'خدمات مشتریان',
    links: [
      { label: 'پاسخ به پرسش‌های متداول', url: '/faq' },
      { label: 'رویه‌های بازگرداندن کالا', url: '/returns' },
      { label: 'شرایط استفاده', url: '/terms' },
      { label: 'حریم خصوصی', url: '/privacy' }
    ]
  },
  {
    title: 'اطلاعات دیجی‌استایل',
    links: [
      { label: 'درباره دیجی‌استایل', url: '/about' },
      { label: 'تماس با دیجی‌استایل', url: '/contact' },
      { label: 'همکاری با دیجی‌استایل', url: '/careers' }
    ]
  }
]
</script>
