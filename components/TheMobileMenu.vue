<template>
  <div class="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 top-24" @click="mobileMenuIsOpen = false">
    <div class="bg-white">
      <div class="grid grid-cols-12 px-4 pt-16 pb-8 md:py-24 md:px-10 gap-y-16 md:gap-4 lg:px-40 justify-items-center">
        <NuxtLink
          to="/headphones"
          class="relative w-full col-span-12 pt-16 pb-4 space-y-3 text-center text-gray-500 rounded-md md:col-span-4 bg-grey hover:color-primary"
        >
          <div class="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
            <img class="h-24" src="/image-removebg-preview-41.png" alt="" />
            <div style="box-shadow: 0px 0px 43px 8px #000"></div>
          </div>
          <h5 class="text-lg font-bold tracking-wide uppercase color-black">HEADPHONES</h5>
          <p class="text-sm font-bold">SHOP <span class="color-primary">></span></p>
        </NuxtLink>
        <NuxtLink
          to="/speakers"
          class="relative w-full col-span-12 pt-16 pb-4 space-y-3 text-center text-gray-500 rounded-md md:col-span-4 bg-grey hover:color-primary"
        >
          <div class="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
            <img class="h-24" src="/image-removebg-preview-38.png" alt="" />
            <div style="box-shadow: 0px 0px 43px 8px #000"></div>
          </div>
          <h5 class="text-lg font-bold tracking-wide uppercase color-black">SPEAKERS</h5>
          <p class="text-sm font-bold">SHOP <span class="color-primary">></span></p>
        </NuxtLink>
        <NuxtLink
          to="/earphones"
          class="relative w-full col-span-12 pt-16 pb-4 space-y-3 text-center text-gray-500 rounded-md md:col-span-4 bg-grey hover:color-primary"
        >
          <div class="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
            <img class="h-24" src="/image-removebg-preview-42.png" alt="" />
            <div style="box-shadow: 0px 0px 43px 8px #000"></div>
          </div>
          <h5 class="text-lg font-bold tracking-wide uppercase color-black">EARPHONES</h5>
          <p class="text-sm font-bold">SHOP <span class="color-primary">></span></p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const mobileMenuIsOpen = inject("mobileMenuIsOpen");
</script>

<style scoped></style>
