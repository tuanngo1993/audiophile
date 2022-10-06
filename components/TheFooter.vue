<template>
  <div class="relative grid grid-cols-12 px-4 py-20 md:px-10 lg:px-40 bg-dark">
    <div class="absolute top-0 h-1 w-30 bg-primary left-4 md:left-10 lg:left-40"></div>
    <div class="col-span-12 space-y-10 text-center lg:col-span-6 md:text-left">
      <img class="ml-auto mr-auto md:ml-0" src="~/assets/images/audiophile.svg" alt="logo" />
      <TheNavigation class="lg:hidden" />
      <p class="text-opacity-50 color-white">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
        specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility
        - we’re open 7 days a week.
      </p>
      <p class="text-opacity-50 color-white">Copyright 2022. All Rights Reserved</p>
    </div>
    <div class="col-span-12 lg:space-y-20 lg:col-span-6 md:justify-self-end">
      <TheNavigation class="hidden lg:block" />
      <div class="flex justify-center gap-4 mt-10 md:justify-end color-white md:-mt-6 lg:mt-0">
        <a href="" class="hover-color-primary"><div class="text-2xl i-mdi-facebook"></div></a>
        <a href="" class="hover-color-primary"><div class="text-2xl i-mdi-twitter"></div></a>
        <a href="" class="hover-color-primary"><div class="text-2xl i-mdi-instagram"></div></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
