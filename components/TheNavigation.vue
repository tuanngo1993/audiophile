<template>
  <div>
    <ul
      class="flex flex-col justify-center gap-8 text-sm font-bold tracking-wide color-white md:justify-start md:flex-row"
    >
      <li class="hover:color-primary">
        <NuxtLink to="/">HOME</NuxtLink>
      </li>
      <li class="hover:color-primary">
        <NuxtLink to="/headphones">HEADPHONES</NuxtLink>
      </li>
      <li class="hover:color-primary">
        <NuxtLink to="/speakers">SPEAKERS</NuxtLink>
      </li>
      <li class="hover:color-primary">
        <NuxtLink to="/earphones">EARPHONES</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
