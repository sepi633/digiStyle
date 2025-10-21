<template>
  <Header :isAbsolute="isHome" ></Header>
  <div>

    <slot />
  </div>
  <!-- <div class=" lg:pt-[120px] ">
  </div> -->
  <Footer :defualt="0"></Footer>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>