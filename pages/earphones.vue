<script setup lang="ts">
  definePageMeta({
    layout: "categories",
  });
</script>

<template>
  <div>
    <div class="flex justify-center px-4 py-24 text-4xl font-bold text-white uppercase bg-dark">EARPHONES</div>

    <div class="grid grid-cols-12 px-4 my-40 gap-y-10 md:px-10 lg:px-40">
      <div class="col-span-12 p-10 lg:p-24 lg:col-start-1 lg:col-end-6 bg-grey">
        <img class="m-auto" src="/earphone-1.png" alt="" />
      </div>
      <div
        class="col-span-12 space-y-5 text-center lg:col-span-5 lg:col-end-13 md:space-y-10 place-self-center lg:text-left"
      >
        <h5 class="tracking-widest text-opacity-50 text-primary">NEW PRODUCT</h5>
        <h1 class="text-4xl font-bold tracking-wide uppercase md:text-6xl">YX1 WIRELESS EARPHONES</h1>
        <p class="text-black text-opacity-50">
          Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy
          incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
        </p>
        <button
          class="flex items-center justify-center px-8 py-3 ml-auto mr-auto text-base font-medium text-white uppercase bg-primary hover:bg-light-primary md:py-4 md:px-10 md:text-lg lg:ml-0"
        >
          See Product
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
