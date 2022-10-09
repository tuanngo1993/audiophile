<template>
  <div>
    <the-header></the-header>

    <slot />

    <div class="grid grid-cols-12 px-4 my-40 md:px-10 gap-y-24 md:gap-4 lg:px-40 justify-items-center">
      <div
        class="relative w-full col-span-12 pt-24 pb-8 space-y-5 text-center text-gray-500 rounded-md md:col-span-4 bg-grey hover:color-primary"
      >
        <div class="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
          <img src="/image-removebg-preview-41.png" alt="" />
          <div style="box-shadow: 0px 0px 43px 8px #000"></div>
        </div>
        <h5 class="text-lg font-bold tracking-wide uppercase color-black">HEADPHONES</h5>
        <p class="text-sm font-bold">SHOP <span class="color-primary">></span></p>
      </div>
      <div
        class="relative w-full col-span-12 pt-24 pb-8 space-y-5 text-center text-gray-500 rounded-md md:col-span-4 bg-grey hover:color-primary"
      >
        <div class="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
          <img src="/image-removebg-preview-38.png" alt="" />
          <div style="box-shadow: 0px 0px 43px 8px #000"></div>
        </div>
        <h5 class="text-lg font-bold tracking-wide uppercase color-black">SPEAKERS</h5>
        <p class="text-sm font-bold">SHOP <span class="color-primary">></span></p>
      </div>
      <div
        class="relative w-full col-span-12 pt-24 pb-8 space-y-5 text-center text-gray-500 rounded-md md:col-span-4 bg-grey hover:color-primary"
      >
        <div class="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
          <img src="/image-removebg-preview-42.png" alt="" />
          <div style="box-shadow: 0px 0px 43px 8px #000"></div>
        </div>
        <h5 class="text-lg font-bold tracking-wide uppercase color-black">EARPHONES</h5>
        <p class="text-sm font-bold">SHOP <span class="color-primary">></span></p>
      </div>
    </div>

    <div class="grid grid-cols-12 mx-4 md:mx-10 lg:mx-40 my-50 gap-y-10 gap-x-4 xl:gap-28">
      <div class="col-span-12 lg:col-span-6 lg-order-1">
        <img class="w-full" src="/Bitmap-3.png" alt="" />
      </div>
      <div class="col-span-12 space-y-10 text-center rounded-lg lg:col-span-6 place-self-center lg:text-left">
        <h1 class="text-4xl font-bold tracking-wide uppercase color-black">
          Bringing you the <span class="text-primary">best</span> audio gear
        </h1>
        <p class="text-black text-opacity-50">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </div>

    <the-footer></the-footer>
  </div>
</template>
