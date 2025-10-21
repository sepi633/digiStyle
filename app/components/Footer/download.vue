<template>

    <div class=" flex justify-between w-[85%] mx-auto items-center border-b border-black p-4 mb-6">
        <NuxtLink to="https://www.digistyle.com/landing/app/">
            <h3 class="text-[var(--color-text)] text-base">دانلود اپلیکیشن دیجی‌استایل</h3>

        </NuxtLink>

        <div class="flex gap-4">
            <NuxtLink v-for="(item, i) in cards" :key="i" :to="item.file" download
                class="block cursor-pointer hover:shadow-lg transition">
                <NuxtImg :src="item.img" format="webp" class=""  width="135px" height="40px"/>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const cards = [
  { img: '/img/Download/PlayStore.png', file: 'https://trc.metrix.ir/qni7jr/' },
  { img: '/img/Download/Bazar.png', file: 'https://trc.metrix.ir/19tmjc/' },
  { img: '/img/Download/Myket.png', file: 'https://trc.metrix.ir/i3gh8s/' },
  { img: '/img/Download/SibApp.png', file: 'https://trc.metrix.ir/i2xjdu/' }
]
</script>

<style scoped></style>