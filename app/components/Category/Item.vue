<template>
  <footer class="flex flex-col md:flex-row justify-around py-10 px-6 text-gray-600 gap-6 md:gap-0 countainer">
    <div 
      v-for="(col, index) in footerColumns" 
      :key="index" 
      class="flex flex-col gap-2 items-center"
    >
      <h3 class="font-bold mb-2 text-[var(--color-text)] text-[20px]">{{ col.title }}</h3>
      <ul class="flex flex-col gap-1 items-center">
        <li v-for="(link, i) in col.links" :key="i">
          <NuxtLink 
            :to="link.url" 
            class="hover:text-black cursor-pointer transition-colors duration-200 text-[var(--color-muted)]"
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
    title: 'مردانه',
    links: [
      { label: 'لباس مردانه', url: '/category/women' },
      { label: 'کفش مردانه', url: '/category/men' },
      { label: 'اکسسوری مردانه', url: '/category/kids' },
      { label: 'ورزشی مردانه ', url: '/category/beauty' }
    ]
  },
 {
    title: 'زنانه',
    links: [
      { label: 'لباس زنانه', url: '/category/women' },
      { label: 'کفش زنانه', url: '/category/men' },
      { label: 'اکسسوری زنانه', url: '/category/kids' },
      { label: 'ورزشی زنانه ', url: '/category/beauty' }
    ]
  },
  {
    title: 'بچگانه ',
    links: [
      { label: 'نوزاد ', url: '/about' },
      { label: 'دخترانه  ', url: '/contact' },
      { label: 'پسرانه  ', url: '/careers' }
    ]
  },
    {
    title: 'زیبایی و سلامت',
    links: [
      { label: 'لوازم آرایشی', url: '/category/women' },
      { label: 'مراقبت پوست', url: '/category/men' },
      { label: 'لوازم بهداشتی', url: '/category/kids' },
      { label: ' لوازم شخصی برقی', url: '/category/beauty' },
      { label: ' عطر و ادکلن ', url: '/category/sports' },
      { label: 'ابزار سلامت ', url: '/gift-cards' }
    ]
  }
]
</script>
