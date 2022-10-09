<script setup lang="ts">
  definePageMeta({
    layout: "categories",
  });
</script>

<template>
  <div>
    <div class="flex justify-center px-4 py-24 text-4xl font-bold text-white uppercase bg-dark">HEADPHONES</div>

    <div class="grid grid-cols-12 px-4 my-40 gap-y-10 md:px-10 lg:px-40">
      <div class="col-span-12 p-10 lg:p-24 lg:col-start-1 lg:col-end-6 bg-grey">
        <img class="m-auto" src="/headphone-2.png" alt="" />
      </div>
      <div
        class="col-span-12 space-y-5 text-center lg:col-span-5 lg:col-end-13 md:space-y-10 place-self-center lg:text-left"
      >
        <h5 class="tracking-widest text-opacity-50 text-primary">NEW PRODUCT</h5>
        <h1 class="text-4xl font-bold tracking-wide uppercase md:text-6xl">XX99 Mark II Headphones</h1>
        <p class="text-black text-opacity-50">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone
          experience by reproducing the balanced depth and precision of studio-quality sound.
        </p>
        <button
          class="flex items-center justify-center px-8 py-3 ml-auto mr-auto text-base font-medium text-white uppercase bg-primary hover:bg-light-primary md:py-4 md:px-10 md:text-lg lg:ml-0"
        >
          See Product
        </button>
      </div>
    </div>

    <div class="grid grid-cols-12 px-4 my-40 gap-y-10 md:px-10 lg:px-40">
      <div
        class="order-1 col-span-12 space-y-5 text-center lg:col-start-1 lg:col-end-6 md:space-y-10 place-self-center lg:text-left lg:order-0"
      >
        <h5 class="tracking-widest text-opacity-50 text-primary">NEW PRODUCT</h5>
        <h1 class="text-4xl font-bold tracking-wide uppercase md:text-6xl">XX99 Mark I Headphones</h1>
        <p class="text-black text-opacity-50">
          As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction
          for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
        </p>
        <button
          class="flex items-center justify-center px-8 py-3 ml-auto mr-auto text-base font-medium text-white uppercase bg-primary hover:bg-light-primary md:py-4 md:px-10 md:text-lg lg:ml-0"
        >
          See Product
        </button>
      </div>
      <div class="col-span-12 p-10 lg:p-24 bg-grey lg:col-span-5 lg:col-end-13">
        <img class="m-auto" src="/headphone-1.png" alt="" />
      </div>
    </div>

    <div class="grid grid-cols-12 px-4 my-50 gap-y-10 md:px-10 lg:px-40">
      <div class="col-span-12 p-10 lg:p-24 lg:col-start-1 lg:col-end-6 bg-grey">
        <img class="m-auto" src="/headphone-3.png" alt="" />
      </div>
      <div
        class="col-span-12 space-y-5 text-center lg:col-span-5 lg:col-end-13 md:space-y-10 place-self-center lg:text-left"
      >
        <h5 class="tracking-widest text-opacity-50 text-primary">NEW PRODUCT</h5>
        <h1 class="text-4xl font-bold tracking-wide uppercase md:text-6xl">XX59 Headphoness</h1>
        <p class="text-black text-opacity-50">
          Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The
          stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
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
