<template>
  <div class="grid items-center grid-cols-12 px-4 py-8 md:px-10 lg:px-40 bg-dark place-content-between">
    <div class="flex items-center col-span-6 gap-4 lg:col-span-2 justify-self-start">
      <button @click="mobileMenuIsOpen = true" class="text-white lg:hidden">
        <div class="text-3xl i-mdi-hamburger-menu"></div>
      </button>
      <Teleport to="body">
        <TheMobileMenu v-if="mobileMenuIsOpen" />
      </Teleport>
      <NuxtLink to="/"><img src="~/assets/images/audiophile.svg" alt="logo" /></NuxtLink>
    </div>
    <TheNavigation class="hidden col-span-9 lg:block justify-self-center" />
    <div class="col-span-6 lg:col-span-1 color-white hover-color-primary justify-self-end">
      <div class="text-2xl i-mdi-cart-outline" />
    </div>
  </div>
  <div class="bg-dark">
    <div class="h-0.2 px-4 md:px-10 lg:px-40 bg-clip-content bg-white bg-opacity-20"></div>
  </div>
</template>

<script setup lang="ts">
  const mobileMenuIsOpen = inject("mobileMenuIsOpen");
</script>

<style scoped></style>
