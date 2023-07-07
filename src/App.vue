<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav
      class="font-[bebas] flex flex-col md:flex-row h-52 md:h-24 items-center justify-evenly md:my-8 text-2xl md:text-4xl mx-16"
    >
      <RouterLink active-class="underline underline-offset-4 decoration-4" to="/"
        >Neueste</RouterLink
      >
      <RouterLink
        :class="[{ 'underline underline-offset-4 decoration-4': $route.name === 'types' }]"
        to="/types/lager"
        >Nach Typ</RouterLink
      >
      <RouterLink active-class="underline underline-offset-4 decoration-4" to="/all"
        >Alle Biere</RouterLink
      >
      <RouterLink active-class="underline underline-offset-4 decoration-4" to="/about"
        >Über mich</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
