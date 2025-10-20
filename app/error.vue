<template>
  <div class="flex items-center justify-center w-screen h-screen bg-[#03030d]
">
    <!-- Container ویدیو -->
    <div class="relative w-[70%] h-[70%]">
      <!-- ویدیو پس‌زمینه -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
      >
        <source src="/videos/404.mp4" type="video/mp4" />
        مرورگر شما ویدیو را پشتیبانی نمی‌کند.
      </video>

      <!-- Overlay نیمه شفاف -->
      <div class="absolute top-0 left-0 w-full h-full bg-black/30 rounded-lg"></div>

      <!-- دکمه بازگشت به خانه -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <NuxtLink
          to="/"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          بازگشت به خانه
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// هیچ اسکریپت خاصی لازم نیست
</script>
