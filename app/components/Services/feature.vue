<template>
  <div class="flex justify-around items-center py-10">
    <div
      v-for="(item, index) in features"
      :key="index"
      class="flex flex-col justify-between items-center gap-2 text-center h-[200px]"
    >
      <NuxtLink :to="item.link" class="block w-[55%]">
        <img :src="item.img" :alt="item.alt" class="w-full" />
      </NuxtLink>
      <span class="text-[#434343] text-[20px] font-bold">{{ item.text }}</span>
    </div>
  </div>
</template>


<script setup>
const features = [
  {
    img: '/img/Services/Fast.svg', 
    text: 'تحویل سریع و آسان',
    link: '/guarantee/original',
    alt: ''
  },
  {
    img: '/img/Services/Garanty.svg',
    text: '۱۴ روز ضمانت بازگشت کالا',
    link: '/guarantee/return',
    alt: ''
  },
  {
    img: '/img/Services/Org.svg',
    text: 'ضمانت اصل بودن کالا',
    link: '/delivery',
    alt: ''
  }
]
</script>
