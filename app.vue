<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const mobileMenuIsOpen = ref(false);
  provide("mobileMenuIsOpen", mobileMenuIsOpen);

  watch(mobileMenuIsOpen, (newMobileMenuIsOpen, _) => {
    if (newMobileMenuIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
</script>

<style>
  html {
    font-family: "Manrope";
  }
</style>
