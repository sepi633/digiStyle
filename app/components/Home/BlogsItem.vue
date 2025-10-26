<template>
  <section class="max-w-7xl mx-auto px-5 py-10">
    <h2 class="text-2xl font-bold text-right mb-8">آخرین مطالب بلاگ دیجی‌استایل</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="(post, index) in blogs"
        :key="index"
        class="flex flex-col items-start text-right"
      >
        <NuxtLink :to="post.link" class="w-full block overflow-hidden rounded-xl">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-56 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </NuxtLink>

        <h3 class="font-semibold text-lg mt-3 hover:text-[var(--color-primary)] transition-colors duration-300">
          {{ post.title }}
        </h3>

        <p class="text-sm text-gray-600 leading-6 mt-2 line-clamp-3">
          {{ post.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { public: { mainUrl } } = useRuntimeConfig()
const route = useRoute()

// لود آخرین پست‌های بلاگ
const { data: blogsData, pending: isLoading, error } = await useAsyncData(
  'blogs-latest',
  () =>
    $fetch('/api/post/post', {
      method: 'GET',
      query: {
        CategoryLabels: ['blogs-fa'], // زبان پیش‌فرض رو دستی گذاشتیم فارسی
        sortBy: 7,
        pageSize: 4,
        pageIndex: 1,
      },
    })
)

// تبدیل داده به فرمت قابل استفاده در قالب
const blogs = computed(() =>
  blogsData.value?.list?.map((item) => ({
    title: item.title,
    description: item.shortDescription,
    image: item.thumbnailUrl ? `${mainUrl}${item.thumbnailUrl}` : '/images/default-blog.jpg',
    link: `/blog/${item.slug}`,
  })) || []
)
</script>
