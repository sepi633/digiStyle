<template>
    <div dir="rtl" :class="isAbsolute ? 'absolute top-0 left-0 w-full z-50' : 'relative w-full'" class="bg-transparent flex justify-around rtl items-center ">

        <div class="basket flex gap-4">

            <div class="basketIcon">
                <img src="/img/cart.png" class="w-[28px]" alt="basketIcon">
            </div>

            <div class="login">
                <NuxtLink class="text-black" to="/login">ورود</NuxtLink>
            </div>
        </div>

        <div class="logoMenue flex flex-col">
            <NuxtLink class="flex justify-center py-4 w-full mx-auto border-b border-black" to="/">

                <NuxtImg src="/img/Logo/logo.svg" class="filter brightness-[10%]" alt="logo" width="180" height="50" />

            </NuxtLink>
            <nav class="flex items-center gap-6 justify-center py-2 ">
                <NuxtLink v-for="item in menuItems" :key="item.link" :to="item.link"
                    :class="item.highlight ? 'text-red-500 font-bold ' : 'text-black hover:text-red-500'"
                    class="transition text-[12px] font-medium">
                    {{ item.label }}
                </NuxtLink>
            </nav>
        </div>

        <Search />

    </div>
</template>

<script setup>
const menuItems = [
    { label: 'زنانه', link: '/women' },
    { label: 'مردانه', link: '/men' },
    { label: 'بچگانه', link: '/kids' },
    { label: 'زیبایی و سلامت', link: '/beauty' },
    { label: 'ورزش و سفر', link: '/sport' },
    { label: 'حراج استایل', link: '/sale', highlight: true },
    { label: 'خانه ساعت', link: '/watch' },
    { label: 'خانه طلا', link: '/gold' },
    { label: 'پرنده‌ها', link: '/birds' },
    { label: 'کارت هدیه', link: '/gift' },
];

defineProps({
  isAbsolute: {
    type: Boolean,
    default: false
  }
})

</script>